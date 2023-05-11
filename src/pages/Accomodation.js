import React from "react";
import "../style/Accomodation.css";
import { useParams } from "react-router-dom";
import Slider from "../components/slider";
import dataAccomodation from "../data/logements.json";
import Collapse from "../components/collapse";
import starsEmpty from "../assets/icons/star-empty.svg";
import starFull from "../assets/icons/star-full.svg";

const Accomodation = () => {
  const params = useParams();
  const id = params.id;
  const data = dataAccomodation.find((item) => item.id === id);
  console.log(data);

  return (
    <div className="accomodation-container">
      <Slider images={data.pictures} />

      <div className="accomodation">
        <div className="accomodation-header">
          <h1 className="accomodation-title">{data.title}</h1>
          <h2 className="accomodation-location">{data.location}</h2>
        </div>
      </div>
      <div className="accomodation-tags-stars">
        <ul className="tags">
          {data.tags.map((tag, index) => (
            <li className="accomodation-tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>

        <div className="acc-stars-host">
          <div className="accomodation-stars">
            <div className=" filled-star-container ">
              <img src={starFull} />
            </div>
            <div className=" empty-star-container">
              <img
                src={starsEmpty}
                alt="pas de note"
                className="star empty-star"
              />
              <img
                src={starsEmpty}
                alt="pas de note"
                className="star empty-star"
              />
              <img
                src={starsEmpty}
                alt="pas de note"
                className="star empty-star"
              />
              <img
                src={starsEmpty}
                alt="pas de note"
                className="star empty-star"
              />
              <img
                src={starsEmpty}
                alt="pas de note"
                className="star empty-star"
              />
            </div>
          </div>

          <div className="accomodation-host">
            <p>{data.host.name}</p>
            <img
              src={data.host.picture}
              alt={"photo de profil de " + data.host.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
