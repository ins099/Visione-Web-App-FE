import React from "react";
import { ServiceTop,ServiceMiddle,ServiceBottom } from "../../components";

import "./services.css";

function Services() {
  return (
    <div className="services__container">
      <ServiceTop />
      <ServiceMiddle/>
      <ServiceBottom/>
    </div>
  );
}

export default Services;
