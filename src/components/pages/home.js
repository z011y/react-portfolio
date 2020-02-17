import React, { Component } from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";

import PortfolioContainer from "../portfolio/portfolio-container";
import backgroundImg from "../../../static/assets/images/home/cam-profile1.jpg";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="home-wrapper">
        <div className="title-wrapper">
          <div className="title">
            <div className="name">
              <div className="dots-wrapper">
                <div className="red-dot"></div>
                <div className="yellow-dot"></div>
                <div className="green-dot"></div>
              </div>
              <div className="name-text">
                <span>></span>

                <Typist
                  cursor={{ element: "_" }}
                  avgTypingDelay={100}
                  startDelay={500}
                >
                  Cameron <br /> Zollinger
                </Typist>
              </div>
            </div>
            <h3>
              a full stack web developer with a<br />{" "}
              <b>design-minded approach</b> to development
            </h3>
          </div>
          <div className="learn-more">
            <h3>learn more about me</h3>
            <Link to="/about-me">About</Link>
            <div className="green-background"></div>
          </div>
        </div>

        <div className="hidden-background"></div>
        <div className="skills-title">
          <h1>technical skills</h1>
        </div>

        <PortfolioContainer />
      </div>
    );
  }
}
