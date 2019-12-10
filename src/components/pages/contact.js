import React from "react";
import BackgroundCircle from "../../../static/assets/images/auth/auth-background@4x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div
      className="contact-page-wrapper"
      style={{
        backgroundImage: `url(${BackgroundCircle})`
      }}
    >
      <div className="contact-modal-wrapper">
        <div className="phone">
          <FontAwesomeIcon icon="mobile" />
          <div className="phone-number">541-953-0737</div>
        </div>
        <div className="email">
          <FontAwesomeIcon icon="envelope" />
          <div className="email-address">cameron.ntc@gmail.com</div>
        </div>
        <div className="address">
          <FontAwesomeIcon icon="globe-americas" />
          <div className="physical-address">Provo, UT</div>
        </div>
      </div>
    </div>
  );
}
