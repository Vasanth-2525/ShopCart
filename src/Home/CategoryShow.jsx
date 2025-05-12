import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import category1 from '../assets/images/categoryTab/01.jpg'
import category2 from '../assets/images/categoryTab/02.jpg'
import category3 from '../assets/images/categoryTab/03.jpg'
import category4 from '../assets/images/categoryTab/04.jpg'
import category5 from '../assets/images/categoryTab/05.jpg'
import category6 from '../assets/images/categoryTab/06.jpg'
import category7 from '../assets/images/categoryTab/07.jpg'
import category8 from '../assets/images/categoryTab/08.jpg'

const title = "Our Products";

const categories = ["All", "Shoes", "Bags", "Phones", "Beauty"];

const ProductData = [
  {
    imgUrl: category1,
    cate: "Shoes",
    title: "Nike Premier X",
    brand: "Nike",
    price: "₹199.00",
    id: 1,
  },
  {
    imgUrl: category2,
    cate: "Bags",
    title: "Asthetic Bags",
    brand: "D&J Bags",
    price: "₹199.00",
    id: 2,
  },
  {
    imgUrl: category3,
    cate: "Phones",
    title: "iPhone 12",
    brand: "Apple",
    price: "₹199.00",
    id: 3,
  },
  {
    imgUrl: category4,
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    brand: "Gucci",
    price: "₹199.00",
    id: 4,
  },
  {
    imgUrl: category5,
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    brand: "Nike",
    price: "₹199.00",
    id: 5,
  },
  {
    imgUrl: category6,
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    brand: "Zaara",
    price: "₹199.00",
    id: 6,
  },
  {
    imgUrl: category7,
    cate: "Bags",
    title: "Look Less Chanel Bag",
    brand: "Gucci",
    price: "₹199.00",
    id: 7,
  },
  {
    imgUrl: category8,
    cate: "Shoes",
    title: "Casual Sneakers",
    brand: "Bata",
    price: "₹199.00",
    id: 8,
  },
];

const CategoryShow = () => {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? ProductData
      : ProductData.filter((item) => item.cate === filter);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">
          {title}
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md text-sm border transition ₹{
                filter === cat
                  ? "bg-yellow-400 text-white border-yellow-400"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredData.map((item) => (
          <Link
          to='/shop'
            key={item.id}
            className="bg-white shadow-md rounded-md overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-3"
          >
            <div className="relative">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              {/* Category & Stars */}
              <div className="absolute bottom-[-7px] left-0 right-0 bg-amber-200 bg-opacity-90 px-3 py-2 flex items-center justify-between text-sm text-black">
                <span className="font-medium">{item.cate}</span>
                <div className="flex text-black-500">
                    <FaStar className="text-xs" />
                    <FaStar className="text-xs" />
                    <FaStar className="text-xs" />
                    <FaStar className="text-xs" />
                    <FaStar className="text-xs" />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-1">
              <h3 className="text-base font-semibold text-gray-800">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-sm">
                <p className="text-gray-500">{item.brand}</p>
                <p className="text-yellow-500 font-semibold">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShow;
