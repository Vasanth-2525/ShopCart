import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../Component/PageHeader";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import productData from "../Product.json";
import ProductDisplay from "./ProductDisplay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Review from "./Review";

// Custom arrow buttons
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-orange-500 text-white px-1 py-5 -mr-4">
      <FaAngleRight />
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-orange-500 text-white px-1 py-5 -ml-4">
      <FaAngleLeft />
    </div>
  </div>
);

const SingleProduct = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <>
      <PageHeader title="Our Shop Single" curPage="Shop / SingleProduct" />
      <div className="mx-[3%]">
        <div className="flex flex-col md:flex-row-reverse gap-6 px-4 py-8 max-w-7xl mx-auto">
          {/* Sidebar */}
          <aside className="w-full md:w-[35%] space-y-6">
            <PopularPost />
            <Tags />
          </aside>

          {/* Main Product Section */}
          <main className="w-full md:w-[65%] space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Image Carousel */}
              <div className="relative w-full md:w-1/2 bg-white rounded shadow p-4">
                <Slider {...settings}>
                  {[1,2,3,4].map((img, idx) => (
                    <div key={idx}>
                      <img src={product.img} />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Product Information */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <ProductDisplay product={product} />
              </div>
            </div>
            <Review/>
          </main>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
