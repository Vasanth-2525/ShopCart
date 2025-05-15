import React, { useState } from "react";
import CheckOutPage from "./CheckOutPage";
import { IoMdClose } from "react-icons/io";

const PaymentPage = ({ total }) => {
  const [showSummary, setShowSummary] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleClickToPay = () => {
    setShowSummary(false);
    setShowCheckout(true);
  };

  return (
    <>
      {/* Payment Summary Modal */}
      {showSummary && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
          <div className="relative bg-white p-6 md:p-10 space-y-6 border border-gray-200 rounded shadow-lg w-full max-w-md">
            <IoMdClose
              size={30}
              color="black"
              onClick={() => setShowSummary(false)}
              className="absolute top-4 right-4 cursor-pointer"
            />
            <h2 className="text-2xl font-bold mb-4 text-center">
              Payment Summary
            </h2>

            <div className="flex justify-between">
              <span className="text-gray-600">Cart Subtotal</span>
              <span className="font-medium text-red-500">₹{total}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Shipping and Handling</span>
              <span className="text-green-500 font-medium">Free Shipping</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Order Total</span>
              <span className="text-red-600">₹{total}</span>
            </div>

            <button
              onClick={handleClickToPay}
              className="w-full mt-6 bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 font-semibold rounded"
            >
              Click To Pay
            </button>
          </div>
        </div>
      )}

      {/* Razorpay Checkout Modal */}
      {showCheckout && (
        <CheckOutPage total={total} onClose={() => setShowCheckout(false)} />
      )}
    </>
  );
};

export default PaymentPage;
