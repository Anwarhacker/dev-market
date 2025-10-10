"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              About DevMarket
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering developers worldwide with a premium marketplace for high-quality projects and source code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                DevMarket was created to bridge the gap between talented developers and those seeking high-quality, 
                ready-to-use solutions. We believe in democratizing access to premium development resources.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform serves as a marketplace where developers can showcase their skills, sell their projects, 
                and help others accelerate their development journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  Premium web applications and mobile apps
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  Complete source code with documentation
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  Development tutorials and setup guides
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  Modern tech stack implementations
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Founded by Developers, For Developers</h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              DevMarket is founded and maintained by Anwar Patel, a passionate full-stack developer with 5+ years 
              of experience in creating modern web applications. Our commitment is to provide quality, 
              well-documented projects that help developers learn, build, and grow.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}