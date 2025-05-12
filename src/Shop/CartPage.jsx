import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import PageHeader from "../Component/PageHeader";
import CheckOutPage from "./CheckOutPage";
import { useStore } from "../Context/StoreContext";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [country, setCountry] = useState("Pakistan");
  const [city, setCity] = useState("Dhaka");
  const [zip, setZip] = useState("");
  const [coupon, setCoupon] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = (item) => item.price * item.quantity;

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    updateLocalStorage(cartItems);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      updateLocalStorage(cartItems);
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartSubtotal = cartItems.reduce(
    (total, item) => total + calculateTotalPrice(item),
    0
  );

  return (
    <>
      <PageHeader title="ShopCart" curPage="CartPage" />
      <div className="p-6 md:p-10 space-y-8">
        {/* Cart Table */}
        <div className="w-full mb-20 overflow-x-auto">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead className="bg-orange-500 text-white text-sm md:text-base">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Total</th>
                <th className="p-3">Edit</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b text-sm md:text-base">
                  <td className="p-4 flex items-center gap-4 min-w-[180px]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span className="font-semibold">{item.name}</span>
                  </td>
                  <td className="p-4 font-medium">${item.price}</td>
                  <td className="p-4">
                    <div className="flex items-center border rounded w-fit">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="px-3 py-1 hover:bg-orange-500 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-4 border-l border-r">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="px-3 py-1 hover:bg-orange-500 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 font-medium">
                    ${calculateTotalPrice(item).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Controls Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Coupon Input */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Have a Coupon?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Coupon Code..."
                  className="border border-gray-300 px-4 py-2 flex-1"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 font-semibold rounded">
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Shipping Inputs */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Calculate Shipping</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border border-gray-300 px-4 py-2 flex-1"
                >
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Nepal">Nepal</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                </select>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border border-gray-300 px-4 py-2 flex-1"
                >
                  <option value="Karachi">Karachi</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="London">London</option>
                  <option value="New York">New York</option>
                </select>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="ZIP/Postal"
                  className="border border-gray-300 px-4 py-2 flex-1"
                />
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded w-full sm:w-auto">
                Update Total
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 border border-gray-200 p-6 rounded">
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <button className="border border-gray-300 hover:text-orange-600 py-2 px-4 font-semibold rounded w-full sm:w-auto">
                Update Cart
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 font-semibold rounded w-full sm:w-auto"
                onClick={() => setShowCheckout(true)}
              >
                Proceed to Checkout
              </button>
            </div>

            <h3 className="text-xl font-bold">Cart Totals</h3>
            <div className="flex justify-between">
              <span className="text-gray-600">Cart Subtotal</span>
              <span className="font-medium text-red-500">
                ${cartSubtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping and Handling</span>
              <span className="text-green-500 font-medium">Free Shipping</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Order Total</span>
              <span className="text-red-600">${cartSubtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Checkout Modal if triggered */}
      {showCheckout && <CheckOutPage />}
    </>
  );
};

export default CartPage;
