import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__section">
      © {(new Date().getFullYear())}, Argenta Theme by 
      <a
        className="footer__section__a"
        href="https://clbthemes.com/"
        target="_blank"
      >
         Colabrio
      </a>
      . All rights reserved.
    </div>
  );
}

export default Footer;
