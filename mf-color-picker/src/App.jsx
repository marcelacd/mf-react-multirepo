import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import ColorPicker from "./components/ColorPicker";
import { useColors } from "./hooks/useColors";

const App = () => {

  const { color, handleChangesColor, handleSubmitSaveColor } = useColors()

  return (
    <ColorPicker
      color={color}
      handleChangesColor={handleChangesColor}
      handleSubmitSaveColor={handleSubmitSaveColor}
    />
  )
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
