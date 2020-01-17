import React from "react";
import Typist from "react-typist";

import PortfolioContainer from "../portfolio/portfolio-container";
import backgroundImg from "../../../static/assets/images/home/cam-profile1.jpg";

export default function() {
  return (
    <div className="home-wrapper">
      <div className="title-wrapper">
        <div className="title">
          <div className="name">
            <span>></span>

            <Typist
              cursor={{ element: "_" }}
              avgTypingDelay={100}
              startDelay={500}
            >
              Cameron <br /> Zollinger
            </Typist>
          </div>
          <h3>
            a full stack web developer with a<br />{" "}
            <b>design-minded approach</b> to development
          </h3>
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
