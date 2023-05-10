import React from "react";
import "../style/Accomodation.css";
import Slider from "../components/slider";

const Accomadation = () => {
  return (
  < Slider /> 
  <div className="accomodation-container">
      {data.map((item) => (
        <div key={item.id}>
          {/* <img src={item.pictures[1]} /> */}
          {/* <h2>{item.title}</h2>
          <p>{item.description}</p> */}
        </div>
      ))}
    </div>
  )
};

export default Accomadation;
