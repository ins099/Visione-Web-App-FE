import React from "react";
import "./Customer.css";

function Customer() {
  return (
    <div className="customer__container section__padding">
      <div className=" customer__container__main__section">
        <h1 className="customer__container__main__heading">Happy Customers</h1>
        <h6 className="customer__container__subtitle">
          Amazing layouts for your stunning website
        </h6>
      </div>
      <div className="customer__container__content__section">
        <blockquote className="customer__container__content__section__blockquote">
          Fingerstache microdosing kickstarter porro quisquam est, qui Dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut Labore.
        </blockquote>
        <div className="customer__container__content__section__testimonials__avatar">
            <img src="https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/arg_demo_avatar4-min.png"/>
        </div>
        <div className="customer__container__content__section__testimonials__content">
            <h4 className="customer__container__content__section__testimonials__content__title">- Saga Norén</h4>
            <p className="customer__container__content__section__testimonials__content__subtitle">Web Designer</p>
        </div>
      </div>
    </div>
  );
}

export default Customer;
