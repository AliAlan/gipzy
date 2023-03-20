import { useState, useEffect } from "react";
import { Carousel, Video } from "@giphy/react-components";
import { Catagories, SearchHeader } from "../components";
const GifsPage = ({ gf }) => {
  const [cat, setCat] = useState("dogs");
  const [data, setData] = useState([]);
  async function fetchGifs() {
    await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=v14cFe65D6DQnCW2uY7ZcFPTKLdgMLkp&q=${cat}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }
  useEffect(() => {
    fetchGifs();
  }, [data]);

  return (
    <div className="min-h-screen">
      <SearchHeader placeHolder={"Search any Gif"} />
      <div className="container mx-auto">
        <Catagories setCat={setCat} />
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-6">
          {data &&
            data.map((gif) => (
              <img
                className="rounded-lg  w-full h-full object-cover"
                src={gif.images.original.url}
                alt="gif"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GifsPage;
