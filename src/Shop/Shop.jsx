import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../Component/PageHeader";
import ProductCard from "./ProductCart";
import PageNavigation from "./PageNavigation";
import productData from "../Product.json";
import { FaTh, FaBars } from "react-icons/fa";
import Search from "./Search";

const allCategories = ["All", ...new Set(productData.map((p) => p.category))];

const Shop = () => {
  const location = useLocation();
  const fromBanner = location.state || {};
  const { selectedCategory: incomingCategory, searchTerm: incomingSearch, focusProductId } = fromBanner;

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(incomingCategory || "All");
  const [searchTerm, setSearchTerm] = useState(incomingSearch || "");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productRefs = useRef({});

  const productsPerPage = 12;

  useEffect(() => {
    setProducts(productData);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const filtered = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filtered.slice(startIndex, endIndex);

  // Optional: Scroll to product on mount if focusProductId is passed
  useEffect(() => {
    if (focusProductId && productRefs.current[focusProductId]) {
      setTimeout(() => {
        productRefs.current[focusProductId].scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, [paginatedProducts, focusProductId]);

  return (
    <>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      <div className="mx-[3%]">
        <div className="flex flex-col md:flex-row-reverse gap-6 px-4 py-8 max-w-7xl mx-auto">
          {/* Category Filter - RIGHT SIDE */}
          <aside className="w-full md:w-[40%] space-y-6 md:sticky md:top-24 md:max-h-[calc(50vh)] md:overflow-y-auto">
            <Search
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </aside>

          {/* Product Grid - LEFT SIDE */}
          <main className="w-full md:w-3/4 space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <p>
                Showing {startIndex + 1} - {Math.min(endIndex, filtered.length)} of {filtered.length} Results
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 border ${view === "grid" ? "bg-yellow-400 text-white" : ""}`}
                >
                  <FaTh />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 border ${view === "list" ? "bg-yellow-400 text-white" : ""}`}
                >
                  <FaBars />
                </button>
              </div>
            </div>

            {/* Product Display */}
            <div
              className={`grid ${
                view === "grid"
                  ? "grid-cols-1 sm:grid-cols-3 gap-6"
                  : "grid-cols-1 gap-4"
              }`}
            >
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  ref={(el) => (productRefs.current[product.id] = el)}
                >
                  <ProductCard product={product} view={view} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <PageNavigation
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default Shop;
