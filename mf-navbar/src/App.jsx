import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <Navbar />

    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: mf-navbar</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
