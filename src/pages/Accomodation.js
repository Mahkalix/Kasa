import React, { useEffect } from "react";
import "../style/Accomodation.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slider from "../components/slider";
import dataAccomodation from "../data/logements.json";
import Collapse from "../components/collapse";
import starsEmpty from "../assets/icons/star-empty.svg";
import starFull from "../assets/icons/star-full.svg";

const Accomodation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = dataAccomodation.find((item) => item.id === id);

  useEffect(() => {
    if (!data) {
      navigate("/error");
    }
  }, [data, navigate]);

  if (!data) {
    return null; // Optionnel : Afficher une vue de chargement ou un message d'erreur temporaire pendant la vérification des données
  }

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
    <div className="accomodation-container">
      <Slider images={data.pictures} />

      <div className="infos-container">
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

          <div className="user">
            <div className="accomodation-host">
              <p>{data.host.name}</p>
              <img
                src={data.host.picture}
                alt={"photo de profil de " + data.host.name}
              />
            </div>

            <div className="accomodation-stars">
              <div className=" filled-star-container "> {stars}</div>
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
          </div>

          <div className="collapse-container">
            <div className="collapse-description">
              {dataAccomodation[0] && (
                <Collapse
                  state={{
                    title: "Description",
                    description: dataAccomodation[0].description,
                  }}
                />
              )}
            </div>

            <div className="collapse-equipment">
              {dataAccomodation[0] && (
                <Collapse
                  state={{
                    title: "Equipments",
                    equipments: dataAccomodation[0].equipments,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
