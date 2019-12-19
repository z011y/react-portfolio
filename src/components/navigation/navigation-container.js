import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import logo from "../../../static/assets/images/nav/cam-logo@4x.png";

export default class NavigationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarScroll: "",
      hamburgerIcon: false,
      hamburgerIsOpen: false
    };

    const hamburgerMenu = window.matchMedia("max-width: 880px");

    console.log(hamburgerMenu);

    hamburgerMenu.addListener(this.checkForMobile);

    this.dynamicLink = this.dynamicLink.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.checkForMobile = this.checkForMobile.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillMount() {
    this.checkForMobile();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  dynamicLink(route, linkText) {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  }

  checkForMobile = () => {
    this.setState({
      hamburgerIcon: true
    });
  };

  onScroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      this.setState({
        navbarScroll: "navbarScroll"
      });
    } else {
      this.setState({
        navbarScroll: ""
      });
    }
  };

  handleSignOut() {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch(error => {
        console.log("Error signing out", error);
      });
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="logo-wrapper">
            <img src={logo} />
          </div>
        </div>

        <div className={"right-side " + this.state.navbarScroll}>
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/about-me" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </div>

          {this.props.loggedInStatus === "LOGGED_IN"
            ? dynamicLink("/portfolio-manager", "Portfolio Manager")
            : null}

          {this.props.loggedInStatus === "LOGGED_IN" ? (
            <a onClick={handleSignOut} className="sign-out-icon">
              <FontAwesomeIcon icon="sign-out-alt" />
            </a>
          ) : null}
        </div>
      </div>
    );
  }
}

// export default withRouter(NavigationContainer);
