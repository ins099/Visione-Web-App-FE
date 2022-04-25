import React from "react";
import "./button.css";

function Button({ name, clicked }) {
  return (
    <button
      className={
        clicked
          ? "service_top__container__clicked_button"
          : "service_top__container__button"
      }
    >
      {name}
    </button>
  );
}

export default Button;
