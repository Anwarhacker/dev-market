import connectToDatabase from "@/lib/mongodb.js";
import Project from "@/models/Project.js";

export async function GET() {
  try {
    await connectToDatabase();
    const majorProjects = await Project.find({ majorProject: true })
      .sort({ createdAt: -1 })
      .limit(6)
      .lean();
    return Response.json(majorProjects);
  } catch (error) {
    console.error("Error fetching major projects:", error);
    return Response.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
