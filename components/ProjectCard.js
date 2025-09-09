import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, onBuyNow }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}

      <div className="relative p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full font-medium border border-purple-100"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Price and Category */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${project.price}
            </span>
          </div>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Links Row */}
          <div className="flex gap-2">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
            >
              <ExternalLink size={14} className="mr-1" />
              Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
            >
              <Github size={14} className="mr-1" />
              Code
            </a>
          </div>

          {/* Main Actions */}
          <div className="flex gap-2">
            <Link
              href={`/projects/${project._id}`}
              className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 text-center text-sm font-medium shadow-sm hover:shadow-md"
            >
              View Details
            </Link>
            <button
              onClick={() => onBuyNow(project)}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
