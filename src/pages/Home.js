import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import Banner from "../components/banner";
import Card from "../components/card";
import Logo from "../assets/icons/kasa-logo.svg";
import data from "../data/logements.json";

const Home = () => {
  return (
    <div className="home-container">
      <Banner props={Logo} />
      <div className="home-card-container">
        <ul>
          {data.map((acc) => {
            return (
              <li key={acc.id}>
                <Link to={{ pathname: "/Accomodation" }}>
                  <Card
                    props={{
                      url: acc.cover,
                      title: acc.title,
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Home;
