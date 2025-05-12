import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { updateProfile } from "firebase/auth";

import { AuthContext } from "../Context/AuthProvider";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/home";

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        setErrorMessage("Signup failed. Please try again.");
      });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage(
        "Password doesn't match! Please, provide a correct password!"
      );
    } else {
      setErrorMessage("");
      try {
        const userCredential = await createUser(email, password);
        const user = userCredential.user;

        // ✅ Set displayName to username
        await updateProfile(user, {
          displayName: username,
        });

        navigate(from, { replace: true });
      } catch (error) {
        console.error(error.message);
        alert(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf7ef]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register Now</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="User Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          {errorMessage && (
            <div className="text-red-500 text-sm font-medium text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Are you a member?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>

        <div className="relative my-6 text-center">
          <div className="border-t border-gray-300"></div>
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-orange-500 font-semibold border border-orange-400 rounded-full text-sm">
            OR
          </span>
        </div>

        <div className="text-center font-semibold mb-2">
          Signup With Social Media
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <button
            onClick={handleRegister}
            className="cursor-pointer text-white bg-green-600 p-2 rounded-full"
          >
            <FaGoogle />
          </button>
          <button className="cursor-pointer text-white bg-blue-700 p-2 rounded-full">
            <FaFacebookF />
          </button>
          <button className="cursor-pointer text-white bg-sky-400 p-2 rounded-full">
            <FaTwitter />
          </button>
          <button className="cursor-pointer text-white bg-blue-500 p-2 rounded-full">
            <FaLinkedinIn />
          </button>
          <button className="cursor-pointer text-white bg-pink-500 p-2 rounded-full">
            <FaInstagram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
