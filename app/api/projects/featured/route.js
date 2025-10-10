import connectToDatabase from "@/lib/mongodb.js";
import Project from "@/models/Project.js";

export async function GET() {
  try {
    await connectToDatabase();
    const featuredProjects = await Project.find({ majorProject: true })
      .sort({ createdAt: -1 })
      .limit(6)
      .lean();
    return Response.json(featuredProjects);
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return Response.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
