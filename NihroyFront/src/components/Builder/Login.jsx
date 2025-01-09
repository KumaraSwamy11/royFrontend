import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, SetShowPassword] = useState(false);
  const navigate = useNavigate();

  const tooglePasswordVisibility = () => {
    SetShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:8084/api/builders/login",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("authToken", response.data.token);

        //console.log("Token saved:", response.data.token);
        navigate("/builderprofile");
        console.log("Navigating to Builder Profile Page");
      } else {
        alert("Failed to Login Credentials miss match");
      }
    } catch (error) {
      console.log("Error :", error);
      alert("Error while Login to the profile ");
    }
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          LogIn
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <span
              onClick={tooglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
            >
              {showPassword ? " 🔒" : "👁️"} {/* Use better icons if needed */}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500"
            >
              Log In
            </button>

            <Link
              to="/"
              className="bg-red-400 text-black   px-6 py-2 rounded-lg hover:bg-red-500"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
