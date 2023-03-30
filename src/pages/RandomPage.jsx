import { useState, useEffect } from "react";
import { Transition, SearchHeader } from "../components";

const RandomPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [data, setData] = useState([]);
  async function fetchGifs() {
    await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${
        import.meta.env.VITE_API_KEY
      }&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }
  useEffect(() => {
    fetchGifs();
  }, [isClicked]);
  console.log(data);
  return (
    <div className="min-h-screen pb-8">
      <Transition />
      <SearchHeader
        setIsClicked={setIsClicked}
        placeHolder={"Search any Gif"}
      />
      <div className="container mx-auto grid place-content-center mt-6">
        {data && (
          <video
            className="rounded-lg  w-full h-full object-cover"
            src={data?.images?.original?.mp4}
            alt="gif"
            autoPlay
            loop
            muted
            poster={data?.images?.fixed_width_still?.url}
          ></video>
        )}
      </div>
    </div>
  );
};

export default RandomPage;
