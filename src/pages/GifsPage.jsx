import { useState, useEffect } from "react";
import { Video } from "@giphy/react-components";
const GifsPage = ({ gf }) => {
  const [sticker, setSticker] = useState([]);
  const { data } = gf.gif("D068R9Ziv1iCjezKzG");
  return (
    <div>
      <Video gif={data} width={300} controls />
    </div>
  );
};

export default GifsPage;
