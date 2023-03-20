import React from "react";
import catagories from "../utlis/constants";
const Catagories = ({ setCat }) => {
  function catHandler(e) {
    setCat("");
    setCat(e.target.innerText);
  }
  return (
    <section className="flex items-center space-x-4 text-white text-lg cursor-pointer overflow-auto cats">
      {catagories.map((category) => (
        <div
          onClick={(e) => catHandler(e)}
          className="min-w-[185px] text-center bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md  "
          key={category}
        >
          {category}
        </div>
      ))}
    </section>
  );
};

export default Catagories;
