import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import withSizes from "react-sizes";

import Login from "../auth/login";
import NavLinks from "./nav-links";

import logo from "../../../static/assets/images/nav/4x/shield-logo.png";

class NavigationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarScroll: "",
      isMobile: false,
      screenWidth: null,
      menuClicked: false
    };

    this.dynamicLink = this.dynamicLink.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
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

  closeMenu() {
    this.setState({
      menuClicked: false
    });
  }

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
          this.props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch(error => {
        console.log("Error signing out", error);
      });
  }

  handleClick() {
    this.setState({
      menuClicked: !this.state.menuClicked
    });
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <Link to="/" className="logo-wrapper">
            <img src={logo} />
          </Link>
        </div>
        {this.props.isMobile === false ? (
          <NavLinks
            navbarScroll={this.navbarScroll}
            loggedInStatus={this.props.loggedInStatus}
            dynamicLink={this.dynamicLink}
            handleSignOut={this.handleSignOut}
            closeMenu={this.closeMenu}
          />
        ) : (
          <div className="navigation-mobile">
            <div className="menu">
              <HamburgerMenu
                isOpen={this.state.menuClicked}
                menuClicked={this.handleClick.bind(this)}
                strokeWidth={8}
                borderRadius={10}
              />
            </div>

            {this.state.menuClicked === true ? (
              <NavLinks
                navbarScroll={this.navbarScroll}
                loggedInStatus={this.props.loggedInStatus}
                dynamicLink={this.dynamicLink}
                handleSignOut={this.handleSignOut}
                closeMenu={this.closeMenu}
              />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 880
});

export default withSizes(mapSizesToProps)(NavigationContainer);
