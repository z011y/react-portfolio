import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import withSizes from "react-sizes";

import Login from "../auth/login";

class NavLinks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"right-side " + this.props.navbarScroll}>
        <div className="nav-link-wrapper">
          <NavLink
            onClick={this.props.closeMenu}
            exact
            to="/"
            activeClassName="nav-link-active"
          >
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink
            onClick={this.props.closeMenu}
            to="/about-me"
            activeClassName="nav-link-active"
          >
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink
            onClick={this.props.closeMenu}
            to="/contact"
            activeClassName="nav-link-active"
          >
            Contact
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink
            onClick={this.props.closeMenu}
            to="/blog"
            activeClassName="nav-link-active"
          >
            Blog
          </NavLink>
        </div>

        {this.props.loggedInStatus === "LOGGED_IN"
          ? this.props.dynamicLink("/portfolio-manager", "Portfolio Manager")
          : null}

        {this.props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={this.props.handleSignOut} className="sign-out-icon">
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        ) : null}
      </div>
    );
  }
}

export default NavLinks;
