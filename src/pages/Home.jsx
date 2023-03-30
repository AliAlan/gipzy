import React from "react";
import { GridGifs, Transition } from "../components";
import { motion as m } from "framer-motion";
const Home = ({ gf }) => {
  return (
    <div>
      <Transition />
      <m.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, ease: "easeIn" }}
        className="text-center m-4 text-white text-xl sm:text-3xl"
      >
        Trending Gifs
      </m.h1>
      <GridGifs gf={gf} />
    </div>
  );
};

export default Home;
