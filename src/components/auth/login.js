import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: ""
    }

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    axios.post("https://api.devcamp.space/sessions",
    {
      client: {
        email: this.state.email,
        password: this.state.password
      }
    },
    { withCredentials: true }
  ).then(response => {
    if (response.data.status === 'created') {
      this.props.handleSuccessfulAuth();
    } else {
      this.setState({
        errorText: "wrong username or password"
      })
      this.props.handleUnsuccessfulAuth();
    }
  }).catch(error => {
    console.log("some error occurred", error);
    this.props.handleUnsuccessfulAuth();
    this.setState({
      errorText: "an error occurred"
    })
  });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    })
  }

  render() {
    return (
      <div className="login-component-wrapper">
        <h1>login to access your dashboard</h1>

        <div className="error-text">{this.state.errorText}</div>

        <form onSubmit={this.handleSubmit}>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="enter email here"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            className="password"
            type="password"
            name="password"
            placeholder="enter password here"
            value={this.state.password}
            onChange={this.handleChange}
          />

        <div>
          <button className="login-btn">login</button>
        </div>
        </form>
      </div>

    );
  }
}
