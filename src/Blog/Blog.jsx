import { Link } from "react-router-dom";
import PageHeader from "../Component/PageHeader";
import blogList from "../blogData";
import { FaRegUser, FaRegCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <div>
      <PageHeader title="Blog Page" curPage="Blog" />

      <div className="bg-amber-50 px-4 py-28 md:px-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogList.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src={blog.imgUrl}
              alt={blog.imgAlt || "Blog Thumbnail"}
              className="w-full h-52 object-cover rounded-t"
            />

            <div className="p-5 space-y-3">
              <Link
                to={`/blog/${blog.id}`}
                className="text-lg font-bold text-gray-800 hover:text-orange-500"
              >
                {blog.title}
              </Link>

              <div className="flex flex-wrap text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <FaRegUser className="text-orange-500" />
                  {blog.metaList?.[0]?.text || "Author"}
                </div>
                <div className="flex items-center gap-1">
                  <FaRegCalendarAlt className="text-orange-500" />
                  {blog.metaList?.[1]?.text || "Date"}
                </div>
              </div>

              <p className="text-gray-600 text-sm">{blog.desc}</p>

              <div className="flex justify-between items-center pt-4">
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-orange-500 hover:underline text-sm font-medium flex items-center gap-1"
                >
                  {blog.btnText || "Read More"}
                  <FaArrowRightLong />
                </Link>
                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <FaRegCommentDots className="text-orange-500" />
                  {blog.commentCount ?? 0}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
