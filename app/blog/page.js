"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NodeJSSetup from "../../components/NodeJSSetup";
import MongoDBSetup from "../../components/MongoDBSetup";
import CloudinarySetup from "../../components/CloudinarySetup";
import VSCodeSetup from "../../components/VSCodeSetup";
import GitSetup from "../../components/GitSetup";
import NPMYarnSetup from "../../components/NPMYarnSetup";
import DeploymentSetup from "../../components/DeploymentSetup";
import { ChevronRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState("nodejs");

  const sections = [
    { id: "nodejs", title: "Node.js Setup", icon: "🟢" },
    { id: "mongodb", title: "MongoDB Setup", icon: "🍃" },
    { id: "cloudinary", title: "Cloudinary Setup", icon: "☁️" },
    { id: "vscode", title: "VS Code Setup", icon: "💻" },
    { id: "git", title: "Git Setup", icon: "📚" },
    { id: "npm", title: "NPM & Yarn", icon: "📦" },
    { id: "deployment", title: "Deployment", icon: "🚀" },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 sm:py-16 lg:py-20">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20"
              >
                📚 Developer Documentation
              </motion.div>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                Setup & Installation Guide
              </h1>

              <p className="text-base xs:text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
                Complete step-by-step guides to set up your development
                environment with Node.js, MongoDB, VS Code, and essential tools.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block lg:w-1/4 xl:w-1/5">
              <div className="sticky top-20 bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-green-700">
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4 flex items-center">
                  <BookOpen className="h-4 w-4 lg:h-5 lg:w-5 mr-2 text-purple-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-1 lg:space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-2 lg:px-3 py-2 rounded-lg transition-all duration-200 flex items-center ${
                        activeSection === section.id
                          ? "bg-purple-100 text-purple-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <span className="mr-2 text-sm">{section.icon}</span>
                      <span className="text-xs lg:text-sm">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 xl:w-4/5">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-6 sm:mb-8">
                <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-600" />
                    Quick Navigation
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`px-2 sm:px-3 py-2 sm:py-3 rounded-lg transition-all duration-200 flex items-center justify-center text-center ${
                          activeSection === section.id
                            ? "bg-purple-100 text-purple-700 font-medium"
                            : "text-gray-600 bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        <span className="mr-1 text-sm">{section.icon}</span>
                        <span className="text-xs leading-tight">
                          {section.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <NodeJSSetup />

              <MongoDBSetup />

              <CloudinarySetup />

              <VSCodeSetup />

              <GitSetup />

              <NPMYarnSetup />

              <DeploymentSetup />

              {/* Back to Home */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-6 sm:py-8"
              >
                <Link
                  href="/"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
