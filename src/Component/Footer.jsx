import { CiLocationOn, CiMail } from "react-icons/ci";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About ShopCart</h2>
            <p className="text-sm text-gray-300 mb-4">
              Eduaid theme number one world class university in the world. There
              are student are studing always in this university for all time.
            </p>
            <div className="flex items-center gap-2 mb-2 text-gray-300">
              <CiLocationOn className="text-lg" />
              <span>New York, USA.</span>
            </div>
            <div className="flex items-center gap-2 mb-2 text-gray-300">
              <FaPhoneAlt className="text-sm" />
              <span>+880 123 456 789</span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-gray-300">
              <CiMail className="text-lg" />
              <span>info@shopcart.com</span>
            </div>
            <div className="flex gap-4 text-xl text-gray-100">
              <FaFacebookSquare className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaLinkedin className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaPinterest className="hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link className="hover:underline">All Products</Link>
              </li>
              <li>
                <Link className="hover:underline">Shop</Link>
              </li>
              <li>
                <Link className="hover:underline">Blog</Link>
              </li>
              <li>
                <Link className="hover:underline">About</Link>
              </li>
              <li>
                <Link className="hover:underline">Policy</Link>
              </li>
              <li>
                <Link className="hover:underline">FAQs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link className="hover:underline">Summer Sessions</Link>
              </li>
              <li>
                <Link className="hover:underline">Events</Link>
              </li>
              <li>
                <Link className="hover:underline">Gallery</Link>
              </li>
              <li>
                <Link className="hover:underline">Forums</Link>
              </li>
              <li>
                <Link className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link className="hover:underline">Terms of Use</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Recent Tweets</h2>
            <div className="text-sm text-gray-300 space-y-4">
              <p className="flex gap-2">
                <FaTwitter className="mt-1" />
                <span>
                  <strong>Aminur islam</strong> @ShopCart Greetings!
                  <br />
                  #HTML_Template
                  <br />
                  Grab your item, 50% Big Sale Offer!!
                </span>
              </p>
              <p className="flex gap-2">
                <FaTwitter className="mt-1" />
                <span>
                  <strong>Somrat islam</strong> @ShopCart Hey!
                  <br />
                  #HTML_Template
                  <br />
                  Grab your item, 50% Big Sale Offer!!
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-white text-gray-700 py-6 px:6 md:px-15 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="mb-2 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold">Shop Cart</span> Designed By{" "}
            <span className="font-bold">Vasanth</span>
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <span className="hover:underline cursor-pointer">Faculty</span>
            <span className="hover:underline cursor-pointer">Staff</span>
            <span className="hover:underline cursor-pointer">Students</span>
            <span className="hover:underline cursor-pointer">Alumni</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
