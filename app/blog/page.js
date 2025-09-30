"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NodeJSSetup from "../../components/NodeJSSetup";
import MongoDBSetup from "../../components/MongoDBSetup";
import CloudinarySetup from "../../components/CloudinarySetup";
import VSCodeSetup from "../../components/VSCodeSetup";
import GitSetup from "../../components/GitSetup";
import NPMYarnSetup from "../../components/NPMYarnSetup";
import DeploymentSetup from "../../components/DeploymentSetup";
import { ChevronRight, BookOpen, Menu, X } from "lucide-react";

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState("nodejs");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-8xl mx-auto bg-gray-50 flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-16 pb-4">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-6 sm:py-10 md:py-16 lg:py-24">
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Background Glow Circles */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="inline-block px-2 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm md:text-base font-medium mb-3 sm:mb-4 border border-white/20 shadow-lg"
              >
                📚 Developer Documentation
              </motion.div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent leading-tight sm:leading-snug px-2 sm:px-0">
                Setup & Installation Guide
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 md:mb-6 max-w-3xl mx-auto text-gray-300 leading-relaxed px-3 sm:px-4">
                Your comprehensive guide to setting up a full-stack development
                environment with Node.js, MongoDB, and other essential tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-5 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-purple-600 text-white font-bold"
                          : "bg-gray-100 text-gray-800 hover:bg-purple-100"
                      }`}
                    >
                      <span className="mr-2">{section.icon}</span>
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile Menu Floating Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-3 rounded-full shadow-2xl hover:bg-purple-700 transition-transform transform hover:scale-110"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
              <div
                className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25 }}
                  className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-2xl overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                        Quick Navigation
                      </h3>
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <nav className="space-y-2">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full px-4 py-3 rounded-lg flex items-center transition-all duration-300 ${
                            activeSection === section.id
                              ? "bg-purple-600 text-white font-bold"
                              : "bg-gray-100 text-gray-800 hover:bg-purple-50"
                          }`}
                        >
                          <span className="mr-3">{section.icon}</span>
                          <span className="text-base">{section.title}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Main Content */}
            <main className="lg:col-span-3">
              {/* Mobile Quick Jump Chips */}
              <div className="lg:hidden mb-6">
                <div className="bg-white rounded-xl shadow-md p-3.5 border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-900 mb-2.5 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                    Quick Jump
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                          activeSection === section.id
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-purple-50"
                        }`}
                      >
                        <span className="inline-flex items-center">
                          <span className="mr-1.5">{section.icon}</span>
                          <span>{section.title}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Setup Sections */}
              <div className="space-y-8 md:space-y-12">
                <NodeJSSetup />
                <MongoDBSetup />
                <CloudinarySetup />
                <VSCodeSetup />
                <GitSetup />
                <NPMYarnSetup />
                <DeploymentSetup />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center pt-4 sm:pt-6 md:pt-8 lg:pt-10"
              >
                <button
                  onClick={() => (window.location.href = "/")}
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-700 text-white px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-xs sm:text-sm md:text-base font-bold"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 rotate-180" />
                  Back to Home
                </button>
              </motion.div>
            </main>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
