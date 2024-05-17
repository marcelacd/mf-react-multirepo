import React from 'react'
import Swal from "sweetalert2"

const ColorList = ({ colorsList = [], handleSubmitClearColors, obj }) => {

    // throw new Error('Error en el componente ColorList');

    const handleCopyColor = (color) => {
        navigator.clipboard.writeText(color)

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Color: ${color} Copied`,
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true
        })
    }

    return (
        <div className='border-dashed border-2 border-green-500 p-2'>

            {colorsList.length ?
                (
                    <>
                        <button className='mb-5 px-3 py-2 bg-gray-200 rounded font-bold' 
                            onClick={() => handleSubmitClearColors()}>
                            Clear colors
                        </button>
                        <div className='grid grid-cols-1 gap-2 text-white'>
                            {colorsList.map((color, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    className='p-2 rounded'
                                    aria-current="true"
                                    title='Copiar'
                                    style={{
                                        background: color,
                                        fontWeight: "bolder"
                                    }}
                                    onClick={() => handleCopyColor(color)}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </>
                ) :
                (
                    <div className="bg-red-300 p-5 rounded text-white">
                        <hb>Sin elementos por mostrar....</hb>
                    </div>
                )}
        </div>
    )
}

export default ColorList