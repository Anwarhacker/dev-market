"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";

export default function Home() {
  const [majorProjects, setMajorProjects] = useState([]);
  const [minorProjects, setMinorProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch major projects
    fetch("/api/projects/major")
      .then((res) => res.json())
      .then((data) => setMajorProjects(data))
      .catch((err) => console.error("Error fetching major projects:", err));

    // Fetch minor projects
    fetch("/api/projects/minor")
      .then((res) => res.json())
      .then((data) => setMinorProjects(data))
      .catch((err) => console.error("Error fetching minor projects:", err));
  }, []);

  const handleBuyNow = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DevMarket",
    url: "https://dev-market.online",
    description:
      "Premium developer projects and code marketplace where developers can showcase, sell, and purchase high-quality source code and digital solutions.",
    author: {
      "@type": "Person",
      name: "Anwar Patel",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dev-market.online/projects?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 sm:py-20 lg:py-24">
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20"
                >
                  🚀 Welcome to the Future of Development
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  DevMarket
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-purple-300 mt-2">
                    Where Code Meets Commerce
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto px-4 text-gray-300 leading-relaxed">
                  Transform your development skills into revenue. Showcase,
                  sell, and scale your projects in a marketplace designed for
                  the modern developer.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center px-4"
                >
                  <Link
                    href="/projects"
                    className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="relative z-10">📁 Browse Projects</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  <Link
                    href="/mongoatlas"
                    className="group relative border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                  >
                    📚 Documentation
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-300">
                      100+
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">50+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      Developers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-300">
                      $10K+
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      Revenue
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Profile Section */}
          <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg"
                >
                  👨‍💻 Meet the Creator
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-8 sm:mb-12">
                  About the Developer
                </h2>

                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative mb-8"
                  >
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"></div>
                      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl">👨‍💻</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                  >
                    Anwar patel
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
                  >
                    Full-stack developer with 5+ years of experience in creating
                    modern web applications. Passionate about clean code, user
                    experience, and innovative solutions that drive business
                    growth.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-4"
                  >
                    {[
                      {
                        name: "React",
                        color: "from-blue-500 to-cyan-500",
                        icon: "⚛️",
                      },
                      {
                        name: "Node.js",
                        color: "from-green-500 to-emerald-500",
                        icon: "🟢",
                      },
                      {
                        name: "MongoDB",
                        color: "from-green-600 to-lime-600",
                        icon: "🍃",
                      },
                      {
                        name: "Next.js",
                        color: "from-gray-800 to-gray-600",
                        icon: "▲",
                      },
                      {
                        name: "TypeScript",
                        color: "from-blue-600 to-indigo-600",
                        icon: "🔷",
                      },
                      {
                        name: "Tailwind",
                        color: "from-teal-500 to-cyan-500",
                        icon: "🎨",
                      },
                    ].map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className={`bg-gradient-to-r ${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-default`}
                      >
                        {skill.icon} {skill.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Major Projects */}
          <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-50/30 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg"
                >
                  🚀 Major Projects
                </motion.div>

                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
                  Premium Solutions
                </h2>

                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Discover comprehensive projects that showcase advanced
                  development skills, complex problem-solving, and
                  enterprise-level solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              >
                {majorProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <ProjectCard
                      project={project}
                      onBuyNow={() => handleBuyNow(project)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Minor Projects */}
          <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg"
                >
                  💡 Minor Projects
                </motion.div>

                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
                  Quick Solutions
                </h2>

                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Explore focused projects that demonstrate specific skills,
                  creative implementations, and efficient solutions for targeted
                  problems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              >
                {minorProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <ProjectCard
                      project={project}
                      onBuyNow={() => handleBuyNow(project)}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative z-10">Explore All Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Custom Development Section */}
          <section className="py-20 sm:py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20"
                >
                  🛠️ Custom Development
                </motion.div>

                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                  Need Something Unique?
                </h2>

                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                  Can&apos;t find exactly what you&apos;re looking for? Let&apos;s build it
                  together! Get a custom application tailored to your specific
                  requirements.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Tailored Solutions
                        </h3>
                        <p className="text-gray-300">
                          Custom web applications, mobile apps, and software
                          solutions designed specifically for your business
                          needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Modern Tech Stack
                        </h3>
                        <p className="text-gray-300">
                          Built with cutting-edge technologies like React,
                          Next.js, Node.js, MongoDB, and more.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Full Support
                        </h3>
                        <p className="text-gray-300">
                          Complete development cycle from planning to
                          deployment, plus ongoing maintenance and support.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Ready to Start Your Project?
                  </h3>

                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-gray-300 mb-6">
                        Let's discuss your requirements and bring your vision to
                        life. Contact me for a free consultation and project
                        quote.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        📧 Get Quote
                      </Link>
                      <a
                        href="https://wa.me/919663858568?text=Hi! I'm interested in custom development services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                      >
                        💬 WhatsApp
                      </a>
                    </div>

                    <div className="text-center pt-4 border-t border-white/20">
                      <p className="text-sm text-gray-400">
                        📧 patelanwar647@gmail.com | 📱 +91-9663858568
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      </div>
    </>
  );
}
