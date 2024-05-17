
export const getColorList = () => 
    JSON.parse(localStorage.getItem("colors")) || []

export const getLastColor = () => {
    const listColor = getColorList()

    return listColor[0] || "#f38c8c"
}