import React from "react";
import "../style/banner.css";
import Cliff from "../assets/images/Cliff.svg";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  return (
    <div
      className="home-banner"
      style={location.pathname === "/a-propos" ? { height: "211px" } : {}}
    >
      <img src={Cliff} alt="banner kasa" />
      {(location.pathname === "/" || location.pathname === "/Kasa") && (
        <h1>
          Chez vous,
          <span className="line-break"></span> partout et ailleurs
        </h1>
      )}
    </div>
  );
};

export default Banner;
