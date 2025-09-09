import connectToDatabase from "@/lib/mongodb.js";
import Project from "@/models/Project.js";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const project = await Project.findById(id);
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
    const { id } = params;
    const body = await request.json();
    const updatedProject = await Project.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedProject) {
      return Response.json({ error: "Project not found" }, { status: 404 });
    }
    return Response.json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    return Response.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
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
