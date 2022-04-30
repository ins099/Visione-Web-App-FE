import React, { useState } from "react";
import "./ServiceTop.css";
import Button from "../button/Button";
import { ServiceData } from "./serviceData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function ServiceTop() {
  const [content, setContent] = useState(ServiceData[0]);
  console.log("content", content);
  return (
    <div className="service_top__container">
      <div className="service_top__container_form_container section__padding">
        <p className="service_top__container_subtitle">
          Full stack digital marketing
        </p>
        <h1 className="service_top__container_main__heading">
          Digital Business Services
        </h1>
        <Button
          name="CONTENT MARKETING"
          onClick={() => setContent(ServiceData[0])}
          clicked="true"
        />
        <Button
          name="DEVELOP & DEPLOY"
          onClick={() => setContent(ServiceData[1])}
        />
        <Button
          name="VIRAL CAMPAIGNS"
          onClick={() => setContent(ServiceData[2])}
        />
        <p className="service_top__container_content">{content?.desc}</p>
        <div className="service_top__container_video">
          <div className="service_top__container_video_play_icon">
            <div className="service_top__container_video_play_icon_circle">
            <FontAwesomeIcon icon={faPlay} />
            </div>

          </div>
          <div className="service_top__container_video_play_content">
            <h6>Watch The Guideline</h6>
            <p>Press button to play the video</p>
          </div>
        </div>
      </div>
      <div className="service_top__container_image">
        <img
          width="100%"
          src="	https://argenta.clbthemes.com/demo_01/wp-content/uploads/2016/10/Banner_image27-min.jpg"
          alt="img"
        />
      </div>
    </div>
  );
}

export default ServiceTop;
