/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import one from "../assets/3.webp";
import two from "../assets/4.jpg";
import three from "../assets/5.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Section 1 */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-semibold text-purple-700 mb-4">
            What is Mental Illness?
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Mental illness refers to conditions that affect your mood, thinking,
            and behavior. These include depression, anxiety, schizophrenia, and
            more. We are here to guide you through awareness and solutions.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={one} alt="Mental Health" className="rounded-xl shadow-lg" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-semibold text-purple-700 mb-4">
            Signs & Symptoms
          </h3>
          <p className="text-gray-800 leading-relaxed">
            When symptoms affect your ability to function, it may be a sign of
            mental illness. Early identification and the right therapy can
            significantly improve the quality of life.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={two}
            alt="Symptoms"
            className="rounded-xl shadow-lg w-[500px]"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-semibold text-purple-700 mb-4">
            Need Help Immediately?
          </h3>
          <p className="text-gray-800 leading-relaxed">
            If you're feeling overwhelmed or suicidal, talk to someone now. You
            can contact a helpline, reach out to someone close, or speak with a
            professional. You're not alone in this journey.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={three}
            alt="Help"
            className="rounded-xl shadow-lg w-[500px]"
          />
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default HomePage;
