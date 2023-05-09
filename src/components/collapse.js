import React from "react";
import "../style/collapse.css";
import { useState } from "react";
import ArrowUp from "../assets/icons/arrow-up.svg";
import ArrowDown from "../assets/icons/arrow-down.svg";

const Collapse = ({ state, defaultState = false }) => {
  const [toggle, setToggle] = useState(defaultState);

  return (
    <>
      <div className="collapse">
        <div className="collapse-title" onClick={() => setToggle(!toggle)}>
          <h3>{state.title}</h3>
          <img
            className={toggle ? "arrow arrowUp" : "arrow arrowDown"}
            src={!toggle ? ArrowUp : ArrowDown}
            alt="show content"
          />
        </div>
        <div
          className={toggle ? "collapse-content" : "collapse-content-hidden"}
        >
          {state.equipments === undefined ? (
            <p>{state.description}</p>
          ) : (
            <ul>
              {state.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Collapse;
