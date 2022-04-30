import React from "react";
import "./Customer.css";
import { CustomerData } from "./CustomerData";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Customer() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          border: "1px solid #646464",
          borderRadius: "4px",
          backgroundColor:"#fff"
        }}
      ></div>
    ),
  };
  return (
    <div className="customer__container section__padding">
      <div className=" customer__container__main__section">
        <h1 className="customer__container__main__heading">Happy Customers</h1>
        <h6 className="customer__container__subtitle">
          Amazing layouts for your stunning website
        </h6>
      </div>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
}

export default Customer;
