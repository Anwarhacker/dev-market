import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function MongoDBSetup() {
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
    <motion.section
      id="mongodb"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-green-700"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <span className="text-2xl">🍃</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            MongoDB Setup
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Install and configure MongoDB database
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1 text-base">
                MongoDB Atlas (Recommended)
              </h3>
              <p className="text-green-800 text-sm">
                Cloud-hosted MongoDB - no local installation needed
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            MongoDB Atlas Setup
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 1: Visit MongoDB Atlas and Sign Up
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/1st_pivioq.png"
                alt="MongoDB Atlas Homepage"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    0
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Navigate to{" "}
                <a
                  href="https://mongodb.com/atlas"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mongodb.com/atlas
                </a>{" "}
                and click "Try Free" to create a new account. Complete the
                registration form with your email and password, or sign up using
                Google authentication.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 2: Access Projects Section
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/2nd_wdx9bf.png"
                alt="Projects Section"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    1
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                After logging in, locate the "Projects" section in the left
                sidebar and click on it. Then click the "Create New Project"
                button to start setting up your database project.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 3: Create New Project
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/3rd_vqt5sd.png"
                alt="New Project Creation"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    2
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Click on "New Project" to create a fresh project. This will be
                the container for your database clusters and related resources.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 4: Configure Project Details
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/4th_hycxlu.png"
                alt="Project Configuration"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    3
                  )
                }
              />
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/5th_ov1sev.png"
                alt="Project Configuration"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    4
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Enter a project name and click to next and then your choice and
                select the project owner. Click "Create Project" to proceed to
                the next step.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 5: Build Your Cluster
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086338/6th_tseuq1.png"
                alt="Cluster Creation"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    5
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Click the "+ Create" button to start building your database
                cluster. This is where your data will be stored and managed.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 6: Select Cluster Plan
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086339/7th_imkj8h.png"
                alt="Plan Selection"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    6
                  )
                }
              />
              <div className="text-gray-700 text-sm">
                <p className="mb-2">Choose your cluster configuration:</p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>
                    Select "Free" for the basic tier, or choose paid plans like
                    "M10" or "Flex" for more resources
                  </li>
                  <li>
                    The default cluster name is "Cluster0", but you can
                    customize it if desired
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 7: Choose Provider and Region
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086337/8th_lonnxx.png"
                alt="Provider and Region Selection"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    7
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Select your preferred cloud provider (AWS, Google Cloud, or
                Azure) and choose a region geographically closest to your
                location. Then click "Create Deployment" to provision your
                cluster.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 8: Access Network Settings
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086338/9th_dhkqw8.png"
                alt="Network Access Navigation"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    8
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                A popup will appear with your connection string. Click on
                "Network Access" - this will open the network configuration in a
                new tab.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 9: Add IP Address
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086338/10th_pufnlb.png"
                alt="IP Address Configuration"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    9
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                In the Network Access tab, click the "Add IP Address" button to
                configure which IP addresses can connect to your database.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 10: Allow Access from Anywhere
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086338/11th_nougsg.png"
                alt="Access Permission Setup"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    10
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Click "Allow Access from Anywhere" and then click "Confirm" to
                permit connections from any IP address. Note: For production,
                restrict to specific IPs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 11: Verify Network Access
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086339/12th_vqpkpl.png"
                alt="Network Access Verification"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    11
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                After confirmation, the IP access entry will show as "Active".
                Return to the previous tab to continue with database user setup.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 12: Create Database User
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086339/13th_zbbnia.png"
                alt="Database User Creation"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    12
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Enter a username and secure password for database access. Click
                "Create Database User" to add the user, then proceed to choose
                your connection method.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 13: Select Connection Driver
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086339/14th_dtey7z.png"
                alt="Driver Selection"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    13
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                In the connection popup, click on the driver selection dropdown.
                Choose "Node.js" as your driver version for JavaScript
                applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 14: Copy Connection String
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/15th_wqk1yy.png"
                alt="Connection String Copy"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    14
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Copy the provided connection string. Replace the username and
                password placeholders with your database username and password
                if the username and password not already in that string .
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base">
                Step 15: Test Your Connection
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759086340/15th_wqk1yy.png"
                alt="Connection Testing"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
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
                    ],
                    14
                  )
                }
              />
              <p className="text-gray-700 text-sm">
                Click Done and Use the connection string in your application
                code. Test the connection by running your application or using a
                MongoDB client like MongoDB Compass to verify connectivity.{" "}
                <br></br>"
                MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name"
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Connection String Format
          </h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <div>
              mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/database_name',{" "}
              {"{"}
            </div>
            <div className="ml-4">useNewUrlParser: true,</div>
            <div className="ml-4">useUnifiedTopology: true</div>
            <div>{"}"});</div>
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
  );
}
