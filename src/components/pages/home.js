import React from "react";

import PortfolioContainer from "../portfolio/portfolio-container";
import backgroundImg from "../../../static/assets/images/home/cam-profile1.jpg";

export default function() {
  return (
    <div className="home-wrapper">
      <div className="title-wrapper">
        <div className="title">
          <h1>Cameron</h1>
          <h1 className="last-name">Zöllinger</h1>
          <h3>
            a full stack developer with a<br /> <b>design-minded approach</b> to
            development
          </h3>
        </div>
        <div className="profile-img-wrapper">
          <img className="backgroundImg" src={backgroundImg}></img>
        </div>
      </div>

      <div class="hidden-background"></div>
      <div className="skills-title">
        <h1>technical skills</h1>
      </div>

      <PortfolioContainer />
    </div>
  );
}
