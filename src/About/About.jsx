import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageHeader from "../Component/PageHeader";
import aboutImg1 from "../assets/images/about/01.jpg";
import aboutImg2 from "../assets/images/about/02.jpg";
import about1 from "../assets/images/about/icon/01.jpg";
import about2 from "../assets/images/about/icon/02.jpg";
import about3 from "../assets/images/about/icon/03.jpg";
import review1 from "../assets/images/instructor/01.jpg";
import review2 from "../assets/images/instructor/02.jpg";
import review3 from "../assets/images/instructor/03.jpg";
import review4 from "../assets/images/instructor/04.jpg";

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Experiences";
const desc =
  "Distinctively provide access to users whereas transparent processes incentivize efficient functionalities rather than extensible architecture. Communicate leveraged services and cross-platform.";

const year = "30+";
const experience = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: about1,
    imgAlt: "about icon",
    title: "Skilled Instructors",
    desc: "Distinctively provide access to users whereas communicate leveraged services",
  },
  {
    imgUrl: about2,
    imgAlt: "about icon",
    title: "Get Certificate",
    desc: "Distinctively provide access to users whereas communicate leveraged services",
  },
  {
    imgUrl: about3,
    imgAlt: "about icon",
    title: "Online Classes",
    desc: "Distinctively provide access to users whereas communicate leveraged services",
  },
];

const Reviews = [
  {
    imgUrl: review1,
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme.",
  },
  {
    imgUrl: review2,
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Strategically build initiatives before high-impact long-term awesome theme.",
  },
  {
    imgUrl: review3,
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Execute high-value ideas without resources and maximize cross-platform efficiency.",
  },
  {
    imgUrl: review4,
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Scale excellent functionalities using flexible and extensible architecture.",
  },
];

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <PageHeader title="About Our Brand" curPage="About" />

      <div className="bg-amber-50 pt-28 pb-16 px-4 md:px-16">
        {/* About Section */}
        <div className="max-w-7xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image Section */}
          <div className="relative">
            <img
              src={aboutImg1}
              alt="Student"
              className="shadow-md border-8 border-white"
            />
            <div className="absolute bottom-0 left-0 bg-orange-500 border-8 border-white text-white px-3 py-6 shadow-md">
              <h3 className="text-4xl font-bold">{year}</h3>
              <p className="text-center text-[18px]">{experience}</p>
            </div>
            <img
              src={aboutImg2}
              alt="Studying"
              className="w-60 h-auto shadow-md absolute bottom-[-40px] right-[-10px] border-8 border-white hidden md:block"
            />
          </div>

          {/* Right Content Section */}
          <div>
            <p className="text-orange-500 uppercase text-sm font-semibold mb-2">
              {subTitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{desc}</p>
            <div className="space-y-4">
              {aboutList.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={item.imgUrl}
                    alt={item.imgAlt}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Slider Section */}
        <div className="mt-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Customer Reviews
          </h2>
          <Slider {...settings}>
            {Reviews.map((item, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-center justify-between gap-4 p-6 border rounded-xl bg-white shadow-md h-full text-center">
                  <img
                    src={item.imgUrl}
                    alt={item.imgAlt}
                    className="w-20 h-20 object-cover rounded-full border-4 border-orange-200 shadow"
                  />
                  <span className="text-orange-500 text-sm">★★★★★</span>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default About;
