"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Modal from "../../../components/Modal";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  IndianRupee,
} from "lucide-react";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/projects/${id}`);
      if (!response.ok) {
        throw new Error("Project not found");
      }
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.error("Error fetching project:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16 flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Project Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Projects
            </Link>

            {/* Project Header */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h1>
                  <p className="text-gray-600 text-base sm:text-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:ml-8 w-full lg:w-auto">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <IndianRupee className="h-6 w-6 text-green-600 mr-2" />
                      <span className="text-2xl sm:text-3xl font-bold text-green-600">
                        ₹{project.price}
                      </span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Source
                      </a>
                      <button
                        onClick={handleBuyNow}
                        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Setup Procedure */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Setup Procedure
              </h2>
              <div className="prose max-w-none">
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-black">
                  {project.setupProcedure}
                </pre>
              </div>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
                    >
                      <img
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </div>
  );
}
