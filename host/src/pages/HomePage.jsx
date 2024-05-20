import React from "react";

import { Error } from "../components/Error";

import Counter from "mf_counter/Counter";

import ColorPicker from "mf_colorPicker/ColorPicker";
import ColorList from "mf_colorList/ColorList";
import { useColors } from "mf_colorPicker/useColors"; 
//Importando la funcion compartida


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
      {/* <div className="text-center">
        <h1 className="font-bold text-lg mb-5">Counter MF</h1>
        <Error>
          <Counter />
        </Error>
      </div> */}
    </>
  )
};

export default HomePage;
