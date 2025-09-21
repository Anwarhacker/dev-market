"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ChevronRight,
  BookOpen,
  Code,
  Database,
  Settings,
  Download,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState("nodejs");

  const sections = [
    { id: "nodejs", title: "Node.js Setup", icon: "🟢" },
    { id: "mongodb", title: "MongoDB Setup", icon: "🍃" },
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
              <div className="sticky top-20 bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
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

              {/* Node.js Section */}
              <motion.section
                id="nodejs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🟢</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      Node.js Setup
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Install and configure Node.js for development
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">
                          Recommended Version
                        </h3>
                        <p className="text-blue-800 text-sm">
                          Node.js 18+ (LTS) is recommended for most projects
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Installation Methods
                    </h3>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                          <Download className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                          <span className="leading-tight">
                            Official Installer (Recommended)
                          </span>
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-gray-700 ml-4 sm:ml-6 text-sm sm:text-base">
                          <li>
                            Visit{" "}
                            <a
                              href="https://nodejs.org"
                              className="text-blue-600 hover:underline break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              nodejs.org
                            </a>
                          </li>
                          <li>
                            Download the LTS version for your operating system
                          </li>
                          <li>Run the installer and follow the setup wizard</li>
                          <li>
                            Verify installation: Open terminal and run{" "}
                            <code className="bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                              node --version
                            </code>
                          </li>
                        </ol>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                          <Code className="h-4 w-4 mr-2 text-purple-600 flex-shrink-0" />
                          <span className="leading-tight">
                            Using NVM (Node Version Manager)
                          </span>
                        </h4>
                        <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                          <div># Install NVM (Linux/Mac)</div>
                          <div className="mt-1 sm:mt-2">
                            curl -o-
                            https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh
                            | bash
                          </div>
                          <div className="mt-1 sm:mt-2">
                            # Restart terminal or run:
                          </div>
                          <div className="mt-1 sm:mt-2">source ~/.bashrc</div>
                          <div className="mt-1 sm:mt-2">
                            # Install and use Node.js LTS
                          </div>
                          <div className="mt-1 sm:mt-2">nvm install --lts</div>
                          <div className="mt-1 sm:mt-2">nvm use --lts</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Verification
                    </h3>
                    <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <div># Check Node.js version</div>
                      <div className="mt-1 sm:mt-2">node --version</div>
                      <div className="mt-1 sm:mt-2"># Check NPM version</div>
                      <div className="mt-1 sm:mt-2">npm --version</div>
                      <div className="mt-1 sm:mt-2">
                        # Check if everything works
                      </div>
                      <div className="mt-1 sm:mt-2">
                        node -e "console.log('Hello, Node.js!')"
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* MongoDB Section */}
              <motion.section
                id="mongodb"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🍃</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      MongoDB Setup
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Install and configure MongoDB database
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-green-900 mb-1">
                          MongoDB Atlas (Recommended)
                        </h3>
                        <p className="text-green-800 text-sm">
                          Cloud-hosted MongoDB - no local installation needed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      MongoDB Atlas Setup
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                      <li>
                        Visit{" "}
                        <a
                          href="https://mongodb.com/atlas"
                          className="text-blue-600 hover:underline break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          MongoDB Atlas
                        </a>
                      </li>
                      <li>Create a free account</li>
                      <li>Choose the free tier plan</li>
                      <li>Select your cloud provider and region</li>
                      <li>Create a cluster (this may take a few minutes)</li>
                      <li>
                        Set up database access:
                        <ul className="list-disc list-inside ml-4 sm:ml-6 mt-2 space-y-1 text-sm sm:text-base">
                          <li>
                            Go to "Database Access" → "Add New Database User"
                          </li>
                          <li>Create username and password</li>
                          <li>
                            Set user privileges to "Read and write to any
                            database"
                          </li>
                        </ul>
                      </li>
                      <li>
                        Configure network access:
                        <ul className="list-disc list-inside ml-4 sm:ml-6 mt-2 space-y-1 text-sm sm:text-base">
                          <li>Go to "Network Access" → "Add IP Address"</li>
                          <li>
                            Add IP:{" "}
                            <code className="bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                              0.0.0.0/0
                            </code>{" "}
                            (allow from anywhere)
                          </li>
                        </ul>
                      </li>
                      <li>
                        Get your connection string:
                        <ul className="list-disc list-inside ml-4 sm:ml-6 mt-2 space-y-1 text-sm sm:text-base">
                          <li>Go to "Clusters" → "Connect"</li>
                          <li>Choose "Connect your application"</li>
                          <li>Copy the connection string</li>
                          <li>
                            Replace password placeholder with your actual
                            password
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Connection String Format
                    </h3>
                    <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <div>
                        mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/database_name',{" "}
                        {"{"}
                      </div>
                      <div className="ml-2 sm:ml-4">useNewUrlParser: true,</div>
                      <div className="ml-2 sm:ml-4">
                        useUnifiedTopology: true
                      </div>
                      <div>{"}"});</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* VS Code Section */}
              <motion.section
                id="vscode"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      VS Code Setup
                    </h2>
                    <p className="text-gray-600">
                      Configure your development environment
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Installation
                    </h3>
                    <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>
                        Visit{" "}
                        <a
                          href="https://code.visualstudio.com"
                          className="text-blue-600 hover:underline break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          code.visualstudio.com
                        </a>
                      </li>
                      <li>Download VS Code for your operating system</li>
                      <li>Run the installer and follow the setup wizard</li>
                      <li>Launch VS Code</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Essential Extensions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          JavaScript/React Development
                        </h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                          <li>• ES7+ React/Redux/React-Native snippets</li>
                          <li>• Auto Rename Tag</li>
                          <li>• Bracket Pair Colorizer</li>
                          <li>• Prettier - Code formatter</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          Backend Development
                        </h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                          <li>• MongoDB for VS Code</li>
                          <li>• Thunder Client (API testing)</li>
                          <li>• GitLens</li>
                          <li>• Docker</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Recommended Settings
                    </h3>
                    <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <div>{"{"}</div>
                      <div className="ml-2 sm:ml-4">
                        "editor.formatOnSave": true,
                      </div>
                      <div className="ml-2 sm:ml-4">
                        "editor.defaultFormatter": "esbenp.prettier-vscode",
                      </div>
                      <div className="ml-2 sm:ml-4">
                        "emmet.includeLanguages": {"{"} "javascript":
                        "javascriptreact" {"}"},
                      </div>
                      <div className="ml-2 sm:ml-4">
                        "files.autoSave": "afterDelay"
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Git Section */}
              <motion.section
                id="git"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">📚</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      Git Setup
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Version control for your projects
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Installation
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 text-center">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          Windows
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          Download from:
                        </p>
                        <a
                          href="https://git-scm.com/download/win"
                          className="text-blue-600 hover:underline text-xs sm:text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          git-scm.com
                        </a>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 text-center tex-black">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          macOS
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          Using Homebrew:
                        </p>
                        <code className="bg-gray-100 px-1 text-blue-600 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                          brew install git
                        </code>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 text-center sm:col-span-2 lg:col-span-1">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          Linux
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          Ubuntu/Debian:
                        </p>
                        <code className="bg-gray-100 text-blue-600 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                          sudo apt install git
                        </code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Configuration
                    </h3>
                    <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <div># Set your name</div>
                      <div className="mt-1 sm:mt-2">
                        git config --global user.name "Your Name"
                      </div>
                      <div className="mt-1 sm:mt-2"># Set your email</div>
                      <div className="mt-1 sm:mt-2">
                        git config --global user.email "your.email@example.com"
                      </div>
                      <div className="mt-1 sm:mt-2"># Check configuration</div>
                      <div className="mt-1 sm:mt-2">git config --list</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">
                      Basic Commands
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1 sm:space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                          Repository Setup
                        </h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              git init
                            </code>{" "}
                            - Initialize repository
                          </li>
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              git clone [url]
                            </code>{" "}
                            - Clone repository
                          </li>
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              git remote add origin [url]
                            </code>{" "}
                            - Add remote
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                          Daily Workflow
                        </h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              git status
                            </code>{" "}
                            - Check status
                          </li>
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              git add .
                            </code>{" "}
                            - Stage changes
                          </li>
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              git commit -m "message"
                            </code>{" "}
                            - Commit changes
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* NPM & Yarn Section */}
              <motion.section
                id="npm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">📦</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      NPM & Yarn Setup
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Package managers for JavaScript projects
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-yellow-900 mb-1">
                          NPM vs Yarn
                        </h3>
                        <p className="text-yellow-800 text-sm">
                          NPM comes with Node.js. Yarn is faster and more
                          reliable for large projects.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      NPM (Included with Node.js)
                    </h3>
                    <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <div># Check NPM version</div>
                      <div className="mt-1 sm:mt-2">npm --version</div>
                      <div className="mt-1 sm:mt-2"># Update NPM</div>
                      <div className="mt-1 sm:mt-2">
                        npm install -g npm@latest
                      </div>
                      <div className="mt-1 sm:mt-2"># Clear cache</div>
                      <div className="mt-1 sm:mt-2">
                        npm cache clean --force
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Yarn Installation
                    </h3>
                    <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <div># Install Yarn globally using NPM</div>
                      <div className="mt-1 sm:mt-2">npm install -g yarn</div>
                      <div className="mt-1 sm:mt-2"># Check Yarn version</div>
                      <div className="mt-1 sm:mt-2">yarn --version</div>
                      <div className="mt-1 sm:mt-2">
                        # Alternative: Using Corepack (Node.js 16.10+)
                      </div>
                      <div className="mt-1 sm:mt-2">corepack enable</div>
                      <div className="mt-1 sm:mt-2">
                        corepack prepare yarn@stable --activate
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">
                      Common Commands
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">
                          NPM Commands
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-black">
                          <li>
                            <code className="bg-blue-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              npm init
                            </code>{" "}
                            - Initialize project
                          </li>
                          <li>
                            <code className="bg-blue-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              npm install
                            </code>{" "}
                            - Install dependencies
                          </li>
                          <li>
                            <code className="bg-blue-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              npm install package
                            </code>{" "}
                            - Install package
                          </li>
                          <li>
                            <code className="bg-blue-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              npm run dev
                            </code>{" "}
                            - Run development server
                          </li>
                          <li>
                            <code className="bg-blue-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              npm start
                            </code>{" "}
                            - Start application
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">
                          Yarn Commands
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-black">
                          <li>
                            <code className="bg-purple-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              yarn init
                            </code>{" "}
                            - Initialize project
                          </li>
                          <li>
                            <code className="bg-purple-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              yarn install
                            </code>{" "}
                            - Install dependencies
                          </li>
                          <li>
                            <code className="bg-purple-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              yarn add package
                            </code>{" "}
                            - Install package
                          </li>
                          <li>
                            <code className="bg-purple-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              yarn dev
                            </code>{" "}
                            - Run development server
                          </li>
                          <li>
                            <code className="bg-purple-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              yarn start
                            </code>{" "}
                            - Start application
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Deployment Section */}
              <motion.section
                id="deployment"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🚀</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      Deployment Guide
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Deploy your applications to production
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Popular Platforms
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                          <span className="text-lg sm:text-2xl mr-2">▲</span>
                          <span>Vercel</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          Best for Next.js apps
                        </p>
                        <a
                          href="https://vercel.com"
                          className="text-blue-600 hover:underline text-xs sm:text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          vercel.com
                        </a>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                          <span className="text-lg sm:text-2xl mr-2">🌐</span>
                          <span>Netlify</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          Great for static sites
                        </p>
                        <a
                          href="https://netlify.com"
                          className="text-blue-600 hover:underline text-xs sm:text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          netlify.com
                        </a>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                          <span className="text-lg sm:text-2xl mr-2">🐙</span>
                          <span>GitHub Pages</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          Free for public repos
                        </p>
                        <a
                          href="https://pages.github.com"
                          className="text-blue-600 hover:underline text-xs sm:text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          pages.github.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Environment Variables
                    </h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 sm:p-4 rounded-r-lg mb-3 sm:mb-4">
                      <div className="flex items-start">
                        <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-yellow-900 mb-1 text-sm sm:text-base">
                            Security Note
                          </h4>
                          <p className="text-yellow-800 text-xs sm:text-sm">
                            Never commit sensitive data like API keys to version
                            control
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <div># Create .env.local file</div>
                      <div className="mt-1 sm:mt-2">NODE_ENV=production</div>
                      <div className="mt-1 sm:mt-2">
                        MONGODB_URI=your_production_db_url
                      </div>
                      <div className="mt-1 sm:mt-2">
                        NEXTAUTH_SECRET=your_secret_key
                      </div>
                      <div className="mt-1 sm:mt-2">API_KEY=your_api_key</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      Build Commands
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          Next.js
                        </h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              npm run build
                            </code>{" "}
                            - Build for production
                          </li>
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              npm start
                            </code>{" "}
                            - Start production server
                          </li>
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              npm run export
                            </code>{" "}
                            - Export static files
                          </li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          React
                        </h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              npm run build
                            </code>{" "}
                            - Create production build
                          </li>
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              serve -s build
                            </code>{" "}
                            - Serve build folder
                          </li>
                          <li>
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                              npm run deploy
                            </code>{" "}
                            - Deploy to hosting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

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
