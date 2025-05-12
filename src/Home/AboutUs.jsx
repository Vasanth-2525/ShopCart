import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { FaUsers, FaGraduationCap, FaBell } from "react-icons/fa";
import aboutimg from "../assets/images/about/03.jpg";

const countList = [
  {
    icon: <FaUsers />,
    count: 12600,
    text: "Marchant Enrolled",
    color: "bg-orange-500 shadow-orange-500",
  },
  {
    icon: <FaGraduationCap />,
    count: 30,
    text: "Certified Courses",
    color: "bg-green-600 shadow-green-600",
  },
  {
    icon: <FaBell />,
    count: 100,
    text: "Rewards and Gift Cards",
    color: "bg-yellow-400 shadow-yellow-400",
  },
];

const AboutUs = () => {
  const statsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.9 && !animate) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animate]);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute  bg-black inset-0 z-0 flex">
        <div className="w-1/2 hidden sm:block"></div>
        <div
          className="w-full md:w-[60%] bg-black sm:bg-yellow-400"
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-20 gap-10">
        {/* Stats Section */}
        <div
          ref={statsRef}
          className="flex flex-col gap-6 w-full lg:w-1/3 text-white"
        >
          {countList.map((item, index) => (
            <Stat
              key={index}
              icon={item.icon}
              number={item.count}
              label={item.text}
              color={item.color}
              animate={animate}
            />
          ))}
        </div>

        {/* Image Section */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
          <div className="absolute inset-0 rounded-full bg-white opacity-20 scale-110 shadow-[0_0_40px_rgba(0,0,0,0.6)]"></div>
          <div className="absolute inset-2 rounded-full bg-white opacity-25 scale-105 shadow-[0_0_40px_rgba(0,0,0,0.6)]"></div>
          <div className="absolute inset-4 rounded-full bg-white z-0"></div>
          <img
            src={aboutimg}
            alt="Merchant"
            className="relative w-full h-full object-cover rounded-full border-4 border-white z-10"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-start text-white sm:text-black">
          <p className="text-sm uppercase font-semibold sm:text-gray-700 mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Become a Marchant
          </h2>
          <p className="mb-6 text-base leading-relaxed max-w-md sm:text-gray-800">
            Take courses on any device with our app & learn all about business
            on the go. Just download, install, and start learning.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition-all font-semibold">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, number, label, color, animate }) => (
  <div className="flex items-center gap-4">
    <div
      className={`w-14 h-14 sm:w-16 sm:h-16 ₹{color} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-md`}
    >
      {icon}
    </div>
    <div>
      <h4 className="text-xl sm:text-2xl font-bold">
        {animate ? <CountUp end={number} duration={3} separator="," /> : "0"}+
      </h4>
      <p className="text-sm sm:text-base text-gray-300">{label}</p>
    </div>
  </div>
);

export default AboutUs;
