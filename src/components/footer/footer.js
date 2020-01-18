import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../../static/assets/images/nav/4x/shield-logo-white.png";

const FooterContainer = props => {
  return (
    <div className="footer-container">
      <div className="social">
        <a
          href="https://github.com/cameron-charles"
          target="blank"
          className="social__github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/cameron-zollinger"
          target="blank"
          className="social__linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.facebook.com/cameron.zollinger"
          target="blank"
          className="social__facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/cameroncharles_/"
          target="blank"
          className="social__instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <img src={logo} />
      <h2>Cameron Zollinger 2019</h2>
    </div>
  );
};

export default FooterContainer;
