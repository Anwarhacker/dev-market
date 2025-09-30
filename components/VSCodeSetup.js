import { motion } from "framer-motion";

export default function VSCodeSetup() {
  return (
    <motion.section
      id="vscode"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 border border-green-700"
    >
      <div className="flex items-center mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 lg:mr-5 xl:mr-6 flex-shrink-0">
          <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            💻
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
            VS Code Setup
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl mt-1 lg:mt-2">
            Configure your development environment
          </p>
        </div>
      </div>

      <div className="space-y-6 lg:space-y-8 xl:space-y-10">
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
            Installation
          </h3>
          <ol className="list-decimal list-inside space-y-1 sm:space-y-2 lg:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">
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
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
            Essential Extensions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4">
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
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4">
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
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
            Recommended Settings
          </h3>
          <div className="bg-gray-900 text-green-400 p-3 sm:p-4 lg:p-5 xl:p-6 rounded-lg font-mono text-xs sm:text-sm lg:text-base xl:text-lg overflow-x-auto">
            <div>{"{"}</div>
            <div className="ml-2 sm:ml-4">"editor.formatOnSave": true,</div>
            <div className="ml-2 sm:ml-4">
              "editor.defaultFormatter": "esbenp.prettier-vscode",
            </div>
            <div className="ml-2 sm:ml-4">
              "emmet.includeLanguages": {"{"} "javascript": "javascriptreact"{" "}
              {"}"},
            </div>
            <div className="ml-2 sm:ml-4">"files.autoSave": "afterDelay"</div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
