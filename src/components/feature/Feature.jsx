import React from "react";
import "./feature.css";

const Feature = ({ title, number ,text }) => (
  <div className="visione__features-container__feature">
    <div className="visione__features-container__feature-subcontainer">
      <div className="visione__features-container__feature-title">
        <h1 id="visione__features-container__feature-number">0{number}.</h1>
        <h1>{title}</h1>
      </div>
      <div className="visione__features-container_feature-text">
        <p>{text}</p>
      </div>
      <div className="visione__features-container_feature-button">
        <button>FIND MORE</button>
      </div>
    </div>
  </div>
);

export default Feature;
