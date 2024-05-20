import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import ColorList from "./components/ColorList";

const App = () => {
    return <>
    <ColorList colorsList={[]}/>
    <ColorList colorsList={["#8cf3be", "#8ce7f3"]}/>
    </>
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
