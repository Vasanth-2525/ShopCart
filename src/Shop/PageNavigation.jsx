import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const PageNavigation = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ₹{
          currentPage === i
            ? "bg-yellow-400 text-white"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded-full flex items-center justify-center text-lg text-black hover:bg-gray-200 disabled:opacity-40"
      >
        <FaAngleLeft/>
      </button>

      {pages}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded-full flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200 disabled:opacity-40"
      >
        <FaAngleRight/>
      </button>
    </div>
  );
};

export default PageNavigation;
