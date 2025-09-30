"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import Navigations from "../../components/Navigations";
import Navbar from "../../components/Navbar";

export default function NPMYarnSetup() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen lg:flex bg-gray-50 py-16 lg:py-30">
        <Navigations />

        <motion.section
          id="npm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg p-6 md:p-8 border border-yellow-700"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-2xl">📦</span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                NPM & Yarn Setup
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Package managers for JavaScript projects
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-1 text-base">
                    NPM vs Yarn
                  </h3>
                  <p className="text-yellow-800 text-sm">
                    NPM comes with Node.js. Yarn is faster and more reliable for
                    large projects.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                NPM (Included with Node.js)
              </h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div># Check NPM version</div>
                <div className="mt-2">npm --version</div>
                <div className="mt-2"># Update NPM</div>
                <div className="mt-2">npm install -g npm@latest</div>
                <div className="mt-2"># Clear cache</div>
                <div className="mt-2">npm cache clean --force</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Yarn Installation
              </h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div># Install Yarn globally using NPM</div>
                <div className="mt-2">npm install -g yarn</div>
                <div className="mt-2"># Check Yarn version</div>
                <div className="mt-2">yarn --version</div>
                <div className="mt-2">
                  # Alternative: Using Corepack (Node.js 16.10+)
                </div>
                <div className="mt-2">corepack enable</div>
                <div className="mt-2">
                  corepack prepare yarn@stable --activate
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Common Commands
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-black mb-3 text-base">
                    NPM Commands
                  </h4>
                  <ul className="space-y-2 text-sm text-black">
                    <li>
                      <code className="bg-blue-100 px-2 py-1 rounded">
                        npm init
                      </code>{" "}
                      - Initialize project
                    </li>
                    <li>
                      <code className="bg-blue-100 px-2 py-1 rounded">
                        npm install
                      </code>{" "}
                      - Install dependencies
                    </li>
                    <li>
                      <code className="bg-blue-100 px-2 py-1 rounded">
                        npm install package
                      </code>{" "}
                      - Install package
                    </li>
                    <li>
                      <code className="bg-blue-100 px-2 py-1 rounded">
                        npm run dev
                      </code>{" "}
                      - Run development server
                    </li>
                    <li>
                      <code className="bg-blue-100 px-2 py-1 rounded">
                        npm start
                      </code>{" "}
                      - Start application
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-3 text-base">
                    Yarn Commands
                  </h4>
                  <ul className="space-y-2 text-sm text-black">
                    <li>
                      <code className="bg-purple-100 px-2 py-1 rounded">
                        yarn init
                      </code>{" "}
                      - Initialize project
                    </li>
                    <li>
                      <code className="bg-purple-100 px-2 py-1 rounded">
                        yarn install
                      </code>{" "}
                      - Install dependencies
                    </li>
                    <li>
                      <code className="bg-purple-100 px-2 py-1 rounded">
                        yarn add package
                      </code>{" "}
                      - Install package
                    </li>
                    <li>
                      <code className="bg-purple-100 px-2 py-1 rounded">
                        yarn dev
                      </code>{" "}
                      - Run development server
                    </li>
                    <li>
                      <code className="bg-purple-100 px-2 py-1 rounded">
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
      </div>
    </div>
  );
}
