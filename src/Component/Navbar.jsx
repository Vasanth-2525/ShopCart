import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiInfo } from "react-icons/fi";
import { FaUserCircle, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../Context/AuthProvider";
import { useStore } from "../Context/StoreContext";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const { user, logOut } = useContext(AuthContext);
 const { favorites, cartItems } = useStore();

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out successfully"))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolute w-full z-50 transition-all duration-500 ease-in-out ${
        headerFixed
          ? "fixed top-0 shadow-md bg-white/10 backdrop-blur-md fade-in-up"
          : "bg-transparent"
      }`}
    >
      {/* Mobile Top Bar */}
      <div
        className={`bg-amber-50 md:hidden transition-all duration-300 ${
          socialToggle ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center space-x-4">
          {user ? (
            <>
              <FaUserCircle size={25} className="text-xl" />
              <span className="font-medium text-black">
                {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-yellow-400 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/sign-up"
                className="text-black p-2 rounded-[10px] bg-yellow-500 font-semibold"
              >
                Create Account
              </Link>
              <Link to="/login" className="text-gray-600">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10 items-center">
            {["Home", "Shop", "Blog", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-black font-bold hover:text-yellow-500 transition-all duration-300"
              >
                {item}
              </Link>
            ))}

            {user ? (
              <>
                <FaUserCircle size={25} className="text-xl text-black" />
                <span className="text-black -ml-9 font-medium">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/sign-up"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded transition duration-200"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-gray-800 font-medium"
                >
                  Log In
                </Link>
              </>
            )}
          </nav>

          {/* Icons Section: Wishlist & Cart */}
          <div className="flex items-center gap-4">
            {/* Wishlist Icon */}
            <Link to="/add-fav-cart" className="relative">
              <FaRegHeart className="text-xl text-gray-700" />
              <span className="absolute -top-2 -right-2 text-xs font-bold bg-red-600 text-white px-1 rounded-full">
                {favorites.length}
              </span>
            </Link>

            {/* Cart Icon */}
            <Link to="/cart-page" className="relative">
              <FaShoppingCart className="text-xl text-gray-700" />
              <span className="absolute -top-2 -right-2 text-xs font-bold bg-red-600 text-white px-1 rounded-full">
                {cartItems.length}
              </span>
            </Link>

            {/* Mobile Toggle Buttons */}
            <div className="lg:hidden flex items-center space-x-3">
              <button onClick={() => setMenuToggle(!menuToggle)}>
                {menuToggle ? (
                  <FiX className="text-2xl text-gray-700" />
                ) : (
                  <FiMenu className="text-2xl text-gray-700" />
                )}
              </button>
              <button onClick={() => setSocialToggle(!socialToggle)}>
                <FiInfo className="text-xl text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {menuToggle && (
          <div className="lg:hidden px-4 pb-4 bg-yellow-300 transition-all">
            <nav className="flex flex-col divide-y divide-yellow-400 text-black font-semibold">
              {["Home", "Shop", "Blog", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMenuToggle(false)}
                  className="py-2 hover:text-yellow-500 transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="py-2 text-left text-yellow-500 font-bold"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/sign-up"
                    onClick={() => setMenuToggle(false)}
                    className="py-2 hover:text-yellow-500"
                  >
                    Create Account
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setMenuToggle(false)}
                    className="py-2 hover:text-yellow-500"
                  >
                    Log In
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
