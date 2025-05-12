/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Welcome to MindCare</h1>
        <p className="text-lg mt-3 text-gray-600">Track your mental wellness or take a quick stress quiz.</p>
      </motion.div>
      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-4">
        {/* Login Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <User className="text-blue-600 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Login / User ID</h2>
          <p className="text-gray-600 mb-4 text-center">
            Access your mental health dashboard and personal insights.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
        </motion.div>

        {/* Quiz Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201818.png"
            alt="Quiz Icon"
            className="w-12 h-12 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Mind Condition Quiz</h2>
          <p className="text-gray-600 mb-4 text-center">
            Take a quick quiz to check if you are stressed, frustrated, or distracted.
          </p>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
            Take the Quiz
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
