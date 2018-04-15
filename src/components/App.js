import React, { Component } from 'react';
import axios from 'axios';


import Login from './Login';
import List from './List';
import Resources from './Resources';
import Create from './Create';
import BottomNav from './BottomNav';

import { views } from './helpers';


const appStyles = {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'colum',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
};

class App extends Component {
  state = {
    currentView: views.HOME,
    user: null,
  };

  componentDidMount() {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      console.log('I\'m an iphone');
      this.setState({ showInstallMessage: true });
    }
  }

  setView = (index) => {
    this.setState({
      currentView: index,
    });
  }

  loginSignup = ({ username, password }) => {
    console.log(username, password);
    // make api call
    this.setState({
      user: { id: '123124234234' },
      currentView: views.LIST,
    });
  };

  render() {
    const { currentView, user } = this.state;
    return (
      <div style={appStyles} >
        <div style={containerStyles}>
          { currentView === views.HOME &&
            <Login
              loginCB={this.loginSignup}
            />
          }
          { currentView === views.CREATE && <Create /> }
          { currentView === views.LIST && <List user={user} /> }
          { currentView === views.RESOURCES && <Resources />}
        </div>
        <BottomNav currentView={currentView} viewSelector={this.setView} />
      </div>
    );
  }
}

export default App;
