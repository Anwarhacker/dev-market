import connectToDatabase from "@/lib/mongodb.js";
import Project from "@/models/Project.js";
import { sanitizeInput } from "@/lib/validation.js";
import mongoose from "mongoose";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params;
    
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid project ID" }, { status: 400 });
    }
    
    const project = await Project.findById(id).lean();
    if (!project) {
      return Response.json({ error: "Project not found" }, { status: 404 });
    }

    return Response.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return Response.json({ error: "Failed to fetch project" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params;
    
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid project ID" }, { status: 400 });
    }
    
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
    
    const updatedProject = await Project.findByIdAndUpdate(id, sanitizedData, {
      new: true,
      runValidators: true
    });
    
    if (!updatedProject) {
      return Response.json({ error: "Project not found" }, { status: 404 });
    }
    
    return Response.json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    if (error.name === 'ValidationError') {
      return Response.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    return Response.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params;
    
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid project ID" }, { status: 400 });
    }
    
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return Response.json({ error: "Project not found" }, { status: 404 });
    }
    
    return Response.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return Response.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
