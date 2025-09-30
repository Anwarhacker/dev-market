"use client";

import { motion } from "framer-motion";
import { Download, Info, Code } from "lucide-react";
import { useState } from "react";
import ImageModal from "../../components/ImageModal";
import Navigations from "../../components/Navigations";
import Navbar from "../../components/Navbar";

export default function NodeJSSetup() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  const openImageModal = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const nextImage = () => {
    if (currentImageIndex < modalImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen  lg:flex bg-gray-50 py-16 lg:py-30">
        <Navigations />
        <div className="max-w-4xl lg:ml-10 px-4 sm:px-6 lg:px-8">
          <motion.section
            id="nodejs"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-green-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-2xl">🟢</span>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Node.js Setup
                </h2>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  Complete installation and configuration guide for Node.js
                  development
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1 text-base">
                      Why Node.js?
                    </h3>
                    <p className="text-blue-800 text-sm">
                      Node.js is a JavaScript runtime built on Chrome's V8
                      JavaScript engine. It allows you to run JavaScript on the
                      server-side and build scalable network applications.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Node.js Installation Guide
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 1: Visit Node.js Official Website
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png"
                      alt="Node.js Official Website"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          0
                        )
                      }
                    />
                    <p className="text-gray-700 text-sm">
                      Navigate to{" "}
                      <a
                        href="https://nodejs.org"
                        className="text-blue-600 hover:underline break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        nodejs.org
                      </a>{" "}
                      to download the official Node.js installer. The website
                      will automatically detect your operating system and
                      recommend the appropriate version.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 2: Download LTS Version
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png"
                      alt="Node.js Download Page"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          1
                        )
                      }
                    />
                    <p className="text-gray-700 text-sm">
                      Click on the "LTS" (Long Term Support) version download
                      button. LTS versions are stable and recommended for most
                      users and production applications. The current LTS version
                      includes both Node.js and npm (Node Package Manager).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 3: Run the Installer
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png"
                      alt="Node.js Installation Wizard"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          2
                        )
                      }
                    />
                    <p className="text-gray-700 text-sm">
                      Double click the downloaded installer file and run it. The
                      Node.js setup wizard will guide you through the
                      installation process. Click "Next" to proceed with the
                      default settings, which are suitable for most users.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 4: Accept License Agreement
                    </h4>
                    {/* <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/25th_nodejs4.png"
                alt="License Agreement"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/22nd_nodejs1.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/23rd_nodejs2.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/24th_nodejs3.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/25th_nodejs4.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/26th_nodejs5.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/27th_nodejs6.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/28th_nodejs7.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/29th_nodejs8.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/30th_nodejs9.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/31st_nodejs10.png",
                    ],
                    3
                  )
                }
              /> */}
                    <p className="text-gray-700 text-sm">
                      ✅ Click "I Agree Read and accept the End-User License
                      Agreement. This is a standard open-source license that
                      allows you to use Node.js freely for personal and
                      commercial projects.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 5: Choose Installation Location
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png"
                      alt="Installation Location"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          3
                        )
                      }
                    />
                    <p className="text-gray-700 text-sm">
                      Choose the destination folder where Node.js will be
                      installed. The default location is usually "C:\Program
                      Files\nodejs\" on Windows. You can change this if you
                      prefer a different location, but remember the path for
                      future reference.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 6: Select Components to Install
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png"
                      alt="Component Selection"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          4
                        )
                      }
                    />
                    <p className="text-gray-700 text-sm">
                      Select the components you want to install. It's
                      recommended to keep all default options selected,
                      including:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-black">
                      <li>Node.js runtime</li>
                      <li>npm package manager</li>
                      <li>Online documentation shortcuts</li>
                      <li>
                        Add to PATH (automatically adds Node.js to your system
                        PATH)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 7: Complete Installation
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png"
                      alt="Installation Complete"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          5
                        )
                      }
                    />
                    <p className="text-gray-700 text-sm">
                      The installation process will now begin. This may take a
                      few minutes depending on your system. Once completed,
                      you'll see a success message. Click "Finish" to exit the
                      installer.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 8: Setup environmental variables
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png"
                      alt="Command Prompt Verification"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          6
                        )
                      }
                    />
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png"
                      alt="Command Prompt Verification"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          7
                        )
                      }
                    />
                    <p className="text-gray-700 text-sm">
                      Open the menu search and search environmental variables
                      and system variables add the "PATH" by double clicking
                      "path" in system variables and add the path where nodejs
                      is installed "C:\Program Files\nodejs\". Click OK to save
                      and exit.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 9: Verify Installation
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png"
                      alt="Command Prompt Verification"
                      className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        openImageModal(
                          [
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095541/node_1_uun86d.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759125079/nodejs_22_sgg78m.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_3_e4d1uj.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_4_zlxjjf.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_5_pebfwz.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_6_rekkbo.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095539/node_7_cfsw0g.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_8_anlgm0.png",
                            "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759095540/node_10_ecgnv8.png",
                          ],
                          8
                        )
                      }
                    />
                    <p className="text-gray-700 text-sm">
                      Open Command Prompt or PowerShell and run the following
                      commands to verify your installation:
                    </p>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-4">
                      <code>{`# Check Node.js version
node --version
# Check NPM version
npm --version`}</code>
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 10: Test Node.js Functionality
                    </h4>

                    <p className="text-gray-700 text-sm">
                      Test that Node.js is working correctly by running a simple
                      JavaScript command:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                      <div># Run a simple JavaScript command</div>
                      <div className="mt-2">
                        node -e "console.log('Hello, Node.js!')"
                      </div>
                      <div className="mt-2">
                        # Create and run a simple script
                      </div>
                      <div className="mt-2">
                        echo "console.log('Node.js is working!');" &gt; test.js
                      </div>
                      <div className="mt-2">node test.js</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-base">
                      Step 11: Install Your First Package
                    </h4>

                    <p className="text-gray-700 text-sm">
                      Test npm by installing a popular package. Let's install
                      "lodash", a utility library:
                    </p>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                      <code>{`# Install a package globally
npm install -g lodash
# Or install locally in a project
mkdir my-project
cd my-project
npm init -y
npm install lodash`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Alternative Installation Methods
                </h3>

                <div className="space-y-4">
                  <div className="border-2 p-4 border-blue-300 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-base">
                      <Code className="h-4 w-4 mr-2 text-purple-600 flex-shrink-0" />
                      <span className="leading-tight">
                        Using NVM (Node Version Manager) - Recommended for
                        Developers
                      </span>
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-sm">
                        NVM allows you to install and manage multiple Node.js
                        versions on the same machine. This is especially useful
                        for developers working on different projects.
                      </p>
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <code>{`# Install NVM for Windows
winget install Schnizl.nvm
# Or download from GitHub
# Restart terminal after installation
nvm --version
# Install latest LTS
nvm install lts
# Use the installed version
nvm use lts`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="border-2 p-4 border-blue-300 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-base">
                      <Download className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="leading-tight">
                        Using Chocolatey (Windows Package Manager)
                      </span>
                    </h4>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <code>{`# Install Chocolatey first (if not installed)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
# Install Node.js
choco install nodejs-lts`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Troubleshooting Common Issues
                </h3>
                <div className="space-y-4">
                  <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      "node is not recognized" Error
                    </h4>
                    <p className="text-yellow-800 text-sm mb-2">
                      If you get this error, Node.js is not in your PATH.
                    </p>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto">
                      <code>{`# Add Node.js to PATH manually
set PATH=%PATH%;"C:\Program Files\nodejs\"
# Or reinstall and check "Add to PATH" option`}</code>
                    </pre>
                  </div>

                  <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">
                      Permission Errors During Installation
                    </h4>
                    <p className="text-red-800 text-sm mb-2">
                      Run the installer as Administrator, or use NVM for
                      user-space installation.
                    </p>
                  </div>

                  <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      NPM Behind Corporate Proxy
                    </h4>
                    <p className="text-blue-800 text-sm mb-2">
                      Configure npm to work with your corporate proxy.
                    </p>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto">
                      <code>{`npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Next Steps
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🎯 Start Learning
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Learn JavaScript fundamentals</li>
                      <li>• Study Node.js core modules</li>
                      <li>• Build your first API</li>
                      <li>• Explore Express.js framework</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🛠️ Development Tools
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Install VS Code</li>
                      <li>• Set up Git version control</li>
                      <li>• Learn npm package management</li>
                      <li>• Explore debugging tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <ImageModal
              images={modalImages}
              currentIndex={currentImageIndex}
              isOpen={isImageModalOpen}
              onClose={closeImageModal}
              onNext={nextImage}
              onPrev={prevImage}
            />
          </motion.section>
        </div>
      </div>
    </div>
  );
}
