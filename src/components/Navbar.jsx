import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" h-20 flex items-center bg-violet-900 px-4">
      <div className="container mx-auto h-full flex items-center justify-between  text-white ">
        <div className="logo">
          <Link to="/">
            <img
              className="object-cover w-12 sm:w-20 h-full"
              src="./logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="space-x-4 sm:space-x-9 text-md  sm:text-lg">
          <Link to="/EmojisPage">Emojis</Link>
          <Link className="border-r border-l p-2 sm:border-none" to="/GifsPage">
            Gifs
          </Link>
          <Link to="/TextGenerator">Text Generator</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
