import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faGlobeAsia,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__details__container">
        <div className="contact__details__container__main">
          <div className="empty__div"></div>
          <p className="contact__details__container__subtitle">Get in touch</p>
          <h1 className="contact__details__container__heading">Let's Talk</h1>
        </div>
        <ul>
          <li className="contact__details__container__list">
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>
            <h4 className="title">Address:</h4>
            <address>Raugasse 4, 2700 Wiener Neustadt, Austria</address>
          </li>
          <li className="contact__details__container__list">
            <span>
              <FontAwesomeIcon icon={faMailForward} />
            </span>
            <h4 className="title">Email:</h4>
            <address>argentatheme@colabr.io</address>
          </li>
          <li className="contact__details__container__list">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <h4 className="title">Phone:</h4>
            <address>+43 069 905 670 50, +43 069 905 670 50</address>
          </li>
          <li className="contact__details__container__list">
            <span>
              <FontAwesomeIcon icon={faGlobeAsia} />
            </span>
            <h4 className="title">Website:</h4>
            <address>https://colabr.io/</address>
          </li>
        </ul>
      </div>
      <div className="contact__form__container ">
        <div className="empty__div"></div>
        <p className="contact__details__container__subtitle">Get in touch</p>
        <h1 className="contact__details__container__heading">Say Hello</h1>

        <div className="form__fields">
          <label className="input__label">
            
            <input
              type="text"
              name="your-name"
              size="40"
              aria-required="true"
              aria-invalid="false"
              placeholder="Name*"
            ></input>
          </label>
          <label className="input__label">
            
            <input
              type="text"
              name="your-email"
              size="40"
              aria-required="true"
              aria-invalid="false"
              placeholder="Email*"
            ></input>
          </label>
          <label className="input__label">
            <textarea
              name="your-message"
              cols="40"
              rows="10"
              aria-invalid="false"
              placeholder="Message"
            ></textarea>
          </label>
          <button className="btn btn-outline">
          Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
