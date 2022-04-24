import React from "react";
import "./servicetop.css";

function ServiceTop() {
  return (
    <div className="service_top__container">
      <div className="service_top__container-form_container section__padding">
        <p>Full stack digital marketing</p>
        <h1>Digital Business Services</h1>
      </div>
      <div className="service_top__container-image">
        <img
          height={"100%"}
          width="100%"
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="img"
        />
      </div>
    </div>
  );
}

export default ServiceTop;
