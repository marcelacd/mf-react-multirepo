import React from "react";

import { Error } from "../components/Error";
import Counter from "mf_counter/Counter";


const AboutPage = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-lg mb-5">Counter MF</h1>
      <Error>
        <Counter />
      </Error>
    </div>
    // initialCounter={8}
  )
};

export default AboutPage;
