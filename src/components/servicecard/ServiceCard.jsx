import React from "react";
import "./ServiceCard.css";

function ServiceCard({ number, heading, subtitle, desc, img }) {
  return (
    <div
      className={
        number == 1
          ? "service_card_container one"
          : number == 2
          ? "service_card_container two"
          : number == 3
          ? "service_card_container three"
          : number == 4
          ? "service_card_container four"
          : "service_card_container "
      }
    >
      <div className="service_card_container_icon_box_image_container">
        <img src={img} alt="image"></img>
      </div>
      <div className="service_card_container_icon_box_wrap_container">
        <h1>{heading}</h1>
        <h6>{subtitle}</h6>
      </div>
      <p>{desc}</p>
    </div>
  );
}
export default ServiceCard;
