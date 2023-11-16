import React, { useState } from "react";
import "../style/slider.css";
import arrowLeft from "../assets/icons/arrow-left.svg";
import arrowRight from "../assets/icons/arrow-right.svg";

const Slider = (images) => {
  const [counter, setCounter] = useState(0);
  const pictures = images.images;
  const slideLength = pictures.length;

  let actualImage;
  actualImage = pictures[counter];

  const slideLeft = () => {
    setCounter((counter - 1 + slideLength) % slideLength);
  };

  const slideRight = () => {
    setCounter((counter + 1) % slideLength);
  };

  // console.log(counter);

  return (
    <div className="slider-container">
      <img className="slider-img" src={actualImage} alt="chambre d'un hôte" />
      <div className="sup-container">
        <img
          onClick={slideLeft}
          className="arrow arrow-left"
          src={arrowLeft}
          alt="arrow left"
        />
        <p className="counter">
          {counter + 1}/{slideLength}
        </p>
        <img
          onClick={slideRight}
          className="arrow arrow-right"
          src={arrowRight}
          alt="arrow right"
        />
      </div>
    </div>
  );
};

export default Slider;
