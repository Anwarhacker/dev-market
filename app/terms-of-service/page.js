"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using DevMarket (dev-market.online), you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-6">
                Permission is granted to temporarily download one copy of the materials on DevMarket for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to provide accurate and complete information</li>
                <li>You are responsible for all activities under your account</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Violating any applicable laws or regulations</li>
                <li>Transmitting malicious code or viruses</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Using the service for any illegal or unauthorized purpose</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content on DevMarket, including but not limited to text, graphics, logos, and software, is the property of DevMarket or its content suppliers.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                DevMarket shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, please contact us at patelanwar647@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}