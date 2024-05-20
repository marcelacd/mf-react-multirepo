import React from "react";

import { Error } from "../components/Error";

import ColorPicker from "mf_colorPicker/ColorPicker";
import ColorList from "mf_colorList/ColorList";
import { useColors } from "mf_colorPicker/useColors"; //Importando la funcion compartida


const HomePage = () => {
  const { color, colorsList, handleChangesColor, handleSubmitSaveColor, handleSubmitClearColors } = useColors()

  return (
    <>
      <div className="text-center">
        <h1 className="text-center font-bold text-3xl pb-10">Color Picker MF</h1>
      </div>
      <div className="grid grid-cols-2 gap-14">
        <div>
          <Error>
            <ColorList
              colorsList={colorsList}
              handleSubmitClearColors={handleSubmitClearColors}
            />
          </Error>
        </div>
        <div>
          <Error>
            <ColorPicker
              color={color}
              handleChangesColor={handleChangesColor}
              handleSubmitSaveColor={handleSubmitSaveColor}
            />
          </Error>
        </div>
      </div>
    </>
  )
};

export default HomePage;
