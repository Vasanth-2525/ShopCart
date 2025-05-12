import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import des_img from "../assets/images/shop/01.jpg";
import userImg from "../assets/images/clients/user.png";

const Review = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) return;

    const newReview = {
      imgUrl: userImg,
      imgAlt: "Client",
      name,
      date: `Posted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`,
      desc: message,
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="mt-10 bg-white p-6 rounded shadow">
      {/* Tab Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-5 py-2 font-semibold rounded ${
            activeTab === "description"
              ? "bg-blue-950 text-white"
              : "bg-orange-600 text-white hover:bg-orange-700"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-5 py-2 font-semibold rounded ${
            activeTab === "reviews"
              ? "bg-blue-950 text-white"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {/* Description Content */}
      {activeTab === "description" && (
        <div className="space-y-4 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima
            eveniet voluptate natus dolore sequi fugiat, in incidunt unde.
          </p>

          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <ul className="list-none space-y-2 flex-1">
              {[
                "Donec non est at libero vulputate rutrum.",
                "Morbi ornare lectus quis justo gravida semper.",
                "Pellentesque aliquet, sem eget laoreet ultrices.",
                "Nulla tellus mi, vulputate adipiscing cursus eu.",
                "Donec a neque libero.",
                "Morbi ornare lectus quis justo gravida semper.",
              ].map((text, idx) => (
                <li key={idx} className="flex gap-2 leading-8 items-center">
                  <FaStar className="text-yellow-400" /> {text}
                </li>
              ))}
            </ul>
            <img
              src={des_img}
              alt="Product"
              className="w-60 h-60 object-contain"
            />
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            suscipit cumque harum consequuntur et fuga fugiat labore nulla.
          </p>
        </div>
      )}

      {/* Reviews Content */}
      {activeTab === "reviews" && (
        <div className="space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className="flex gap-4 border-b border-gray-300 pb-4">
              <img
                src={review.imgUrl}
                alt={review.imgAlt}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="text-orange-500 text-sm">★★★★★</div>
                </div>
                <p className="text-sm text-gray-500">{review.date}</p>
                <p className="text-gray-600 mt-2">{review.desc}</p>
              </div>
            </div>
          ))}

          {/* Add Review Form */}
          <div>
            <h4 className="text-lg font-semibold mt-6 mb-4">Add a Review</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="border border-gray-300 px-4 py-2 flex-1"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="border border-gray-300 px-4 py-2 flex-1"
                  required
                />
                <div className="text-sm text-gray-700 whitespace-nowrap">
                  Your Rating: <span className="text-orange-500">★★★★★</span>
                </div>
              </div>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Here Message"
                className="border border-gray-300 px-4 py-2 w-full"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
