import { useState, useEffect } from "react";
import { SearchHeader, Transition } from "../components";
import { useParams } from "react-router-dom";
const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const [data, setData] = useState([]);
  async function fetchGifs() {
    await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=v14cFe65D6DQnCW2uY7ZcFPTKLdgMLkp&q=${searchTerm}&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }
  useEffect(() => {
    fetchGifs();
  }, [searchTerm]);
  return (
    <div className="min-h-screen pb-8">
      <Transition />
      <SearchHeader placeHolder={"Search any Gif"} />
      <div className="container mx-auto">
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-6">
          {data &&
            data?.map((gif) => (
              <video
                className="rounded-lg  w-full h-full object-cover"
                src={gif.images.original.mp4}
                alt="gif"
                autoPlay
                loop
                muted
                poster={gif.images.fixed_width_still.url}
              ></video>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
