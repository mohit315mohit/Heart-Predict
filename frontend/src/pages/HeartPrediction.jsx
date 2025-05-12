// // src/pages/HeartPrediction.jsx
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from './Header';


// const HeartPrediction = () => {
//   const [formData, setFormData] = useState({
//     age: 25,
//     sex: 'Male',
//     cp: 0,
//     trestbps: 120,
//     chol: 200,
//     fbs: 0,
//     restecg: 0,
//     thalach: 150,
//     exang: 0,
//     oldpeak: 0.0,
//     slope: 0,
//     ca: 0,
//     thal: 0
//   });

//   const [result, setResult] = useState(null);
//   const apiUrl = import.meta.env.FLASK_API_URL;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: ['age', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'slope', 'ca', 'thal'].includes(name)
//         ? parseInt(value)
//         : parseFloat(value)
//     }));
//   };

//   const handleSubmit = async () => {
//     const payload = {
//       ...formData,
//       sex: formData.sex === 'Male' ? 1 : 0
//     };

//     // try {
//       const res = await axios.post(`http://127.0.0.1:6000/predict`, payload);
//       console.log(res.data);
//       setResult(res.data.prediction === 0 ? '🟢 No Heart Disease Detected' : '🔴 High Risk of Heart Disease');
//     // } catch (err) {
//     //   console.error(err);
//     //   setResult('❌ Error predicting');
//     // }
//   };

//   const inputClass = 'w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 border-pink-300';

//   return (<>
//     <Header />
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50">
//       <div className="max-w-lg w-full p-8 bg-white rounded-3xl shadow-2xl">
//         <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center mb-8">
//           ❤️ Heart Disease Predictor
//         </h1>

//         <div className="grid gap-5">
//           <div>
//             <label className="block font-semibold text-pink-600 mb-1">Age</label>
//             <input type="number" name="age" value={formData.age} onChange={handleChange} className={inputClass} />
//           </div>

//           <div>
//             <label className="block font-semibold text-pink-600 mb-1">Sex</label>
//             <select name="sex" value={formData.sex} onChange={handleChange} className={inputClass}>
//               <option>Male</option>
//               <option>Female</option>
//             </select>
//           </div>

//           {[
//             { label: 'Chest Pain Type (cp)', name: 'cp', options: [0, 1, 2, 3] },
//             { label: 'Fasting Blood Sugar >120 (fbs)', name: 'fbs', options: [0, 1] },
//             { label: 'Resting ECG (restecg)', name: 'restecg', options: [0, 1, 2] },
//             { label: 'Exercise-induced angina (exang)', name: 'exang', options: [0, 1] },
//             { label: 'Slope', name: 'slope', options: [0, 1, 2] },
//             { label: 'Number of vessels (ca)', name: 'ca', options: [0, 1, 2, 3] },
//             { label: 'Thalassemia (thal)', name: 'thal', options: [0, 1, 2, 3] }
//           ].map((field) => (
//             <div key={field.name}>
//               <label className="block font-semibold text-pink-600 mb-1">{field.label}</label>
//               <select name={field.name} value={formData[field.name]} onChange={handleChange} className={inputClass}>
//                 {field.options.map((val) => (
//                   <option key={val} value={val}>{val}</option>
//                 ))}
//               </select>
//             </div>
//           ))}

//           {[
//             { label: 'Resting Blood Pressure (trestbps)', name: 'trestbps' },
//             { label: 'Cholesterol (chol)', name: 'chol' },
//             { label: 'Max Heart Rate (thalach)', name: 'thalach' },
//             { label: 'Oldpeak', name: 'oldpeak', step: '0.1' }
//           ].map((field) => (
//             <div key={field.name}>
//               <label className="block font-semibold text-pink-600 mb-1">{field.label}</label>
//               <input
//                 type="number"
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={handleChange}
//                 className={inputClass}
//                 {...(field.step && { step: field.step })}
//               />
//             </div>
//           ))}

