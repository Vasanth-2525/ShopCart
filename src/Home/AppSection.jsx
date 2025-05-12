import { Link } from "react-router-dom";
import AppStor from "../assets/images/app/01.jpg";
import GooglePlay from "../assets/images/app/02.jpg";

const AppSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 bg-white text-center">
   
      <Link to="/sign-up" className="mb-6 py-2 px-8 border-2 border-yellow-400 rounded-xl hover:bg-yellow-400 hover:text-white transition duration-200 font-semibold">
        Sign up for Free
      </Link>

   
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Learn Anytime, Anywhere
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
        Take courses on any device with our app & learn anytime you want. Just
        download, install, and start learning.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#">
          <img
            src={AppStor}
            alt="Download on the App Store"
            className="h-15 w-34 sm:h-14 sm:w-auto"
          />
        </a>
        <a href="#">
          <img
            src={GooglePlay}
            alt="Get it on Google Play"
            className="h-15 w-34 sm:h-14 sm:w-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default AppSection;
