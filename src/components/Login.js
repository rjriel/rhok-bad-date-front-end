import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, RaisedButton } from 'material-ui';

const buttonStyle = {
  margin: 12,
};

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>Ottawa Bad Date List</h1>
        <div>
          <TextField
            id="username"
            value={this.state.username}
            onChange={(event) => { this.setState({ username: event.target.value }); }}
            placeholder="Enter you username"
          />
        </div>
        <div>
          <TextField
            id="password"
            placeholder="Enter your password"
            type="password"
            value={this.state.password}
            onChange={(event) => { this.setState({ password: event.target.value }); }}
          />
        </div>
        <RaisedButton
          primary
          onClick={() => this.props.loginCB({ username, password })}
          style={buttonStyle}
          label="Log in/Sign up"
        />
      </div>
    );
  }
}

Login.defaultProps = {
  loginCB: () => {},
};

Login.propTypes = {
  loginCB: PropTypes.func,
};

export default Login;
