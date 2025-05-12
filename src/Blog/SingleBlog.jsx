import { Link, useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaRegUser,
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaQuoteLeft,
} from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import PageHeader from "../Component/PageHeader";
import blogList from "../blogData";
import blogImg from "../assets/images/blog/single/01.jpg";
import blogvideo from "../assets/images/blog/single/02.jpg";
import Tags from "../Shop/Tags";
import PopularPost from "../Shop/PopularPost";

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogList.find((item) => item.id === parseInt(id));
  const currentIndex = blogList.findIndex((item) => item.id === parseInt(id));
  const prevBlog = blogList[currentIndex - 1];
  const nextBlog = blogList[currentIndex + 1];

  if (!blog) {
    return <div className="p-10 text-center text-red-500">Blog not found</div>;
  }

  return (
    <>
      <PageHeader title="Single Blog Page" curPage="Blog / BlogDetails" />
      <div className="bg-amber-50 px-[5%]">
        <div className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Blog Content */} 
          <div className="w-full bg-white p-3 lg:col-span-2 space-y-6">
            <img
              src={blog.imgUrl}
              alt={blog.imgAlt}
              className="w-full h-72 md:h-[450px] object-cover shadow"
            />

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {blog.title}
            </h1>

            <div className="flex flex-wrap text-sm text-gray-600 gap-6 border-b pb-4">
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-orange-500" /> April 23, 2021
              </div>
              <div className="flex items-center gap-2">
                <FaRegUser className="text-orange-500" />{" "}
                {blog.metaList[0].text}
              </div>
              <div className="flex items-center gap-2">
                <FaRegCommentDots className="text-orange-500" /> 09 Comments
              </div>
            </div>
            {/* Paragraph 1 */}
            <p className="text-gray-700  text-justify text-base leading-relaxed">
              Serenity hasir taken poseson mying entre soung these sweet mornngs
              sprng whch enoywith whole heart create am alones and feel the
              charm of exstenceth spot whch the blissouls like mineing am soo
              happy my dearsi frend absoribed the exquste sense enjoy my whole
              hearts alone and fee the charm of exstenceths spotsi whch was the
              blis of soulis mineing amsoing dear frend soingu absorbed the
              exqust sense tranqui existence neglect my talentsr should ncapable
              ofing is drawng singe wonderful serenty has taken possessison of
              my entre souling these sweet present moment and yet feel that
              never was greater artst
            </p>

            {/* Highlighted Quote Section */}
            <div className="bg-orange-500 text-white p-6  relative">
              <FaQuoteLeft className="text-3xl absolute top-4 left-4 opacity-30" />
              <p className="text-lg text-justify font-medium pl-10">
                Dynamically recaptualize distributed technologies is whereas
                turnkey channels and onotectectally provide access to resource
                leveling expertise vias worldwide deliverables uolistically
                extend aserser are diverse vortals.
              </p>
              <p className="text-right font-semibold mt-4 italic text-white">
                — Melissa Hunter
              </p>
            </div>

            {/* Paragraph 2 */}
            <p className="text-gray-700  text-justify text-base leading-relaxed">
              Whole heart create am alones and feel the charm of exstenceth spot
              whch the blissouls like mineing am soo happy my dearsi frend
              absoribed the exquste sense enjoy my whole hearts alone and fee
              the charm of exstenceths spotsi whch was the blis of soulis
              mineing amsoing dear frend soingu absorbed the exqust sense
              tranqui existence neglect my talentsr should ncapable ofing is
              drawng singe wonderful serenty has taken possessison of my entre
              souling these sweet present moment and yet feel that never was
              greater artst
            </p>
            <img className="w-full" src={blogImg} alt="" />
            <p className=" text-justify">
              Serenity hasir taken poseson mying entre soung these sweet mornngs
              sprng whch enoywith whole heart create am alones and feel the
              charm of exstenceth spot whch the blissouls like mineing am soo
              happy my dearsi frend absoribed the exquste sense enjoy my whole
              hearts alone and fee the charm of exstenceths spotsi whch was the
              blis of soulis mineing amsoing dear frend soingu absorbed the
              exqust sense tranqui existence neglect my talentsr should ncapable
              ofing is drawng singe wonderful serenty has taken possessison of
              my entre souling these sweet present moment and yet feel that
              never was greater artst
            </p>
            <div className="relative group w-full">
              <img
                src={blogvideo}
                alt="Video Thumbnail"
                className="w-full h-auto  shadow-md"
              />
              <a
                href="https://youtu.be/W3R2WkYF4?sindqr0fEMvnu0lV6x"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white text-orange-500 hover:text-black rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                  <TbPlayerPlayFilled size={30} />
                </div>
              </a>
            </div>
            <div className="max-w-auto mx-auto px-4 py-8 space-y-8">
              {/* Paragraph Block */}
              <p className="text-gray-700  text-justify text-base leading-relaxed">
                Whole heart create am alones and feel the charm of exstenceth
                spot whch the blissouls like mineing am soo happy my dearsi
                frend absoribed the exquste sense enjoy my whole hearts alone
                and fee the charm of exstenceths spotsi whch was the blis of
                soulis mineing amsoing dear frend soingu absorbed the exqust
                sense tranqui existence neglect my talentsr should ncapable
                ofing is drawng singe wonderful serenty has taken possessison of
                my entre souling these sweet present moment and yet feel that
                never was greater artst
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-3">
                  {["Agency", "Business", "Personal"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-orange-100 hover:text-orange-600 cursor-pointer transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-gray-500 text-lg">
                  <Link to="#" className="text-blue-600 transition">
                    <FaFacebookF />
                  </Link>
                  <Link to="#" className="text-blue-400 transition">
                    <FaTwitter />
                  </Link>
                  <Link to="#" className="text-blue-700 transition">
                    <FaLinkedinIn />
                  </Link>
                  <Link to="#" className="text-red-600 transition">
                    <FaPinterestP />
                  </Link>
                  <Link to="#" className="text-pink-500 transition">
                    <FaInstagram />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm text-gray-600 border-t pt-6">
                {prevBlog ? (
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">
                      « Previous Article
                    </p>
                    <Link
                      to={`/blog/₹{prevBlog.id}`}
                      className="hover:underline"
                    >
                      {prevBlog.title}
                    </Link>
                  </div>
                ) : (
                  <div />
                )}

                {nextBlog ? (
                  <div className="text-right">
                    <p className="font-semibold text-gray-800 mb-1">
                      Next Article »
                    </p>
                    <Link
                      to={`/blog/₹{nextBlog.id}`}
                      className="hover:underline"
                    >
                      {nextBlog.title}
                    </Link>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>

          {/* Right - Sidebar */}
          <aside className="space-y-8 md:sticky md:top-24 md:max-h-[calc(100vh)] md:overflow-y-auto">
            <PopularPost />
             <Tags />
          </aside>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
