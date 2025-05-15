import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import PageHeader from "../Component/PageHeader";

import { useStore } from "../Context/StoreContext";
import PaymentPage from "./PaymentPage";

const CartPage = () => {
  const { cartItems, setCartItems } = useStore();
  const [country, setCountry] = useState("India");
  const [city, setCity] = useState("New Delhi");
  const [zip, setZip] = useState("");
  const [coupon, setCoupon] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  const uniqueCartItems = Array.from(
    new Map(cartItems.map((item) => [item.id, item])).values()
  );

  const calculateTotalPrice = (item) => item.price * item.quantity;

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const cartSubtotal = uniqueCartItems.reduce(
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
              {uniqueCartItems.map((item) => (
                <tr key={item.id} className="border-b text-sm md:text-base">
                  <td className="p-4 flex items-center gap-4 min-w-[180px]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span className="font-semibold">{item.name}</span>
                  </td>
                  <td className="p-4 font-medium">₹{item.price}</td>
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
                    ₹{calculateTotalPrice(item).toFixed(2)}
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
        <div>
          <div className="space-y-6 lg:flex items-center justify-between">
            {/* Coupon Input */}
            <div className="space-y-6">
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
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Calculate Shipping</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
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
                  required
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
                  required  
                />
              </div>
              <button
                type="submit"
                onClick={() => setShowCheckout(!showCheckout)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded w-full sm:w-auto"
              >
                Procced To CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <PaymentPage
          total={cartSubtotal.toFixed(2)}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  );
};

export default CartPage;
