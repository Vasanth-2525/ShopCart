import React from "react";

const Search = ({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <>
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border px-4 py-2 bg-gray-100 focus:outline-none"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-3">All Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2 text-sm ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
