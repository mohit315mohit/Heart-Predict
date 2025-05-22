/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const PredictPage = () => {
  const [formData, setFormData] = useState({
    age: "50", // default value
    sex: "1", // default value
    cp: "0", // default value
    trestbps: "120", // default value
    chol: "200", // default value
    fbs: "0", // default value
    restecg: "0", // default value
    thalach: "150", // default value
    exang: "0", // default value
    oldpeak: "1.5", // default value
    slope: "1", // default value
    ca: "0", // default value
    thal: "2", // default value
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData);
      setResult(res.data.prediction); // Set the descriptive prediction result
    } catch (err) {
      console.error(err);
      setResult("Error occurred while predicting.");
    }
  };

  return (
    <>
<Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 p-8">
      <h2 className="text-3xl font-bold text-purple-800 text-center mb-6">
        Heart Disease Prediction
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow-md"
      >
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <label className="block text-gray-700 capitalize">{field}</label>
            <input
              type="number"
              name={field}
              value={formData[field]} // this will show the default value in the input
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
        ))}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
          >
            Predict
          </button>
        </div>
      </form>
      {result && (
        <div className="text-center mt-6 text-xl font-semibold text-purple-800">
           <span className="font-bold">{result}</span>
        </div>
      )}
    </div>
    <Footer/>

        </>
  );
};

export default PredictPage;
