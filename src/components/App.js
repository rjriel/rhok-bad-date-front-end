import React, { Component } from 'react';
import axios from 'axios';


import Login from './Login';
import List from './List';
import Resources from './Resources';
import Create from './Create';
import BottomNav from './BottomNav';

import { views } from './helpers';
import * as imageUrl from '../images/Background.jpg';

const appStyles = {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  background: `linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.8)
  ), url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
  backgroundPosition: 'center center',
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
};

class App extends Component {
  state = {
    currentView: views.HOME,
    errorMessage: '',
    user: null,
  };

  componentDidMount() {
    // Detects if device is on iOS
    // const isIos = () => {
    //   const userAgent = window.navigator.userAgent.toLowerCase();
    //   return /iphone|ipad|ipod/.test(userAgent);
    // };
    // // Detects if device is in standalone mode
    // const isInStandaloneMode = () =>
    //    ('standalone' in window.navigator) && (window.navigator.standalone);

    // Checks if should display install popup notification:
    // if (isIos() && !isInStandaloneMode()) {
    //   console.log('I\'m an iphone');
    //   this.setState({ showInstallMessage: true });
    // }
  }

  setView = (index) => {
    this.setState({
      currentView: index,
    });
  }

  clearErrorMessage = () => {
    this.setState({
      errorMessage: '',
    });
  }

  logIn = ({ username, password }) => {
    this.clearErrorMessage();
    console.log('LOG IN', username, password);
    // make api call

    return axios.post(
      'https://a7v59dsb4l.execute-api.ca-central-1.amazonaws.com/UAT/login',
      { name: username, password },
    ).then(({ data }) => {
      this.setState({
        user: {
          username,
          id: data,
        },
        errorMessage: !data ? 'Invalid username and password' : '',
      });
    });
  };

  signUp = ({ username, password }) => {
    this.clearErrorMessage();
    // make api call
    return axios.post(
      'https://a7v59dsb4l.execute-api.ca-central-1.amazonaws.com/UAT/register',
      { name: username, password },
    ).then(({ data: { success, message } }) => {
      if (success) {
        return this.logIn({ username, password });
      }
      this.setState({
        errorMessage: message,
      });

      return null;
    }).catch(error => console.error('CATCH', error));
  };

  logout = () => {
    this.setState({
      user: null,
    });
  }

  renderLogin = () => {
    const { user, errorMessage } = this.state;
    return (
      <Login
        user={user}
        errorMessage={errorMessage}
        signupCB={this.signUp}
        loginCB={this.logIn}
        logoutCB={this.logout}
      />
    );
  };

  render() {
    const { currentView, user } = this.state;

    return (
      <div style={appStyles}>
        <div style={containerStyles}>
          { currentView === views.HOME &&
            this.renderLogin()
          }
          { currentView === views.CREATE && <Create user={user} /> }
          { currentView === views.LIST && <List user={user} /> }
          { currentView === views.RESOURCES && <Resources />}
        </div>
        <BottomNav currentView={currentView} viewSelector={this.setView} loggedIn={!!user} />
      </div>
    );
  }
}

export default App;
