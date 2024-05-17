import React from "react";

import { NavLink } from "react-router-dom";

const activeClass = (isActive) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive
    ? "bg-gray-900 text-white"
    : "text-gray-300 hover:bg-gray-700 hover:text-white"
  }`;

const Navbar = () => {
  return (
    <>
      <nav className="border-dashed border-2 border-red-700 bg-gray-800 sticky -top-0 z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <NavLink to="/" className="text-lg text-gray-300">
                  DB App
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) => activeClass(isActive)}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/personajes"
                    className={({ isActive }) => activeClass(isActive)}
                  >
                    Personajes
                  </NavLink>

                  <NavLink
                    to="/about"
                    className={({ isActive }) => activeClass(isActive)}
                  >
                    About
                  </NavLink>
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <span className="relative rounded-full bg-gray-800 p-1 text-gray-400 ">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f87171"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
              </span>
            </div> */}
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink to="/" className={({ isActive }) => activeClass(isActive)}>
              Home
            </NavLink>

            <NavLink
              to="/personajes"
              className={({ isActive }) => activeClass(isActive)}
            >
              Personajes
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => activeClass(isActive)}
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
