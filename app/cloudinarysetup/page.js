"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useState } from "react";
import ImageModal from "../../components/ImageModal";
import Navigations from "../../components/Navigations";
import Navbar from "../../components/Navbar";

export default function CloudinarySetupPage() {
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
      {" "}
      <Navbar />
      <div className="min-h-screen  lg:flex bg-gray-50 py-16 lg:py-30">
        <Navigations />
        <div className="max-w-4xl lg:ml-10 px-4 sm:px-6 lg:px-8">
          <motion.section
            id="cloudinary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-blue-700"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl sm:text-2xl">☁️</span>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Cloudinary Setup
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-1">
                  Media management and image optimization service
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1 text-sm sm:text-base">
                      Why Cloudinary?
                    </h3>
                    <p className="text-blue-800 text-xs sm:text-sm">
                      Cloudinary provides powerful image and video management
                      with automatic optimization, transformation, and delivery
                      through a global CDN.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Cloudinary Account Setup
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 1: Create Cloudinary Account
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091052/Screenshot_2025-09-21_203132_bmwb7r.png"
                      alt="Cloudinary Sign Up Page"
                      className="w-full rounded-lg shadow-md mb-3 sm:mb-4 border-2 p-1 sm:p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-all duration-300"
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
                      className="w-full rounded-lg shadow-md mb-3 sm:mb-4 border-2 p-1 sm:p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-all duration-300"
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
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Visit{" "}
                      <a
                        href="https://cloudinary.com"
                        className="text-blue-600 hover:underline break-all font-medium"
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
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 2: Access Dashboard and Get API Keys
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_3_i8rql9.png"
                      alt="Cloudinary Dashboard"
                      className="w-full rounded-lg shadow-md mb-3 sm:mb-4 border-2 p-1 sm:p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-all duration-300"
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
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      After logging in, navigate to the Dashboard and click "Go
                      to API keys". Here you'll find your Cloud Name, API Key,
                      and API Secret. You'll need these to configure your
                      application.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 3: View Cloudinary Information
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091020/cloudinary_4_bp5lcf.png"
                      alt="API Keys Display"
                      className="w-full rounded-lg shadow-md mb-3 sm:mb-4 border-2 p-1 sm:p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-all duration-300"
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
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Here is the information you need to set up Cloudinary in
                      your application: cloud name, API key, and API secret.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 4: Reveal the Cloudinary API Secret Key
                    </h4>
                    <img
                      src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1759091117/Screenshot_2025-09-21_203350_e9updh.png"
                      alt="API Secret Reveal"
                      className="w-full rounded-lg shadow-md mb-3 sm:mb-4 border-2 p-1 sm:p-2 border-blue-300 cursor-pointer hover:shadow-lg transition-all duration-300"
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
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Click the eye icon to reveal your API secret. It will ask
                      for a verification code that is sent to your email. Enter
                      that code to see the API secret. You will need this for
                      your application's environment variables.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 5: Configure Environment Variables
                    </h4>

                    <pre className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <code>{`# Create .env.local file and add:

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret`}</code>
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 6: Initialize Cloudinary in Your App
                    </h4>

                    <pre className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <code>{`// lib/cloudinary.js

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default cloudinary;`}</code>
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Step 7: Test Image Upload
                    </h4>

                    <pre className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <code>{`// Test upload function

export const uploadToCloudinary = async (file) => {
  const result = await cloudinary.uploader.upload(file);
  return result;
};`}</code>
                    </pre>
                    <p className="text-gray-700 text-xs sm:text-sm mt-3 leading-relaxed">
                      Test your setup by uploading an image and verifying it
                      appears in your Cloudinary Media Library. Check the
                      console for the upload result and ensure the image URL is
                      accessible.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Usage Examples
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Basic Upload
                    </h4>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto">
                      <code>{`const result = await cloudinary.uploader.upload(file);
console.log(result.secure_url);`}</code>
                    </pre>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Image Transformation
                    </h4>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto">
                      <code>{`// Resize to 300x300
cloudinary.url('image.jpg', { width: 300, height: 300 });`}</code>
                    </pre>
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
