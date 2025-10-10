"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                At DevMarket (dev-market.online), we collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>To provide and maintain our services</li>
                <li>To process transactions and send related information</li>
                <li>To send you technical notices and support messages</li>
                <li>To communicate with you about products, services, and events</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Analytics</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar technologies to enhance your experience. We also use Google Analytics to understand how visitors interact with our site.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Advertising</h2>
              <p className="text-gray-700 mb-6">
                We may display advertisements served by Google AdSense. Google may use cookies to serve ads based on your visits to this site and other sites on the Internet.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at patelanwar647@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}