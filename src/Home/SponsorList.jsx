import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sponsorList = [
  { imgUrl: "/src/assets/images/sponsor/01.png" },
  { imgUrl: "/src/assets/images/sponsor/02.png" },
  { imgUrl: "/src/assets/images/sponsor/03.png" },
  { imgUrl: "/src/assets/images/sponsor/04.png" },
  { imgUrl: "/src/assets/images/sponsor/05.png" },
  { imgUrl: "/src/assets/images/sponsor/06.png" },
];

const SponsorList = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-8 bg-amber-50">
      <Slider {...settings}>
        {sponsorList.map((item, index) => (
          <div key={index} className=" flex items-center  justify-center px-15">
            <img
              src={item.imgUrl}
              alt={`Sponsor ${index + 1}`}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SponsorList;
