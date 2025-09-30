import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function DeploymentSetup() {
  return (
    <motion.section
      id="deployment"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-green-700"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <span className="text-2xl">🚀</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Deployment Guide
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Deploy your applications to production
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Popular Platforms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border-2 p-4 border-blue-300 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-base">
                <span className="text-2xl mr-2">▲</span>
                <span>Vercel</span>
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Best for Next.js apps
              </p>
              <a
                href="https://vercel.com"
                className="text-blue-600 hover:underline text-sm break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </div>
            <div className="border-2 p-4 border-blue-300 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-base">
                <span className="text-2xl mr-2">🌐</span>
                <span>Netlify</span>
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Great for static sites
              </p>
              <a
                href="https://netlify.com"
                className="text-blue-600 hover:underline text-sm break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                netlify.com
              </a>
            </div>
            <div className="border-2 p-4 border-blue-300 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-base">
                <span className="text-2xl mr-2">🐙</span>
                <span>GitHub Pages</span>
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Free for public repos
              </p>
              <a
                href="https://pages.github.com"
                className="text-blue-600 hover:underline text-sm break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                pages.github.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Environment Variables
          </h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-4">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-900 mb-1 text-base">
                  Security Note
                </h4>
                <p className="text-yellow-800 text-sm">
                  Never commit sensitive data like API keys to version control
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <div># Create .env.local file</div>
            <div className="mt-2">NODE_ENV=production</div>
            <div className="mt-2">
              MONGODB_URI=your_production_db_url
            </div>
            <div className="mt-2">NEXTAUTH_SECRET=your_secret_key</div>
            <div className="mt-2">API_KEY=your_api_key</div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Build Commands
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 p-4 border-blue-300 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-base">
                Next.js
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npm run build
                  </code>{" "}
                  - Build for production
                </li>
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npm start
                  </code>{" "}
                  - Start production server
                </li>
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npm run export
                  </code>{" "}
                  - Export static files
                </li>
              </ul>
            </div>
            <div className="border-2 p-4 border-blue-300 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-base">
                React
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npm run build
                  </code>{" "}
                  - Create production build
                </li>
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    serve -s build
                  </code>{" "}
                  - Serve build folder
                </li>
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded">
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
  );
}