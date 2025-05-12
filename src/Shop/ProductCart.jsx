import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStore } from "../Context/StoreContext";

const ProductCard = ({ product, view }) => {
  const { addToFavorites, addToCart } = useStore();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className={`shadow group bg-white overflow-hidden transition transform hover:scale-[1.02] rounded ${
        view === "grid" ? "p-4" : "flex gap-4 p-4 items-center"
      } animate-zoom-in`}
    >
      {/* Image + Hover Icons */}
      <div className={`relative ${view === "grid" ? "" : "w-1/3"}`}>
        <img
          src={product.img}
          alt={product.name}
          className={`object-contain w-full ${
            view === "grid" ? "h-auto mb-4" : "h-32"
          }`}
        />

        {/* Hover icons - only on grid view */}
        {view === "grid" && (
          <div className="absolute inset-0 bg-white/80 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex items-center justify-center gap-3">
            <Link
              to={`/shop/${product.id}`}
              className="bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500"
            >
              <FaRegEye />
            </Link>
            <Link
              onClick={() => addToFavorites(product)}
              className="bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500"
            >
              <FaHeart />
            </Link>
            <Link
              to={"/cart-page"}
              onClick={() => addToCart(product)}
              className="bg-orange-400 text-white p-3 rounded-full hover:bg-orange-500"
            >
              <FaShoppingCart />
            </Link>
          </div>
        )}
      </div>

      {/* Info */}
      <div
        className={`${
          view === "grid" ? "" : "w-2/3 flex flex-col justify-center"
        }`}
      >
        <Link
          to={`/shop/${product.id}`}
          className="text-sm font-semibold hover:text-orange-600 mb-1"
        >
          {product.name}
        </Link>

        <div className="flex items-center text-sm mb-1">
          {renderStars(product.ratings)}
        </div>

        <div className="text-gray-800 font-bold">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
