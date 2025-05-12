import { FaWindows } from "react-icons/fa";
import { Link } from "react-router-dom";

// Constants
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    <section className="bg-white py-4 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mb-12">
        <p className="text-yellow-500 uppercase tracking-wide font-semibold">
          {subTitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
          {title}
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 ">
        {categoryList.map((item, index) => (
          <div
            key={index}
            className="relative group shadow-lg overflow-hidden rounded-md transition-all duration-300 transform hover:-translate-y-3"
          >
            <img
              src={item.imgUrl}
              alt={item.imgAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
            <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-10">
              <div className="bg-yellow-400 text-black p-2 rounded-full shadow-md">
                <FaWindows className="text-lg" />
              </div>
              <span className="text-white font-medium text-sm">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Link to="/shop" className="bg-white text-black-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all px-6 py-2 rounded-md font-medium shadow">
          {btnText}
        </Link>
      </div>
    </section>
  );
};

export default HomeCategory;
