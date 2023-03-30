import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import {
  EmojisPage,
  GifsPage,
  Home,
  SearchResultPage,
  TextGenerator,
} from "./pages";
import { GiphyFetch } from "@giphy/js-fetch-api";

function App() {
  const gf = new GiphyFetch("v14cFe65D6DQnCW2uY7ZcFPTKLdgMLkp");

  return (
    <div className="  bg-slate-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home gf={gf} />} />
          <Route path="/TextGenerator" element={<TextGenerator gf={gf} />} />
          <Route path="/GifsPage" element={<GifsPage gf={gf} />} />
          <Route path="/EmojisPage" element={<EmojisPage gf={gf} />} />
          <Route
            path="/searchResults/:searchTerm"
            element={<SearchResultPage gf={gf} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
