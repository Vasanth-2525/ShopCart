import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import productData from "../Product.json";
import bgImage from "../assets/images/bg-img/06.jpg";

export default function Banner() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All Categories"]);

  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productData);
    const uniqueCats = [
      "All Categories",
      ...new Set(productData.map((p) => p.category)),
    ];
    setCategories(uniqueCats);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = products.filter((product) => {
      const matchesName = product.name
        ?.toLowerCase()
        .includes(value.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        product.category?.toLowerCase() === selectedCategory.toLowerCase();

      return matchesName && matchesCategory;
    });

    setSuggestions(value.trim() === "" ? [] : filtered);
  };

  const handleSuggestionClick = (product) => {
    navigate("/shop", {
      state: {
        selectedCategory: product.category,
        searchTerm: product.name,
        focusProductId: product.id,
      },
    });
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center px-4 py-8 md:py-13"
      style={{ backgroundImage: `url(₹{bgImage})`, minHeight: "100vh" }}
    >
      <div className="text-center max-w-4xl mx-auto z-10 w-full px-4">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-800 leading-tight">
          Search Your One From{" "}
          <span className="text-yellow-500 font-bold">Thousand</span> Of
          Products
        </h1>

        {/* Search Box */}
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-stretch w-full max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mt-6">
          {/* Dropdown */}
          <div className="relative w-full sm:w-auto border-r sm:border-none">
            <select
              className="appearance-none w-full px-5 py-3 text-gray-700 bg-white border-none focus:outline-none text-sm pr-10"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <FaAngleDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              size={16}
            />
          </div>

          {/* Input */}
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search your product"
              className="w-full px-5 py-3 pr-12 text-gray-700 border-none rounded-md sm:rounded-none sm:rounded-r-xl text-sm focus:outline-none"
            />
            <CiSearch
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>

        {/* Subtext */}
        <p className="mt-6 text-gray-500 text-sm sm:text-base">
          We Have The Largest Collection of Products
        </p>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="flex flex-wrap justify-center mt-6 gap-3 px-2">
            {suggestions.map((item, index) => (
              <span
                key={index}
                onClick={() => handleSuggestionClick(item)}
                className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-100 cursor-pointer transition"
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
