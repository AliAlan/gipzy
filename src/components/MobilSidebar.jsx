import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const MobilSidebar = () => {
  const [open, setOpen] = useState(false);
  const menuHandler = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <nav className="  h-20 flex justify-between items-center w-full bg-violet-900 px-4  sm:hidden">
      <div className="logo">
        <Link to="/">
          <img className="object-cover w-8 " src="./favicon.png" alt="logo" />
        </Link>
      </div>
      <div
        onClick={menuHandler}
        className={!open ? "block cursor-pointer " : "hidden"}
      >
        <HiOutlineMenuAlt3 className="h-8 w-8" />
      </div>
      <div
        className={
          !open
            ? " no-clip hidden"
            : "h-screen  clip flex-col items-center fixed z-10 right-0 top-0 bg-violet-600  text-white  w-[50vw] clip"
        }
      >
        <AiOutlineClose
          className="h-8 w-8 top-6 right-4 absolute cursor-pointer"
          onClick={menuHandler}
        />

        <div className="space-y-8 text-lg h-full flex flex-col items-center mt-24">
          <Link to="/EmojisPage">Emojis</Link>
          <Link to="/GifsPage">Gifs</Link>
          <Link to="/TextGenerator">Text Generator</Link>
        </div>
      </div>
    </nav>
  );
};

export default MobilSidebar;
