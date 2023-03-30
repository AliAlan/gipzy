import { useEffect, useState } from "react";
import { Transition } from "../components";

const EmojisPage = () => {
  const [data, setData] = useState([]);
  async function fetchEmojis() {
    await fetch(
      `https://api.giphy.com/v2/emoji?api_key=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }
  useEffect(() => {
    fetchEmojis();
  }, []);
  console.log(data);
  return (
    <div>
      <Transition />
      <div className="container mx-auto min-h-screen">
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-6">
          {data &&
            data?.map((gif) => (
              <a
                key={gif.id}
                download
                target="_blank"
                href={gif.images.original.url}
              >
                <video
                  className="rounded-lg  w-full h-full object-cover"
                  src={gif.images.original.mp4}
                  alt="gif"
                  autoPlay
                  loop
                  muted
                  poster={gif.images.fixed_width_still.url}
                ></video>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EmojisPage;
