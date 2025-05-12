/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${apiUrl}}/api/auth/me`, { withCredentials: true }); // important: withCredentials true
        setUser(res.data.user);
        console.log(res)
      } catch (error) {
        console.log('Not logged in');
        setUser(null);
      }
    };
    fetchProfile();
  }, []);

  return (
    <nav className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <h1 className="text-3xl font-extrabold tracking-wide">Health</h1>
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><button onClick={() => navigate("/")}>Home</button></li>
          <li><button onClick={() => navigate("/about")}>About</button></li>
          <li><button onClick={() => navigate("/heart-prediction")}>Heart Prediction</button></li>
          {/* <li><button onClick={() => navigate("/quiz")}>Quiz</button></li> */}
          <li><button onClick={() => navigate("/contact")}>Contact Us</button></li>
        </ul>

        {!user ? (
          <button
            className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-semibold"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <button onClick={() => navigate("/profile")}>
          <img
            src='person.avif'
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
