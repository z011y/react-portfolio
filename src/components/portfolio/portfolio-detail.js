import React, { Component } from "react";

import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItem: {}
    };
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://cameroncharles.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const {
      name,
      description,
      url,
      category,
      thumb_image_url,
      logo_url
    } = this.state.portfolioItem;
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
}
