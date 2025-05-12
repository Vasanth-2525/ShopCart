import React from "react";

const tagsList = [
  { link: "#", text: "envato" },
  { link: "#", text: "themeforest" },
  { link: "#", text: "codecanyon" },
  { link: "#", text: "videohive" },
  { link: "#", text: "audiojungle" },
  { link: "#", text: "3docean" },
  { link: "#", text: "envato" },
  { link: "#", text: "themeforest" },
  { link: "#", text: "codecanyon" },
];

const Tags = () => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Our Popular Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tagsList.map((tag, index) => (
          <a
            key={index}
            href={tag.link}
            className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-yellow-400 hover:text-white transition duration-300"
          >
            {tag.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tags;
    