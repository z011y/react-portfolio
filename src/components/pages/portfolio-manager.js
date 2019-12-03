import React, { Component } from "react";
import axios from "axios";

import PortfolioForm from "../portfolio/portfolio-form";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
      portfolioToEdit: {}
    };

    this.getPortfolioItems = this.getPortfolioItems.bind(this);

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);

    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
  }

  getPortfolioItems() {
    axios
      .get(
        "https://cameroncharles.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc"
      )
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  portfolioItems() {
    return this.state.portfolioItems.map(item => {
      return <PortfolioSidebarList key={item.id} item={item} />;
    });
  }

  handleNewFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
    });
  }

  handleEditFormSubmission() {
    this.getPortfolioItems();
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError", error);
  }

  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id !== portfolioItem.id;
          })
        });

        return response.data;
      })
      .catch(error => {
        console.log("handleDeleteClick error", error);
      });
  }

  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem
    });
  }

  clearPortfolioToEdit() {
    this.setState({
      portfolioToEdit: {}
    });
  }

  render() {
    return (
      <div className="page-container">
        <div className="page-wrapper">
          <PortfolioForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}
          />
          <div className="data-list">
            <PortfolioSidebarList
              handleDeleteClick={this.handleDeleteClick}
              data={this.state.portfolioItems}
              handleEditClick={this.handleEditClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
