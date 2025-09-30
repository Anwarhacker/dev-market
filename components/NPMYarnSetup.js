import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function NPMYarnSetup() {
  return (
    <motion.section
      id="npm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 border border-green-700"
    >
      <div className="flex items-center mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-red-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 lg:mr-5 xl:mr-6 flex-shrink-0">
          <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            📦
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
            NPM & Yarn Setup
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl mt-1 lg:mt-2">
            Package managers for JavaScript projects
          </p>
        </div>
      </div>

      <div className="space-y-6 lg:space-y-8 xl:space-y-10">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 sm:p-5 lg:p-6 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-yellow-600 mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-1 lg:mb-2 text-sm sm:text-base lg:text-lg xl:text-xl">
                NPM vs Yarn
              </h3>
              <p className="text-yellow-800 text-sm sm:text-base lg:text-lg xl:text-xl">
                NPM comes with Node.js. Yarn is faster and more reliable for
                large projects.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
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
