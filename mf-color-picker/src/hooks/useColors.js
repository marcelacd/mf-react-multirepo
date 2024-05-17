import { useEffect, useState } from "react"
import { getColorList, getLastColor } from "../helpers/getColors"

export const useColors = () => {

  const [color, setColor] = useState(getLastColor())
  const [colorsList, setColorsList] = useState(getColorList())

  const handleChangesColor = (e) => {
    setColor(e.target.value)
  }

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();

    const copyColors = [color, ...colorsList];

    setColorsList(copyColors);
  };

  const handleSubmitClearColors = () => {
    console.log('clear')
    setColor('#675876')
    setColorsList([])
    localStorage.removeItem("colors")
  }

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colorsList))
  }, [colorsList])

  return {color, colorsList, handleChangesColor, handleSubmitSaveColor, handleSubmitClearColors};
}