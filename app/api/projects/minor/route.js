import connectToDatabase from "@/lib/mongodb.js";
import Project from "@/models/Project.js";

export async function GET() {
  try {
    await connectToDatabase();
    const minorProjects = await Project.find({ majorProject: false }).limit(6);
    return Response.json(minorProjects);
  } catch (error) {
    console.error("Error fetching minor projects:", error);
    return Response.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
