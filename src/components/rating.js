import React from "react";
import starsEmpty from "../assets/icons/star-empty.svg";
import { useParams } from "react-router-dom";
import starFull from "../assets/icons/star-full.svg";
import dataAccomodation from "../data/logements.json";

const Rating = () => {
  const { id } = useParams();
  const data = dataAccomodation.find((item) => item.id === id);

  const numberStars = parseInt(data.rating);
  const stars = [];

  for (let i = 0; i < numberStars; i++) {
    stars.push(
      <img
        src={starFull}
        alt="note sur 5"
        key={i}
        className="star filled-star"
      />
    );
  }
  return (
    <div className="accomodation-stars">
      <div className=" empty-star-container">
        <img src={starsEmpty} alt="pas de note" className="star empty-star" />
        <img src={starsEmpty} alt="pas de note" className="star empty-star" />
        <img src={starsEmpty} alt="pas de note" className="star empty-star" />
        <img src={starsEmpty} alt="pas de note" className="star empty-star" />
        <img src={starsEmpty} alt="pas de note" className="star empty-star" />
      </div>
      <div className=" filled-star-container "> {stars}</div>
    </div>
  );
};
export default Rating;
