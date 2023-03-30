import { useState } from "react";
import { Loading, SearchHeader, Transition } from "../components";
const TextGenerator = ({ gf }) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiCall = async () => {
    const res = await gf.animate(searchValue, { limit: 20 });
    setResults(res.data);
  };
  apiCall();

  return (
    <>
      <Transition />
      <SearchHeader setSearchValue={setSearchValue} />
      <div className=" container mx-auto flex items-center flex-wrap justify-center  min-h-screen">
        {results &&
          results.map((result) => (
            <a key={result.id} target="_blank" download href={result.url}>
              <img src={result.url} alt={result.title} />
            </a>
          ))}
      </div>
    </>
  );
};

export default TextGenerator;
