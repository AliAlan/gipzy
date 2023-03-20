import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
const SearchHeader = ({ setSearchValue }) => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue(input);
  };
  return (
    <header className=" mb-8 flex-col sm:flex-row flex items-center bg-violet-900 pb-6 justify-center sm:space-x-6 px-4">
      <h1 className="text-white sm:text-lg md:text-xl mb-3 sm:m-0">
        Generate Text to a Gif
      </h1>
      <form
        onSubmit={submitHandler}
        className=" w-80 sm:w-96 flex items-center h-12 "
      >
        <input
          placeholder="Enter text"
          value={input}
          className="w-full h-full outline-none px-4"
          type="search"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-white h-full p-2 border-l hover:bg-slate-100"
          type="submit"
        >
          <BsArrowRight size={24} />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
