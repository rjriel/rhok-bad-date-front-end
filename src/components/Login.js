import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';
import { TextField, RaisedButton, FlatButton } from 'material-ui';

const buttonStyle = {
  margin: 12,
};

const contactStyle = {
  float: 'left',
  margin: 0,
  marginLeft: 10,
  marginTop: -10,
};

const containerStyles = {
  textAlign: 'center',
};

const logoutStyles = {
  marginBottom: '30px',
};

const errorStyles = {
  color: '#f36868',
  textAlign: 'center',
  marginBottom: '20px',
};

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  renderErrorMessage = () => {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <div style={errorStyles}>{errorMessage}</div>
      );
    }
    return null;
  }

  renderLogOut = () => {
    const { user, logoutCB } = this.props;
    if (!user || !user.id) return null;

    return (
      <div>
        <div style={logoutStyles}>
          {`Hi ${user.username}, you're currently logged in.`}
        </div>
        <div>
          <RaisedButton
            secondary
            onClick={() => logoutCB()}
            style={buttonStyle}
            label="Log Out"
          />
        </div>
      </div>
    );
  }

  renderLogIn = () => {
    const { loginCB, signupCB, user } = this.props;
    if (user && user.id) return null;

    const { username, password } = this.state;
    return (
      <div>
        { this.renderErrorMessage() }
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
          onClick={() => loginCB({ username, password })}
          style={buttonStyle}
          label="Log In"
        />
        <FlatButton
          primary
          onClick={() => signupCB({ username, password })}
          style={buttonStyle}
          label="Sign Up"
        />
        <div style={{ marginTop: 50 }}>
          <p><a href="tel:16135622333"><FontIcon className="material-icons" style={{ float: 'left' }}>phone</FontIcon></a></p>
          <p style={contactStyle}>
            Need counselling support?
            <br />
            Call the Crisis Line.
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={containerStyles}>
        <h1>Ottawa Bad Date List</h1>
        { this.renderLogIn() }
        { this.renderLogOut() }
      </div>
    );
  }
}

Login.defaultProps = {
  loginCB: () => { },
  signupCB: () => {},
  logoutCB: () => {},
  errorMessage: '',
  user: null,
};

Login.propTypes = {
  loginCB: PropTypes.func,
  signupCB: PropTypes.func,
  logoutCB: PropTypes.func,
  errorMessage: PropTypes.string,
  user: PropTypes.objectOf(PropTypes.any),
};

export default Login;
