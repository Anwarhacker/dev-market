import { motion } from "framer-motion";

export default function VSCodeSetup() {
  return (
    <motion.section
      id="vscode"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8 border border-green-700"
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
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Recommended Settings
          </h3>
          <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
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
