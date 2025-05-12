import PageHeader from "../Component/PageHeader";
import aboutImg1 from '../assets/images/about/01.jpg'
import aboutImg2 from '../assets/images/about/02.jpg'

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Experiences";
const desc =
  "Distinctively provide access to users whereas transparent processes incentivize efficient functionalities rather than extensible architecture. Communicate leveraged services and cross-platform.";

const year = "30+";
const experience = "Years Of \n Experiences";

const aboutList = [
  {
    imgUrl: "/src/assets/images/about/icon/01.jpg",
    imgAlt: "about icon",
    title: "Skilled Instructors",
    desc: "Distinctively provide access to users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/02.jpg",
    imgAlt: "about icon",
    title: "Get Certificate",
    desc: "Distinctively provide access to users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/03.jpg",
    imgAlt: "about icon",
    title: "Online Classes",
    desc: "Distinctively provide access to users whereas communicate leveraged services",
  },
];

const About = () => {
  return (
    <>
      <PageHeader title="About Our Brand" curPage="About" />
      <div className="bg-amber-50 py-28 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image Section */}
          <div className="relative">
            <img
              src={aboutImg1}
              alt="Student"
              className=" shadow-md border-8 border-white"
            />
            <div className="absolute bottom-0 left-0 bg-orange-500 border-8 border-white text-white px-3 py-6  shadow-md">
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
      </div>
    </>
  );
};

export default About;
