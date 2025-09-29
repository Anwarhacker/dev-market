import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function CloudinarySetup() {
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
      id="cloudinary"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-green-700"
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
          <span className="text-xl sm:text-2xl">☁️</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Cloudinary Setup
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Media management and image optimization service
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                Why Cloudinary?
              </h3>
              <p className="text-blue-800 text-sm">
                Cloudinary provides powerful image and video management with
                automatic optimization, transformation, and delivery through a
                global CDN.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Cloudinary Account Setup
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Step 1: Create Cloudinary Account
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091052/Screenshot_2025-09-21_203132_bmwb7r.png"
                alt="Cloudinary Sign Up Page"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091052/Screenshot_2025-09-21_203132_bmwb7r.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091093/Screenshot_2025-09-21_175636_k4x9ik.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_3_i8rql9.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_4_bp5lcf.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091117/Screenshot_2025-09-21_203350_e9updh.png",
                    ],
                    0
                  )
                }
              />
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091093/Screenshot_2025-09-21_175636_k4x9ik.png"
                alt="Cloudinary Sign Up Page"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091052/Screenshot_2025-09-21_203132_bmwb7r.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091093/Screenshot_2025-09-21_175636_k4x9ik.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_3_i8rql9.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_4_bp5lcf.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091117/Screenshot_2025-09-21_203350_e9updh.png",
                    ],
                    1
                  )
                }
              />
              <p className="text-gray-700 text-sm sm:text-base">
                Visit{" "}
                <a
                  href="https://cloudinary.com"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cloudinary.com
                </a>{" "}
                and click "Sign Up" to create a free account. Complete the
                registration with your email and choose a plan (free tier
                available).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Step 2: Access Dashboard and Get API Keys
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_3_i8rql9.png"
                alt="Cloudinary Dashboard"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091052/Screenshot_2025-09-21_203132_bmwb7r.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091093/Screenshot_2025-09-21_175636_k4x9ik.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_3_i8rql9.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_4_bp5lcf.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091117/Screenshot_2025-09-21_203350_e9updh.png",
                    ],
                    2
                  )
                }
              />
              <p className="text-gray-700 text-sm sm:text-base">
                After logging in, navigate to the Dashboard and Click to Go to
                API keys . Here you'll find your Cloud Name, API Key, and API
                Secret. You'll need these to configure your application.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Step 3: Cloudinary Information
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_4_bp5lcf.png"
                alt="SDK Installation"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091052/Screenshot_2025-09-21_203132_bmwb7r.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091093/Screenshot_2025-09-21_175636_k4x9ik.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_3_i8rql9.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_4_bp5lcf.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091117/Screenshot_2025-09-21_203350_e9updh.png",
                    ],
                    3
                  )
                }
              />
              <p className="text-gray-700 text-sm sm:text-base">
                Here is the information you need to set up Cloudinary in your
                application: cloud name, API key, and API secret.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Step 4: the cloudinary API secret key
              </h4>
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091117/Screenshot_2025-09-21_203350_e9updh.png"
                alt="SDK Installation"
                className="w-full rounded-lg shadow-md mb-4 border-2 p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  openImageModal(
                    [
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091052/Screenshot_2025-09-21_203132_bmwb7r.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091093/Screenshot_2025-09-21_175636_k4x9ik.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_3_i8rql9.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_4_bp5lcf.png",
                      "https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091117/Screenshot_2025-09-21_203350_e9updh.png",
                    ],
                    4
                  )
                }
              />
              <p className="text-gray-700 text-sm sm:text-base">
                Click to ********************** to reveal your API secret. You
                will need this for your application's environment variables. it
                ask for Verification code that send to your email PUT that code
                here to see the api secret.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Step 4: Configure Environment Variables
              </h4>

              <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                <div># Create .env.local file and add:</div>
                <div className="mt-1 sm:mt-2">
                  CLOUDINARY_CLOUD_NAME=your_cloud_name
                </div>
                <div className="mt-1 sm:mt-2">
                  CLOUDINARY_API_KEY=your_api_key
                </div>
                <div className="mt-1 sm:mt-2">
                  CLOUDINARY_API_SECRET=your_api_secret
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Step 5: Initialize Cloudinary in Your App
              </h4>

              <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                <div>// lib/cloudinary.js</div>
                <div className="mt-1 sm:mt-2">
                  import &#123; v2 as cloudinary &#125; from 'cloudinary';
                </div>
                <div className="mt-1 sm:mt-2"></div>
                <div className="mt-1 sm:mt-2">cloudinary.config(&#123;</div>
                <div className="ml-2 sm:ml-4">
                  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                </div>
                <div className="ml-2 sm:ml-4">
                  api_key: process.env.CLOUDINARY_API_KEY,
                </div>
                <div className="ml-2 sm:ml-4">
                  api_secret: process.env.CLOUDINARY_API_SECRET
                </div>
                <div className="mt-1 sm:mt-2">&#125;);</div>
                <div className="mt-1 sm:mt-2"></div>
                <div className="mt-1 sm:mt-2">export default cloudinary;</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Step 6: Test Image Upload
              </h4>

              <div className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                <div>// Test upload function</div>
                <div className="mt-1 sm:mt-2">
                  export const uploadToCloudinary = async (file) &gt; &#123;
                </div>
                <div className="ml-2 sm:ml-4">
                  const result = await cloudinary.uploader.upload(file);
                </div>
                <div className="ml-2 sm:ml-4">return result;</div>
                <div className="mt-1 sm:mt-2">&#125;;</div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base mt-3">
                Test your setup by uploading an image and verifying it appears
                in your Cloudinary Media Library. Check the console for the
                upload result and ensure the image URL is accessible.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Usage Examples
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Basic Upload
              </h4>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto">
                <div>
                  const result = await cloudinary.uploader.upload(file);
                </div>
                <div className="mt-1">console.log(result.secure_url);</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Image Transformation
              </h4>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto">
                <div>// Resize to 300x300</div>
                <div className="mt-1">
                  cloudinary.url('image.jpg', &#123; width: 300, height: 300
                  &#125;);
                </div>
              </div>
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
  );
}
