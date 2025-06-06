import React from "react";
import pop1 from '../assets/images/blog/10.jpg'
import pop2 from '../assets/images/blog/11.jpg'
import pop3 from '../assets/images/blog/12.jpg'
import pop4 from '../assets/images/blog/09.jpg'

const postList = [
  {
    id: 1,
    imgUrl: pop1,
    imgAlt: "rajibraj91",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 2,
    imgUrl: pop2,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 3,
    imgUrl: pop3,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 4,
    imgUrl: pop4,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
];

const PopularPost = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Most Popular Post</h2>
      <ul className="space-y-4">
        {postList.map((post) => (
          <li key={post.id} className="flex items-center space-x-4">
            <img
              src={post.imgUrl}
              alt={post.imgAlt}
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <p className="text-sm font-medium leading-tight">{post.title}</p>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
