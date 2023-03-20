import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState } from "react";
import ResizeObserver from "react-resize-observer";
const GridGifs = ({ onGifClick, gf }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });
  return (
    <div className="container mx-auto flex justify-center p-4">
      <Grid
        fetchGifs={fetchGifs}
        width={width}
        columns={width < 815 ? 2 : width < 1300 ? 3 : 5}
        gutter={6}
      />
      <ResizeObserver onResize={({ width }) => setWidth(width)} />
    </div>
  );
};

export default GridGifs;
