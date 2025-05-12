import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/bg-img/01.jpg";

const PageHeader = ({ title, curPage }) => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(₹{bgImage})`,
        minHeight: "70vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center">
        <h2 className="uppercase text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          <Link to="/home" className="hover:underline text-gray-600">
            Home
          </Link>{" "}
          /{" "}
          <span className="text-gray-800 font-medium">
            {curPage}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
