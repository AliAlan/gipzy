import React from "react";
import { GridGifs, Transition } from "../components";
const Home = ({ gf }) => {
  return (
    <div>
      <Transition />
      <h1 className="text-center m-4 text-white text-xl sm:text-3xl">
        Trending Gifs
      </h1>
      <GridGifs gf={gf} />
    </div>
  );
};

export default Home;
