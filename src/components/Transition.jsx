import React from "react";
import { motion as m } from "framer-motion";
const Transition = () => {
  return (
    <>
      <m.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full h-full fixed z-30 top-0 bottom-0 right-full bg-slate-900"
      />
      <m.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="w-full h-full fixed z-20 top-0 bottom-0 right-full bg-white"
      />
      <m.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
        className="w-full h-full fixed z-10 top-0 bottom-0 right-full bg-[#4c1d95]"
      />
    </>
  );
};

export default Transition;
