/* eslint-disable no-unused-vars */
import Footer from "./Footer";
import Header from "./Header";

import React from 'react';
import { HeartPulse, Brain, Frown, UserX, AlertTriangle, CloudDrizzle } from 'lucide-react';

const AboutMentalHealth = () => {
  return (<>
        <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        {/* <div className="flex justify-center mb-8">
          <img
            src="https://cdn.pixabay.com/photo/2018/03/10/12/00/depression-3213673_1280.jpg"
            alt="Mental Health Illustration"
            className="w-full max-w-xl rounded-xl shadow-lg"
          />
        </div> */}

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          About Mental Health
        </h1>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <Brain size={28} /> Overview
          </h2>
          <p className="text-lg leading-relaxed">
            Mental illness, also called mental health disorders, refers to a wide range of conditions that affect your mood,
            thinking, and behavior. Examples include <strong>depression</strong>, <strong>anxiety disorders</strong>, 
            <strong> schizophrenia</strong>, <strong>eating disorders</strong>, and <strong>addictive behaviors</strong>.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Everyone experiences mental health concerns from time to time. But when symptoms persist and interfere with daily
            life, it becomes a diagnosable mental illness. It can make you miserable and impact your work, studies, and
            relationships. Fortunately, symptoms can often be managed with a combination of <strong>medications</strong> and 
            <strong> talk therapy</strong> (psychotherapy).
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <HeartPulse size={28} /> Symptoms
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Signs and symptoms can vary depending on the disorder, situation, and other individual factors. These may affect
            emotions, thoughts, and behaviors.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
            <li className="flex items-start gap-2">
              <Frown className="mt-1 text-blue-600" /> Feeling sad or down
            </li>
            <li className="flex items-start gap-2">
              <Brain className="mt-1 text-blue-600" /> Confused thinking or trouble concentrating
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-1 text-blue-600" /> Excessive fear, guilt, or worry
            </li>
            <li className="flex items-start gap-2">
              <CloudDrizzle className="mt-1 text-blue-600" /> Extreme mood changes
            </li>
            <li className="flex items-start gap-2">
              <UserX className="mt-1 text-blue-600" /> Withdrawal from friends and activities
            </li>
            <li className="flex items-start gap-2">
              <HeartPulse className="mt-1 text-blue-600" /> Physical pain (e.g., headaches, back pain)
            </li>
          </ul>

          <p className="text-lg leading-relaxed mt-6">
            Mental illness can also manifest physically, such as through <strong>stomach pain</strong>, 
            <strong> headaches</strong>, and <strong>unexplained fatigue</strong>.
          </p>
        </section>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default AboutMentalHealth;
