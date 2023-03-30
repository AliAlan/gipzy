import { useState } from "react";
import { motion as m } from "framer-motion";
import { SlMagicWand } from "react-icons/sl";
import { Loading, SearchHeader, Transition } from "../components";
const TextGenerator = ({ gf }) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiCall = async () => {
    const res = await gf.animate(searchValue, { limit: 20 });
    setResults(res.data);
  };
  apiCall();
  return (
    <>
      <Transition />
      <SearchHeader setSearchValue={setSearchValue} />
      <div className=" container mx-auto flex items-center flex-wrap justify-center  min-h-screen">
        {results.length > 0 ? (
          results.map((result) => (
            <a key={result.id} target="_blank" download href={result.url}>
              <img src={result.url} alt={result.title} />
            </a>
          ))
        ) : (
          <m.h1
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-white text-md  px-4 flex items-center space-x-1"
          >
            <span>Please enter text to see the Magic</span> <SlMagicWand />
          </m.h1>
        )}
      </div>
    </>
  );
};

export default TextGenerator;
