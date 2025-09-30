"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Navigations from "../../components/Navigations";

export default function GitSetup() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen lg:flex bg-gray-50 py-16 lg:py-30">
        <Navigations />
        <motion.section
          id="git"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-red-700"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-2xl">📚</span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Git Setup
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Version control for your projects
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Installation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border-2 p-4 border-blue-300 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2 text-base">
                    Windows
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">Download from:</p>
                  <a
                    href="https://git-scm.com/download/win"
                    className="text-blue-600 hover:underline text-sm break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    git-scm.com
                  </a>
                </div>
                <div className="border-2 p-4 border-blue-300 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2 text-base">
                    macOS
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">Using Homebrew:</p>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    brew install git
                  </code>
                </div>
                <div className="border-2 p-4 border-blue-300 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2 text-base">
                    Linux
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">Ubuntu/Debian:</p>
                  <code className="bg-gray-100 text-sm px-2 py-1 rounded">
                    sudo apt install git
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Configuration
              </h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div># Set your name</div>
                <div className="mt-2">
                  git config --global user.name "Your Name"
                </div>
                <div className="mt-2"># Set your email</div>
                <div className="mt-2">
                  git config --global user.email "your.email@example.com"
                </div>
                <div className="mt-2"># Check configuration</div>
                <div className="mt-2">git config --list</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Basic Commands
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-base">
                    Repository Setup
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        git init
                      </code>{" "}
                      - Initialize repository
                    </li>
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        git clone [url]
                      </code>{" "}
                      - Clone repository
                    </li>
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        git remote add origin [url]
                      </code>{" "}
                      - Add remote
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-base">
                    Daily Workflow
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        git status
                      </code>{" "}
                      - Check status
                    </li>
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        git add .
                      </code>{" "}
                      - Stage changes
                    </li>
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
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
      </div>
    </div>
  );
}
