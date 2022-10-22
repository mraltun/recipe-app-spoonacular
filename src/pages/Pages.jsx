import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cuisine/:type' element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
