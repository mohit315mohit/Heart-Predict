/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-10">
          Contact Us
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-8">
          {/* Contact Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="text-center text-gray-700">
            <p>📧 Email: <a href="mailto:support@heartguard.com" className="text-purple-700 font-medium hover:underline">support@heartguard.com</a></p>
            <p>📍 Location: Roorkee, Uttarakhand, India</p>
            <p>📞 Phone: +91 9876543210</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
