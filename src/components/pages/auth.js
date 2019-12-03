import React, { Component } from "react";
import Login from "../auth/login.js";
import BackgroundCircle from "../../../static/assets/images/auth/auth-background@4x.png";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }

  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin;
  }

  render() {
    return (
      <div
        className="auth-page-wrapper"
        style={{
          backgroundImage: `url(${BackgroundCircle})`
        }}
      >
        <div className="auth-component-wrapper">
          <Login
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
          />
        </div>
      </div>
    );
  }
}
