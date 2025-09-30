"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NodeJSSetup from "../../components/NodeJSSetup";
import MongoDBSetup from "../../components/MongoDBSetup";

export default function SetupPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="w-full shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-blue-600">
              🚀 My Project
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
              <Link href="#node" className="hover:text-blue-600">
                NodeJS
              </Link>
              <Link href="#mongo" className="hover:text-blue-600">
                MongoDB
              </Link>
              <Link href="#contact" className="hover:text-blue-600">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-md px-4 py-3 space-y-3"
          >
            <Link
              href="#node"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              NodeJS
            </Link>
            <Link
              href="#mongo"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              MongoDB
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* NodeJS Section */}
        <section id="node" className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            NodeJS Setup
          </h2>
          <NodeJSSetup />
        </section>

        {/* MongoDB Section */}
        <section id="mongo" className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            MongoDB Setup
          </h2>
          <MongoDBSetup />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-white shadow-lg rounded-2xl p-6 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">📧 support@myproject.com</p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
