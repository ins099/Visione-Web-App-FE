import React from "react";
import "./ServiceBottom.css";
import ServiceCard from "../servicecard/ServiceCard";

function ServiceBottom() {
  return (
    <div className="service_bottom__container">
      <div className="service_bottom__container_image">
        <img
          width="100%"
          src="https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/10/Banner_image23-min.jpg"
          alt="img"
        />
      </div>
      <div className="service_bottom__container_form_container">
        <ServiceCard number="1" heading="Digital Marketing" subtitle="Outstanding ideas" desc="Work with Argenta to dolor sit amet, nostrud adipisicing elit, sed do eiusmod tempor incididunt." img="https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/f_icon3-min.png" />
        <ServiceCard number="2" heading="Experience Design" subtitle="Focus on the user" desc="Work with Argenta to dolor sit amet, nostrud adipisicing elit, sed do eiusmod tempor incididunt." img="https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/f_icon1-min.png" />
        <ServiceCard  number="3"heading="Business Services" subtitle="High performance" desc="Work with Argenta to dolor sit amet, nostrud adipisicing elit, sed do eiusmod tempor incididunt."  img="https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/f_icon4-min.png"/>
        <ServiceCard  number="4" heading="A/B Testing" subtitle="Best solutions" desc="Work with Argenta to dolor sit amet, nostrud adipisicing elit, sed do eiusmod tempor incididunt."  img="https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/f_icon2-min.png"/>
      </div>
    </div>
  );
}

export default ServiceBottom;
