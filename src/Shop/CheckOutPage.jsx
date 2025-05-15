import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Context/StoreContext";
import "../index.css";

const CheckOutPage = ({ total, onClose }) => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const { setCartItems } = useStore();

  useEffect(() => {
    if (total) setAmount(total);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [total]);

  const handleSubmit = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert("Invalid amount");
      return;
    }

    const options = {
      key: "rzp_test_yTS52rDf4bQQKY",
      amount: numericAmount * 100,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "Test Payment",
      handler: function (response) {
        alert(
          "Payment Successful!\nPayment ID: " + response.razorpay_payment_id
        );
        localStorage.removeItem("cart");
        setCartItems([]);
        navigate("/");
      },
      prefill: {
        name: "Vasanth",
        email: "vasanthlogan2525@gmail.com",
        contact: "8110008918",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
        <div className="relative flex flex-col items-center justify-center gap-4 w-full max-w-md p-6 bg-white rounded-xl text-center shadow-lg">
          <IoMdClose
            size={26}
            color="black"
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer"
          />
          <p className="text-lg font-semibold text-gray-800">
            Total Amount: <span className="text-red-600">₹{amount}</span>
          </p>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
