import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
const apiUrl = import.meta.env.VITE_API_URL;

export default function Signup() {
  // console.log(`${apiUrl}`)
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Update form fields when user types
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate the form fields
  const validate = () => {
    if (!form.name || form.name.length < 3) return "name must be at least 3 characters";
    if (!form.email.includes('@')) return "Invalid email format";
    if (form.password.length < 6) return "Password must be at least 6 characters";
    return null;
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) return setError(validationError);
    try {
      await axios.post(`${apiUrl}/api/auth/register`, form, {
        withCredentials: true
      });
      // alert(res.data.msg);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">Create Your Account</h2>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        {/* name Input */}
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Password Input with Eye Toggle */}
        <div className="relative mb-4">
          <input
            type={showPass ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div
            onClick={() => setShowPass(!showPass)}
            className="absolute top-2.5 right-3 cursor-pointer text-gray-500"
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        {/* Signup Button */}
        <button 
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition duration-300"
        >
          Sign Up
        </button>

        {/* Link to Login Page */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-indigo-600 hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}