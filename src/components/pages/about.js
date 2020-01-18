import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import backgroundImg from "../../../static/assets/images/home/cam-profile1.jpg";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="about-page-container">
        <h1 className="about-title">About Me</h1>
        <div className="about-content-wrapper">
          <div className="about-text-wrapper">
            <div className="links-wrapper">
              <div className="github-wrapper">
                <FontAwesomeIcon icon={faGithub} />
                <a
                  className="git-hub"
                  href="https://github.com/cameron-charles"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
              <div className="linkedin-wrapper">
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  className="linked-in"
                  href="https://www.linkedin.com/in/cameron-zollinger"
                  target="blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <h3>
              Graduate of{" "}
              <a href="https://bottega.tech" target="blank">
                Bottega Code School
              </a>
            </h3>
            <h2>Bio</h2>
            <p>
              Hi, I'm Cameron Zollinger, a full stack web developer. I'm
              passionate about great code and minimalist design. I love to
              create, and web development gives me the freedom to create
              anything I want. My technology stack of choice is React and
              Python, but I'm a quick learner and I'm excited to continue
              expanding my knowledge.
            </p>
            <h2>Projects</h2>
            <div className="projects-wrapper">
              <div className="projects-wrapper__links">
                <div className="projects-wrapper__links-wrapper">
                  <a href="/">Bird Ponchos</a>
                </div>
                <div className="projects-wrapper__links-wrapper">
                  <a href="/">Beetle</a>
                </div>
                <div className="projects-wrapper__links-wrapper">
                  <a
                    href="https://www.pittsburgseafoodandmusicfestival.com/"
                    target="blank"
                  >
                    Pittsburg Seafood Festival
                  </a>
                </div>
              </div>
              <div className="projects-wrapper__info">
                <p>Ecommerce Site</p>
                <p>Python Web Crawler</p>
                <p>Event Site</p>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="profile-img-wrapper">
              <img className="backgroundImg" src={backgroundImg}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
