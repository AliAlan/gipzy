import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SearchHeader = ({ setSearchValue, placeHolder }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searchResults/${input}`);
    setSearchValue(input);
  };

  return (
    <header className=" mb-8 flex-col sm:flex-row flex items-center bg-violet-900 pb-6 justify-center sm:space-x-6 px-4">
      <h1 className="text-white sm:text-lg md:text-xl mb-3 sm:m-0">
        {placeHolder || "Generate Text to a Gif"}
      </h1>
      <form
        onSubmit={submitHandler}
        className=" w-80 sm:w-96 flex items-center h-12 "
      >
        <input
          placeholder={placeHolder || "Enter text"}
          value={input}
          className="w-full h-full outline-none px-4 rounded-none"
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
      <button className="bg-white h-12 px-3 font-medium border-none outline-none hover:bg-slate-100">
        I'm a random button
      </button>
    </header>
  );
};

export default SearchHeader;
