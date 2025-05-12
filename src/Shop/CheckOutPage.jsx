import React, { useState, useEffect } from "react";
import "../index.css";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CheckOutPage = ({ total }) => {
  const [show, setShow] = useState(true);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (total) {
      setAmount(total);
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [total]);

  const handleSubmit = (e) => {
    e.preventDefault();

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
      description: "for testing purpose",
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
        localStorage.removeItem("cart");
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
      {show && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
          <IoMdClose
            size={30}
            color="black"
            onClick={() => setShow(false)} 
            className="absolute top-[28%] right-[28%] cursor-pointer z-50"
          />

          <div className="flex flex-col items-center justify-center gap-3 w-1/2 h-1/2 text-center rounded-xl bg-white mb-4 text-lg font-semibold text-red-600">
            <p>Total Amount: ₹{amount}</p>
            <button
              onClick={handleSubmit}
              className="p-4 bg-blue-600 text-white rounded-lg"
            >
              Click to Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
