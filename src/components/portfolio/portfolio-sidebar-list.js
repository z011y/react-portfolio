import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = props => {
  const portfolioList = props.data.map(portfolioItem => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-list-wrapper">
          <div className="portfolio-thumb-img">
            <img src={portfolioItem.thumb_image_url} />
          </div>
          <div className="portfolio-title-wrapper">
            <h2 className="title">{portfolioItem.name}</h2>
            <div className="actions">
              <a
                className="edit-icon"
                onClick={() => props.handleEditClick(portfolioItem)}
              >
                <FontAwesomeIcon icon="edit" />
              </a>
              <a
                className="delete-icon"
                onClick={() => props.handleDeleteClick(portfolioItem)}
              >
                <FontAwesomeIcon icon="times" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="portfolio-item-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
