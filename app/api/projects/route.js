import connectToDatabase from "@/lib/mongodb.js";
import Project from "@/models/Project.js";

export async function GET(request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const techStack = searchParams.get("techStack") || "";
    const minPrice = parseFloat(searchParams.get("minPrice")) || null;
    const maxPrice = parseFloat(searchParams.get("maxPrice")) || null;

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

    const projects = await Project.find(query).sort({ createdAt: -1 });
    return Response.json(projects);
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

    const project = new Project(body);
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
