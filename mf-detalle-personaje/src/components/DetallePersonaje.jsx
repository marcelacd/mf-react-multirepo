import React, { useEffect, useState } from "react";

import { useParams, NavLink } from "react-router-dom";

const DetallePersonaje = () => {
  const [personaje, setPersonaje] = useState({});
  const { id } = useParams();

  // throw new Error('Error en el componente DetallePersonaje');

  const getData = async () => {
    const res = await fetch(
      `https://dragonball-api.com/api/characters/${id}`
    );
    const data = await res.json();

    setPersonaje(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-5 m-2 border-dashed border-2 border-green-700">
      <NavLink
        className="bg-gray-200 text-gray-700 p-3 shadow-lg rounded-md font-bold"
        to="/personajes"
      >
        {"<"} Regresar
      </NavLink>

      {/* <div className="float-right">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f87171"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
        </div> */}

      <div className="text-center grid grid-cols-2 gap-3">
        <div>
          <img
            style={{
              maxHeight: "400px",
              margin: "0 auto",
            }}
            src={personaje.image}
            alt={personaje.name}
          />
        </div>
        <div>
          <table className="table-auto border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">Campo</th>
                <th className="border p-2">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border p-2">Nombre</th>
                <td className="border p-2">{personaje.name}</td>
              </tr>
              <tr>
                <th className="border p-2">Role</th>
                <td className="border p-2">{personaje.race}</td>
              </tr>
              <tr>
                <th className="border p-2">Ki</th>
                <td className="border p-2">{personaje.ki}</td>
              </tr>
              <tr>
                <th className="border p-2">Máximo Ki</th>
                <td className="border p-2">{personaje.maxKi}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-left mt-10">
            <strong>Descripción</strong>
            <p>{personaje.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DetallePersonaje;
