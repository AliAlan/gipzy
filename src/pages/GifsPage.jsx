import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Carousel, Video } from "@giphy/react-components";
import { Catagories, SearchHeader, Transition } from "../components";
const GifsPage = ({ gf }) => {
  const [cat, setCat] = useState("dogs");
  const [data, setData] = useState([]);
  async function fetchGifs() {
    await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${
        import.meta.env.VITE_API_KEY
      }&q=${cat}&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }
  useEffect(() => {
    fetchGifs();
  }, [cat]);
  return (
    <div className="min-h-screen pb-8">
      <Transition />
      <SearchHeader placeHolder={"Search any Gif"} />
      <div className="container mx-auto">
        <Catagories setCat={setCat} />
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchGifs}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {
            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-6">
              {data &&
                data?.map((gif) => (
                  <video
                    key={gif.id}
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
          }
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default GifsPage;
