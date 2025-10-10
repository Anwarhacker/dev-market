import connectToDatabase from "@/lib/mongodb.js";
import Project from "@/models/Project.js";
import { sanitizeInput } from "@/lib/validation.js";
import { buildProjectQuery, getPaginationOptions } from "@/lib/dbOptimization.js";

export async function GET(request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    
    // Sanitize inputs
    const search = sanitizeInput(searchParams.get("search") || "");
    const category = sanitizeInput(searchParams.get("category") || "");
    const techStack = sanitizeInput(searchParams.get("techStack") || "");
    const minPrice = parseFloat(searchParams.get("minPrice")) || null;
    const maxPrice = parseFloat(searchParams.get("maxPrice")) || null;
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    let query = {};

    if (search && search.length > 0) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (category && category.length > 0) {
      query.category = category;
    }

    if (techStack && techStack.length > 0) {
      query.techStack = { $in: [techStack] };
    }

    if (minPrice !== null || maxPrice !== null) {
      query.price = {};
      if (minPrice !== null && minPrice >= 0) query.price.$gte = minPrice;
      if (maxPrice !== null && maxPrice >= 0) query.price.$lte = maxPrice;
    }

    const { skip, limit: validLimit } = getPaginationOptions(page, limit);
    
    const projects = await Project.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(validLimit)
      .lean();
      
    const total = await Project.countDocuments(query);

    return Response.json({
      projects,
      pagination: {
        page,
        limit: validLimit,
        total,
        pages: Math.ceil(total / validLimit)
      }
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return Response.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // Sanitize inputs
    const sanitizedData = {
      title: sanitizeInput(body.title),
      description: sanitizeInput(body.description),
      setupProcedure: sanitizeInput(body.setupProcedure),
      price: parseFloat(body.price) || 0,
      demoLink: sanitizeInput(body.demoLink || ""),
      githubLink: sanitizeInput(body.githubLink || ""),
      category: sanitizeInput(body.category),
      techStack: Array.isArray(body.techStack) ? body.techStack.map(tech => sanitizeInput(tech)) : [],
      screenshots: Array.isArray(body.screenshots) ? body.screenshots.map(url => sanitizeInput(url)) : [],
      demoImages: body.demoImages || [],
      majorProject: Boolean(body.majorProject)
    };

    const project = new Project(sanitizedData);
    await project.save();
    return Response.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    if (error.name === 'ValidationError') {
      return Response.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    return Response.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
