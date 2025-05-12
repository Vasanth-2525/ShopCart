import React from "react";
import avatar from "../assets/images/clients/avater.jpg";
import worldMap from "../assets/images/clients/bg.png";

const clientPositions = [
  { top: "20%", left: "25%", color: "bg-red-500" },
  { top: "30%", left: "56%", color: "bg-green-500" },
  { top: "55%", left: "50%", color: "bg-yellow-500" },
  { top: "75%", left: "67%", color: "bg-pink-500" },
  { top: "70%", left: "37%", color: "bg-purple-500" },
  { top: "20%", left: "67%", color: "bg-orange-500" },
  { top: "13%", left: "41%", color: "bg-blue-500" },
];

export default function ClientMap() {
  return (
    <div className="relative w-full py-16 bg-white flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        More Than <span className="text-yellow-400">60,000</span> Customers
      </h2>
      <p className="text-gray-600 max-w-xl mb-12 px-4 text-sm sm:text-base">
        Buy products on any of your devices with our app & enjoy your time the way you want.
        Just download, install & start shopping.
      </p>

      <div
        className="relative w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[500px] bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(₹{worldMap})` }}
      >
        {clientPositions.map((pos, index) => (
          <div
            key={index}
            className="absolute group"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Hover-controlled pulsing circle */}
            <span
              className={`absolute w-3 h-3 sm:w-7 sm:h-7 ₹{pos.color} rounded-full opacity-70 group-hover:animate-ping`}
            ></span>

            {/* Static dot */}
            <span
              className={`relative w-3 h-3 sm:w-2 sm:h-2 ₹{pos.color} rounded-full z-10`}
            ></span>

            {/* Avatar + tooltip */}
            <div className="absolute -top-9 left-[14px] -translate-x-1/2 hidden group-hover:flex flex-col items-center">
              <span className="text-xs sm:text-sm border border-yellow-400 bg-white text-black px-2 py-1 rounded mb-1 whitespace-nowrap">
                Join with Us
              </span>
              <img
                src={avatar}
                alt="client"
                className="w-8 h-8 sm:w-8 sm:h-8 rounded-full shadow-lg border-2 border-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
