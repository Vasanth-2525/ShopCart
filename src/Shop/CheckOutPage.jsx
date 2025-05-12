import React, { useState } from "react";
import "../index.css";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const [show, setShow] = useState(true);
  const [activeTab, setActiveTab] = useState("visa");


  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/home";

  const handleTabChange = (tabId) => setActiveTab(tabId);
  const handleClose = () => setShow(false);

  const handleOrderConfirm = () => {
      localStorage.removeItem("cart");
      navigate(from, { replace: true });
  };

  return (
    <div className="relative">

      {show && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-lg mx-4 sm:mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close"
            >
              <IoMdClose />
            </button>

            {/* Modal content */}
            <div className="p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-center mb-4">
                Select Your Payment Method
              </h2>

              {/* Tabs */}
              <div className="flex justify-center gap-6 sm:gap-8 border-b pb-3 mb-5">
                <div
                  onClick={() => handleTabChange("visa")}
                  className={`cursor-pointer flex items-center gap-2 pb-1 ${
                    activeTab === "visa" ? "border-b-2 border-blue-600" : ""
                  }`}
                >
                  <img
                    src="https://img.icons8.com/color/48/visa.png"
                    alt="Visa"
                    className="h-6"
                  />
                  <img
                    src="https://img.icons8.com/color/48/mastercard.png"
                    alt="MasterCard"
                    className="h-6"
                  />
                </div>
                <div
                  onClick={() => handleTabChange("paypal")}
                  className={`cursor-pointer flex items-center gap-2 pb-1 ${
                    activeTab === "paypal" ? "border-b-2 border-blue-600" : ""
                  }`}
                >
                  <img
                    src="https://img.icons8.com/color/48/paypal.png"
                    alt="PayPal"
                    className="h-6"
                  />
                </div>
              </div>

              {/* Payment Form */}
              {activeTab === "visa" ? (
                <>
                  <h3 className="text-base font-medium mb-2">Credit Card</h3>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Expiration Date"
                      className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                  <button
                    onClick={handleOrderConfirm}
                    className="mt-5 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                  >
                    Add Card
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-base font-medium mb-2">
                    PayPal Account Info
                  </h3>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Extra Info"
                    className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <button
                    onClick={handleOrderConfirm}
                    className="mt-5 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Add PayPal
                  </button>
                </>
              )}

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 mt-4">
                <strong>Payment Disclaimer:</strong> In no event shall payment
                or partial payment by Owner for any material or service be
                considered...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
