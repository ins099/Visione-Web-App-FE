import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project__container  section__padding">
      <div className=" project__container__main__section">
      <h1 className="project__container__main__heading">Recent Projects </h1>
      <h6 className="project__container__subtitle" >Flexible WordPress theme for your business </h6>
      </div>
    <div className="grid-container">
      <div className="item1">
        <img
          width="100%"
          src="	https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/arg_portfolio_img12.0-min.jpg"
          alt="img"
        />
        <h6>Wooden Chair Design</h6>
        <p>Design</p>
      </div>
      <div className="item2">
        <img
          width="100%"
          src="	https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/arg_portfolio_img1.0-min.jpg"
          alt="img"
        />
        <h6>Ceramic Bottle Design</h6>
        <p>Design</p>
      </div>
      <div className="item3">
        <img
          width="100%"
          src="	https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/arg_portfolio_img2.0-min.jpg"
          alt="img"
        />
        <h6>Gentleman Barber Logo</h6>
        <p>Artwork</p>
      </div>
      <div className="item4">
        <img
          width="100%"
          src="	https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/11/arg_portfolio_img8.0-min.jpg"
          alt="img"
        />
        <h6>Coffee To Go Cup</h6>
        <p> Package</p>
      </div>
    </div>
    </div>
  );
}

export default Project;
