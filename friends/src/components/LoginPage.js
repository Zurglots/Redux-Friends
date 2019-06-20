import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class LoginPage extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push("/friends");
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.props.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button />
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   error: state.error,
//   loggingIn: state.logginIn
// });

export default connect(
  null,
  { login }
)(LoginPage);
