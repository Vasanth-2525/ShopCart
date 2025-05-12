import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please provide valid email & password!");
      });
  };

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterrorMessage("Please provide valid email & password!");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf7ef]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address *"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password *"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          {errorMessage && (
            <div className="text-red-500 text-sm font-medium text-center">
              {errorMessage}
            </div>
          )}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <Link to="/forgetpass" className="text-gray-600 hover:underline">
              Forget Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
          >
            Login Now
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don’t Have any Account?{" "}
          <Link
            to="/sign-up"
            className="text-orange-500 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <div className="relative my-6 text-center">
          <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-white px-3 py-1 rounded-full border border-orange-400 text-orange-500 text-sm font-semibold">
            OR
          </span>
          <div className="border-t border-gray-300 mt-6"></div>
        </div>

        <div className="text-center font-semibold mb-2">
          Login With Social Media
        </div>
        <div className="flex justify-center  gap-4 mt-2">
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

export default Login;
