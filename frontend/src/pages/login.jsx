/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
const apiUrl = import.meta.env.VITE_API_URL;

export default function Login() {
  const [email, setemail] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // console.log(email,password);
    e.preventDefault();
    // try {
      const res = await axios.post(
        `${apiUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      // console.log(res);
      // alert(res.message);
      navigate("/");
    // } catch (err) {
    //   alert(err.response?.data?.msg || "Login failedjyfjyu");
    // }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  
  //   console.log("Logging in with:", email, password);
  
  //   try {
  //     const res = await fetch("http://localhost:5000/api/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       credentials: "include",  // this is like withCredentials: true in axios
  //       body: JSON.stringify({ email, password })
  //     });
  
  //     const data = await res.json();
  
  //     if (res.ok) {
  //       alert(data.message);  // success
  //       navigate("/");
  //     } else {
  //       alert(data.message || "Login failed");  // handle error from server
  //     }
  //   } catch (err) {
  //     console.error("Login error:", err);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

  // const handleLogin = async (e)=>{
  //   e.preventDefault();
  //   await fetch("http://localhost:5000/api/auth/login")
  //   .then(res=>res.json())
  //   .then(res=>console.log(res.message))
  //   // const data = await res.json();
  //   ;
  // }
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transition duration-300 ease-in-out hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {/* <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-sm text-gray-600 cursor-pointer select-none"
              >
                {showPassword ? "Hide" : "Show"}
              </span> */}
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute top-2.5 right-3 cursor-pointer text-gray-500"
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition duration-300"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-indigo-600 hover:underline"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Eye, EyeOff } from 'lucide-react';

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [showPass, setShowPass] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', form, {
//         withCredentials: true,
//       });
//       alert(res.data.msg);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.msg || 'Login failed');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md animate-fadeIn">
//         <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">Welcome Back 👋</h2>

//         {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         <div className="relative mb-4">
//           <input
//             type={showPass ? 'text' : 'password'}
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//           <div
//             onClick={() => setShowPass(!showPass)}
//             className="absolute top-2.5 right-3 cursor-pointer text-gray-500"
//           >
//             {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
//           </div>
//         </div>

//         <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-all">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
