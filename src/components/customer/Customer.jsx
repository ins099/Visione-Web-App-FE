import React from "react";
import "./Customer.css";
import { CustomerData } from "./CustomerData";

function Customer() {
  return (
    <div className="customer__container section__padding">
      <div className=" customer__container__main__section">
        <h1 className="customer__container__main__heading">Happy Customers</h1>
        <h6 className="customer__container__subtitle">
          Amazing layouts for your stunning website
        </h6>
      </div>
      {CustomerData.map((x) => {
        return (
          <div className="customer__container__content__section">
            <blockquote className="customer__container__content__section__blockquote">
              {x.desc}
            </blockquote>
            <div className="customer__container__content__section__testimonials__avatar">
              <img src={x.image} />
            </div>
            <div className="customer__container__content__section__testimonials__content">
              <h4 className="customer__container__content__section__testimonials__content__title">
                {x.title}
              </h4>
              <p className="customer__container__content__section__testimonials__content__subtitle">
                {x.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Customer;
