import bgImage from "../assets/images/bg-img/07.jpg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoMdClose } from "react-icons/io";

export default function Register() {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gy910vn", "template_gi7vneo", form.current, {
        publicKey: "isAR5Sy8Y4PABFBmC",
      })
      .then(
        () => {
          setTimeout(() => {
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      className="flex items-center justify-center bg-center px-4 py-8 md:py-13"
      style={{ backgroundImage: `url(${bgImage})`, minHeight: "70vh" }}
    >
      <div className="w-full ml-[7%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#76277aa0] md:bg-transparent rounded-xl  p-6 md:p-0">
        {/* Left Side - Promo Text */}
        <div className="text-white space-y-4 text-center md:text-left px-2 md:px-0">
          <p className="text-yellow-400 font-bold uppercase text-sm">
            Save the Day
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Join on Day Long Free Workshop for{" "}
            <span className="text-white font-extrabold">Advance </span>
            <span className="text-yellow-400 font-extrabold">Mastering </span>
            <span className="text-white font-extrabold">On Sales</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-200">
            Limited Time Offer! Hurry Up
          </p>
        </div>

        {/* Right Side - Form */}
        <div className=" text-center bg-gradient-to-b from-[#fff] to-[#1111] rounded-[5px] shadow-lg p-6 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Register Now</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="w-full bg-white px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              name="message"
              placeholder="Phone"
              className="w-full bg-white px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full md:w-[60%] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded transition duration-300"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
