import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from 'material-ui';

class Splash extends Component {
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
        <Button
          variant="raised"
          onClick={() => this.props.loginCB({ username, password })}
        >
          Log in/Sign up
        </Button>
      </div>
    );
  }
}
  

Splash.defaultProps = {
  loginCB: () => {},
};

Splash.propTypes = {
  loginCB: PropTypes.func,
};

export default Splash;
