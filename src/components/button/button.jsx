import React from "react";
import "./Button.css";

function Button({ name, clicked,clickHandler }) {
  return (
    <button
      onClick={clickHandler}
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