//           <button
//             onClick={handleSubmit}
//             className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
//           >
//             🚀 Predict
//           </button>

//           {result && (
//             <div
//               className={`mt-4 p-4 rounded-lg text-center text-lg font-bold ${
//                 result.includes('No Heart Disease')
//                   ? 'bg-green-100 text-green-700 border border-green-300'
//                   : result.includes('High Risk')
//                   ? 'bg-red-100 text-red-700 border border-red-300'
//                   : 'bg-yellow-100 text-yellow-700 border border-yellow-300'
//               }`}
//             >
//               {result}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default HeartPrediction;


// src/pages/HeartPrediction.jsx
import React, { useState } from 'react';
import Header from './Header';

const HeartPrediction = () => {
  const [formData, setFormData] = useState({
    age: 25,
    sex: 'Male',
    cp: 0,
    trestbps: 120,
    chol: 200,
    fbs: 0,
    restecg: 0,
    thalach: 150,
    exang: 0,
    oldpeak: 0.0,
    slope: 0,
    ca: 0,
    thal: 0
  });

  const [result, setResult] = useState(null);
  const apiUrl = import.meta.env.FLASK_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ['age', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'slope', 'ca', 'thal'].includes(name)
        ? parseInt(value)
        : parseFloat(value)
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      sex: formData.sex === 'Male' ? 1 : 0
    };

    try {
      const res = await fetch('http://127.0.0.1:6000', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(payload),
      });
      console.log(res.data);
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await res.json();
      console.log(data);
      setResult(data.prediction === 0 ? '🟢 No Heart Disease Detected' : '🔴 High Risk of Heart Disease');
    } catch (err) {
      console.error(err);
      setResult('❌ Error predicting');
    }
  };

  const inputClass = 'w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 border-pink-300';

  return (<>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-lg w-full p-8 bg-white rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center mb-8">
          ❤️ Heart Disease Predictor
        </h1>

        <div className="grid gap-5">
          <div>
            <label className="block font-semibold text-pink-600 mb-1">Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block font-semibold text-pink-600 mb-1">Sex</label>
            <select name="sex" value={formData.sex} onChange={handleChange} className={inputClass}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {[{ label: 'Chest Pain Type (cp)', name: 'cp', options: [0, 1, 2, 3] },
            { label: 'Fasting Blood Sugar >120 (fbs)', name: 'fbs', options: [0, 1] },
            { label: 'Resting ECG (restecg)', name: 'restecg', options: [0, 1, 2] },
            { label: 'Exercise-induced angina (exang)', name: 'exang', options: [0, 1] },
            { label: 'Slope', name: 'slope', options: [0, 1, 2] },
            { label: 'Number of vessels (ca)', name: 'ca', options: [0, 1, 2, 3] },
            { label: 'Thalassemia (thal)', name: 'thal', options: [0, 1, 2, 3] }
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-semibold text-pink-600 mb-1">{field.label}</label>
              <select name={field.name} value={formData[field.name]} onChange={handleChange} className={inputClass}>
                {field.options.map((val) => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </div>
          ))}

          {[{ label: 'Resting Blood Pressure (trestbps)', name: 'trestbps' },
            { label: 'Cholesterol (chol)', name: 'chol' },
            { label: 'Max Heart Rate (thalach)', name: 'thalach' },
            { label: 'Oldpeak', name: 'oldpeak', step: '0.1' }
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-semibold text-pink-600 mb-1">{field.label}</label>
              <input
                type="number"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={inputClass}
                {...(field.step && { step: field.step })}
              />
            </div>
          ))}

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            🚀 Predict
          </button>

          {result && (
            <div
              className={`mt-4 p-4 rounded-lg text-center text-lg font-bold ${
                result.includes('No Heart Disease')
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : result.includes('High Risk')
                  ? 'bg-red-100 text-red-700 border border-red-300'
                  : 'bg-yellow-100 text-yellow-700 border border-yellow-300'
              }`}
            >
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  </>);
};

export default HeartPrediction;
