import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function DeploymentSetup() {
  return (
    <motion.section
      id="deployment"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 border border-green-700"
    >
      <div className="flex items-center mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 lg:mr-5 xl:mr-6 flex-shrink-0">
          <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            🚀
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
            Deployment Guide
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl mt-1 lg:mt-2">
            Deploy your applications to production
          </p>
        </div>
      </div>

      <div className="space-y-6 lg:space-y-8 xl:space-y-10">
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
            Popular Platforms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 xl:gap-5">
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
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
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
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
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
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
                  Never commit sensitive data like API keys to version control
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
            <div className="mt-1 sm:mt-2">NEXTAUTH_SECRET=your_secret_key</div>
            <div className="mt-1 sm:mt-2">API_KEY=your_api_key</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Build Commands
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4">
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
            <div className="border-2 p-2 border-blue-300 rounded-lg p-3 sm:p-4">
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
  );
}
