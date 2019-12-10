import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: true,
      data: [],
      color: "black",
      backgroundColor: "white"
    };

    this.getPortfolioItems = this.getPortfolioItems.bind(this);

    this.handleFilter = this.handleFilter.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://cameroncharles.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items,
            isLoading: false
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(function() {});
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 478.47 + 150 + 100) {
      this.setState({
        color: "black",
        backgroundColor: "white"
      });
    } else {
      this.setState({
        color: "white",
        backgroundColor: "black"
      });
    }
  };

  render() {
    return (
      <div className="portfolio-wrapper">
        <div className="btn-wrapper">
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
            style={{
              color: this.state.color,
              backgroundColor: this.state.backgroundColor
            }}
          >
            All
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Front-End")}
            style={{
              color: this.state.color,
              backgroundColor: this.state.backgroundColor
            }}
          >
            Front-End
          </button>

          <button
            className="btn"
            onClick={() => this.handleFilter("Back-End")}
            style={{
              color: this.state.color,
              backgroundColor: this.state.backgroundColor
            }}
          >
            Back-End
          </button>

          <button
            className="btn"
            onClick={() => this.handleFilter("Other")}
            style={{
              color: this.state.color,
              backgroundColor: this.state.backgroundColor
            }}
          >
            Other
          </button>
        </div>

        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
