import { createElement } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const ReactApp = () => {
  return (
    <div>
      <h1>Adopt me react</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("rootReact");
const root = createRoot(container);
root.render(createElement(ReactApp));
