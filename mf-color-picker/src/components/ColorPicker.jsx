import React from 'react'

const ColorPicker = ({color, handleChangesColor, handleSubmitSaveColor}) => {

  // throw new Error('Error en el componente ColorList');

  return (
    <>
    <div className='border-dashed border-2 border-yellow-600 p-2'>
      <form onSubmit={handleSubmitSaveColor}>
        
        <input type="color" style={{
            width: "100%",
            height: "300px"
          }}
          title='Seleccione un color...'
          value={color}
          onChange={handleChangesColor}
          />

          <div className="grid grid-cols-3 gap-2 items-center m-3">
            <h2 className="">
              <div 
                style={{
                  width: "15px",
                  height: "15px",
                  background: color,
                  display: "inline-block",
                  margin: "0 0.5rem",
                  borderRadius: "100%",
                }}>
              </div>
              {color}
            </h2>

            <button type='submit' className="bg-gray-200 hover:bg-gray-200 text-gray-700 p-3 rounded-md font-bold">
              Guardar color
            </button>
          </div>
      </form>
    </div>
    </>
  )
}

export default ColorPicker