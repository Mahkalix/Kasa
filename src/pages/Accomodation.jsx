import React, { useEffect } from "react";
import "../style/Accomodation.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slider from "../components/slider";
import dataAccomodation from "../data/logements.json";
import Collapse from "../components/collapse";
import Rating from "../components/rating";

const Accomodation = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const data = dataAccomodation.find((item) => item.id === id);

  useEffect(() => {
    if (!data) {
      console.log("Aucun élément correspondant à l'ID trouvé.");
      navigate("*");
    }
  }, [data, navigate]);

  return (
    <div className="accomodation-container">
      {data ? (
        <>
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
                <Rating />
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
        </>
      ) : (
        <p>No data found for the given ID.</p>
      )}
    </div>
  );
};

export default Accomodation;
