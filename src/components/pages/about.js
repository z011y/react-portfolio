import React from "react";

import backgroundImg from "../../../static/assets/images/home/cam-profile1.jpg";

export default function() {
  return (
    <div className="about-page-container">
      <h1 className="title">About Me</h1>
      <div className="about-content-wrapper">
        <div className="about-text-wrapper">
          <div className="about-title-wrapper"></div>
          <p className="about-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sed
            consectetur quod porro ratione, dignissimos ipsum, perferendis dolor
            a libero voluptatem, accusantium quos voluptate voluptatum. Eveniet
            facere fugit dolores vel molestias, a impedit doloribus incidunt,
            earum. Quisquam, dolor ab, optio, repellendus ipsam deleniti,
            inventore a eaque aliquid assumenda dolores sunt!
          </p>
        </div>
        <div className="right-column">
          <div className="profile-img-wrapper">
            {/* <img className="backgroundImg" src={backgroundImg}></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
