import { createElement } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

const ReactApp = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me</Link>
      </header>
      <div>
        <h1>Adopt me react</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("rootReact");
const root = createRoot(container);
root.render(createElement(ReactApp));
