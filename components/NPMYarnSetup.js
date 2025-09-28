import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function NPMYarnSetup() {
  return (
    <motion.section
      id="npm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-green-700"
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
                NPM comes with Node.js. Yarn is faster and more reliable for
                large projects.
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
            <div className="mt-1 sm:mt-2">npm install -g npm@latest</div>
            <div className="mt-1 sm:mt-2"># Clear cache</div>
            <div className="mt-1 sm:mt-2">npm cache clean --force</div>
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
  );
}
