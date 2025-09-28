import { motion } from "framer-motion";

export default function GitSetup() {
  return (
    <motion.section
      id="git"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-green-700"
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
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4 text-center">
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
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4 text-center tex-black">
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
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4 text-center sm:col-span-2 lg:col-span-1">
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
  );
}
