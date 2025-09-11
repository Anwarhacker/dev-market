"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import Modal from "../../components/Modal";
import { Search, Filter } from "lucide-react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [
    projects,
    searchTerm,
    selectedCategory,
    selectedTech,
    selectedProjectType,
    minPrice,
    maxPrice,
  ]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = () => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    if (selectedTech) {
      filtered = filtered.filter((project) =>
        project.techStack.includes(selectedTech)
      );
    }

    if (selectedProjectType) {
      if (selectedProjectType === "major") {
        filtered = filtered.filter((project) => project.majorProject === true);
      } else if (selectedProjectType === "minor") {
        filtered = filtered.filter((project) => project.majorProject === false);
      }
    }

    if (minPrice) {
      filtered = filtered.filter(
        (project) => project.price >= parseFloat(minPrice)
      );
    }

    if (maxPrice) {
      filtered = filtered.filter(
        (project) => project.price <= parseFloat(maxPrice)
      );
    }

    setFilteredProjects(filtered);
  };

  const handleBuyNow = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const categories = [...new Set(projects.map((p) => p.category))];
  const techStacks = [...new Set(projects.flatMap((p) => p.techStack))];

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              All Projects
            </h1>

            {/* Search and Filter Bar */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 mb-12 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 opacity-50"></div>

              <div className="relative">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative group">
                        <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <input
                          type="text"
                          placeholder="Search projects by name or description..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                        showFilters
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <Filter className="h-5 w-5 mr-2" />
                      {showFilters ? "Hide Filters" : "Show Filters"}
                    </button>
                  </div>

                  {showFilters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pt-4 border-t border-gray-200"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">All Categories</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>

                        <select
                          value={selectedTech}
                          onChange={(e) => setSelectedTech(e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">All Technologies</option>
                          {techStacks.map((tech) => (
                            <option key={tech} value={tech}>
                              {tech}
                            </option>
                          ))}
                        </select>

                        <select
                          value={selectedProjectType}
                          onChange={(e) =>
                            setSelectedProjectType(e.target.value)
                          }
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">All Project Types</option>
                          <option value="major">Major Projects</option>
                          <option value="minor">Minor Projects</option>
                        </select>

                        <input
                          type="number"
                          placeholder="Min Price"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />

                        <input
                          type="number"
                          placeholder="Max Price"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <p className="text-gray-500 text-lg mt-4">
                  Loading projects...
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project._id}
                      project={project}
                      onBuyNow={handleBuyNow}
                    />
                  ))}
                </div>

                {filteredProjects.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      No projects found matching your criteria.
                    </p>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}
