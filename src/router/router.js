import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Accomodation from "../pages/Accomodation";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/Accomodation/:id" element={<Accomodation />} />
      </Routes>
    </>
  );
};

export default router;
