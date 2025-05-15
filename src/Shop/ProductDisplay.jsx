import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Context/StoreContext";

const ProductDisplay = ({ product }) => {
   const { addToFavorites, addToCart } = useStore();
  const [prequantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");
  const [coupon, setCoupon] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { id, name, price, seller, ratings, ratingsCount, img } = product;

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cartProduct = {
      id,
      img,
      name,
      price,
      quantity: prequantity,
      size,
      color,
      coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) =>
        item.id === id &&
        item.size === size &&
        item.color === color &&
        item.coupon === coupon
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(cartProduct);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    // setShow(true);

    // setTimeout(() => {
    //   setShow(false);
    // }, 3000);

    // Reset
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  const handleCheckout = () => {
    navigate("/cart-page");
  };

  return (
    <>
      {/* Success Alert */}
      {/* {show && (
        <div className=" fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative shadow-lg">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Product added to cart.</span>
            <button
              onClick={() => setShow(false)}
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 5.652a1 1 0 0 0-1.414 0L10 8.586 7.066 5.652a1 1 0 1 0-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 1 0 1.414 1.414L10 11.414l2.934 2.934a1 1 0 0 0 1.414-1.414L11.414 10l2.934-2.934a1 1 0 0 0 0-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )} */}

      <form onSubmit={handleSubmit}>
        <div className="bg-white p-6 shadow rounded w-full">
          <h2 className="text-xl font-bold">{name}</h2>

          <div className="flex items-center mt-1">
            {renderStars(ratings)}
            <span className="text-gray-500 text-sm ml-2">
              ({ratingsCount} review{ratingsCount > 1 ? "s" : ""})
            </span>
          </div>

          <p className="text-2xl font-semibold text-gray-800 mt-2">₹{price}</p>
          <p className="text-sm text-gray-600 mt-1">{seller}</p>

          <p className="text-sm text-gray-500 mt-4">
            Energistia an deliver atactica metrcs after a visionary transition.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <select
              className=" px-3 py-2 text-sm w-full md:w-1/2"
               style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            >
              <option disabled>Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>

            <select
              className=" px-3 py-2 text-sm w-full md:w-1/2"
              value={color}
               style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              onChange={(e) => setColor(e.target.value)}
              required
            >
              <option disabled>Select Color</option>
              <option value="Pink">Pink</option>
              <option value="Ash">Ash</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center  gap-3 mt-4">
            <div className="flex items-center  rounded"
             style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <button
                type="button"
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 text-xl hover:bg-orange-500 hover:text-white"
              >
                -
              </button>
              <span className="px-4 py-2 text-sm">
                {prequantity}
              </span>
              <button
                type="button"
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 text-xl hover:bg-orange-500 hover:text-white"
              >
                +
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter Discount Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
               style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} 
              className=" px-3 py-2 text-sm flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="submit"
              onClick={() => addToCart(product)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-semibold rounded w-full sm:w-auto"
            >
              Add To Cart
            </button>
            <button
              type="button"
              onClick={handleCheckout}
              className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-2 font-semibold rounded w-full sm:w-auto"
            >
              Check Out
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductDisplay;
  