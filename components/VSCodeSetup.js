import { motion } from "framer-motion";

export default function VSCodeSetup() {
  return (
    <motion.section
      id="vscode"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-purple-700"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <span className="text-2xl">💻</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            VS Code Setup
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Essential extensions and settings for web development
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Installation
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
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
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Essential Extensions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 p-4 border-blue-300 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-base">
                JavaScript/React Development
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• ES7+ React/Redux/React-Native snippets</li>
                <li>• Auto Rename Tag</li>
                <li>• Bracket Pair Colorizer</li>
                <li>• Prettier - Code formatter</li>
              </ul>
            </div>
            <div className="border-2 p-4 border-blue-300 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-base">
                Backend Development
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• MongoDB for VS Code</li>
                <li>• Thunder Client (API testing)</li>
                <li>• GitLens</li>
                <li>• Docker</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Recommended Settings
          </h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <div>{"{"}</div>
            <div className="ml-4">"editor.formatOnSave": true,</div>
            <div className="ml-4">
              "editor.defaultFormatter": "esbenp.prettier-vscode",
            </div>
            <div className="ml-4">
              "emmet.includeLanguages": {"{"} "javascript": "javascriptreact"{" "}
              {"}"},
            </div>
            <div className="ml-4">"files.autoSave": "afterDelay"</div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}