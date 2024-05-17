import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "mf_navbar/Navbar";

import NotFound from "./pages/NotFound";

import "./index.scss";

import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PersonajesPage = lazy(() => import("./pages/PersonajesPage"));
const DetallePersonajePage = lazy(() => import("./pages/DetallePersonajePage"));

const App = () => (
  <div className="pb-5 border-dashed border-2 border-purple-700">
    <BrowserRouter>
      <Navbar />

      <div className="mx-20 mt-10">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/personajes"
            element={
              <Suspense fallback={<Loader />}>
                <PersonajesPage />
              </Suspense>
            }
          />

          <Route
            path="/personajes/:id"
            element={
              <Suspense fallback={<Loader />}>
                <DetallePersonajePage />
              </Suspense>
            }
          />

          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            }
          />

          {/* Manejo de Rutas no agregadas */}
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
