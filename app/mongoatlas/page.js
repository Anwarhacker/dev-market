"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import ImageModal from "../../components/ImageModal";
import Navigations from "../../components/Navigations";
import Navbar from "../../components/Navbar";

export default function MongoDBSetup() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  const allImages = [
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/1st_pivioq.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/2nd_wdx9bf.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/3rd_vqt5sd.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/4th_hycxlu.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/5th_ov1sev.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086338/6th_tseuq1.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086339/7th_imkj8h.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/8th_lonnxx.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086338/9th_dhkqw8.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086338/10th_pufnlb.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086338/11th_nougsg.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086339/12th_vqpkpl.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086339/13th_zbbnia.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086339/14th_dtey7z.png",
    "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/15th_wqk1yy.png",
  ];

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

  const StepImage = ({ src, alt, index }) => (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-lg shadow-md mb-3 sm:mb-4 border-2 p-1 sm:p-2 border-blue-300 cursor-pointer hover:shadow-lg hover:border-blue-400 transition-all duration-300"
      onClick={() => openImageModal(allImages, index)}
    />
  );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen lg:flex bg-gray-50 py-16 lg:py-30">
        <Navigations />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            id="mongodb"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-green-700"
          >
            <div className="flex items-center mb-4 sm:mb-6 gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl">🍃</span>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  MongoDB Setup
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-1">
                  Install and configure MongoDB database
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded-r-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1 text-sm sm:text-base">
                      MongoDB Atlas (Recommended)
                    </h3>
                    <p className="text-green-800 text-xs sm:text-sm">
                      Cloud-hosted MongoDB - no local installation needed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  MongoDB Atlas Setup
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 1: Visit MongoDB Atlas and Sign Up
                    </h4>
                    <StepImage
                      src={allImages[0]}
                      alt="MongoDB Atlas Homepage"
                      index={0}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Navigate to{" "}
                      <a
                        href="https://mongodb.com/atlas"
                        className="text-blue-600 hover:underline break-all font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mongodb.com/atlas
                      </a>{" "}
                      and click "Try Free" to create a new account. Complete the
                      registration form with your email and password, or sign up
                      using Google authentication.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 2: Access Projects Section
                    </h4>
                    <StepImage
                      src={allImages[1]}
                      alt="Projects Section"
                      index={1}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      After logging in, locate the "Projects" section in the
                      left sidebar and click on it. Then click the "Create New
                      Project" button to start setting up your database project.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 3: Create New Project
                    </h4>
                    <StepImage
                      src={allImages[2]}
                      alt="New Project Creation"
                      index={2}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Click on "New Project" to create a fresh project. This
                      will be the container for your database clusters and
                      related resources.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 4: Configure Project Details
                    </h4>
                    <StepImage
                      src={allImages[3]}
                      alt="Project Configuration"
                      index={3}
                    />
                    <StepImage
                      src={allImages[4]}
                      alt="Project Configuration Continued"
                      index={4}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Enter a project name and click to next and then your
                      choice and select the project owner. Click "Create
                      Project" to proceed to the next step.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 5: Build Your Cluster
                    </h4>
                    <StepImage
                      src={allImages[5]}
                      alt="Cluster Creation"
                      index={5}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Click the "+ Create" button to start building your
                      database cluster. This is where your data will be stored
                      and managed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 6: Select Cluster Plan
                    </h4>
                    <StepImage
                      src={allImages[6]}
                      alt="Plan Selection"
                      index={6}
                    />
                    <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p className="mb-2">Choose your cluster configuration:</p>
                      <ol className="list-decimal list-inside space-y-1.5 pl-1 sm:pl-2">
                        <li className="pl-1">
                          Select "Free" for the basic tier, or choose paid plans
                          like "M10" or "Flex" for more resources
                        </li>
                        <li className="pl-1">
                          The default cluster name is "Cluster0", but you can
                          customize it if desired
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 7: Choose Provider and Region
                    </h4>
                    <StepImage
                      src={allImages[7]}
                      alt="Provider and Region Selection"
                      index={7}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Select your preferred cloud provider (AWS, Google Cloud,
                      or Azure) and choose a region geographically closest to
                      your location. Then click "Create Deployment" to provision
                      your cluster.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 8: Access Network Settings
                    </h4>
                    <StepImage
                      src={allImages[8]}
                      alt="Network Access Navigation"
                      index={8}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      A popup will appear with your connection string. Click on
                      "Network Access" - this will open the network
                      configuration in a new tab.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 9: Add IP Address
                    </h4>
                    <StepImage
                      src={allImages[9]}
                      alt="IP Address Configuration"
                      index={9}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      In the Network Access tab, click the "Add IP Address"
                      button to configure which IP addresses can connect to your
                      database.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 10: Allow Access from Anywhere
                    </h4>
                    <StepImage
                      src={allImages[10]}
                      alt="Access Permission Setup"
                      index={10}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Click "Allow Access from Anywhere" and then click
                      "Confirm" to permit connections from any IP address. Note:
                      For production, restrict to specific IPs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 11: Verify Network Access
                    </h4>
                    <StepImage
                      src={allImages[11]}
                      alt="Network Access Verification"
                      index={11}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      After confirmation, the IP access entry will show as
                      "Active". Return to the previous tab to continue with
                      database user setup.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 12: Create Database User
                    </h4>
                    <StepImage
                      src={allImages[12]}
                      alt="Database User Creation"
                      index={12}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Enter a username and secure password for database access.
                      Click "Create Database User" to add the user, then proceed
                      to choose your connection method.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 13: Select Connection Driver
                    </h4>
                    <StepImage
                      src={allImages[13]}
                      alt="Driver Selection"
                      index={13}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      In the connection popup, click on the driver selection
                      dropdown. Choose "Node.js" as your driver version for
                      JavaScript applications.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 14: Copy Connection String
                    </h4>
                    <StepImage
                      src={allImages[14]}
                      alt="Connection String Copy"
                      index={14}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Copy the provided connection string. Replace the username
                      and password placeholders with your database username and
                      password if the username and password not already in that
                      string.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 15: Test Your Connection
                    </h4>
                    <StepImage
                      src={allImages[14]}
                      alt="Connection Testing"
                      index={14}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Click Done and use the connection string in your
                      application code. Test the connection by running your
                      application or using a MongoDB client like MongoDB Compass
                      to verify connectivity.
                    </p>
                    <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-xs sm:text-sm text-blue-900 font-mono break-all">
                        MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Connection String Format
                </h3>
                <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                  <div className="whitespace-pre-wrap break-words">
                    <div>
                      mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/database_name',{" "}
                      {"{"}
                    </div>
                    <div className="ml-2 sm:ml-4">useNewUrlParser: true,</div>
                    <div className="ml-2 sm:ml-4">useUnifiedTopology: true</div>
                    <div>{"}"});</div>
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
