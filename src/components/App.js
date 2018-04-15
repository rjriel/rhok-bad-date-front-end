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

  setView = (index) => {
    this.setState({
      currentView: index,
    });
  }

  logIn = ({ username, password }) => {
    console.log(username, password);
    // make api call
    this.setState({
      user: { id: '123124234234' },
      currentView: views.LIST,
    });
  };

  signUp = ({ username, password }) => {
    console.log('SIGN UP', username, password);
    // make api call
    axios({
      method: 'POST',
      url: 'https://a7v59dsb4l.execute-api.ca-central-1.amazonaws.com/UAT/register',
      data: { name: username, password },
      headers: {
        'Content-Type': 'application/jpson',
        Host: 'a7v59dsb4l.execute-api.ca-central-1.amazonaws.com',
        Authorization: 'AWS4-HMAC-SHA256 Credential=AKIAJZRMQLOVDPDO7B5Q/20180415/ca-central-1/execute-api/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-date, Signature=c470b67234a9269365f9d89c160e1f6eb26dae018a16b39dc75c2415eaf6f1b2',
      },
      json: true,
    }).then((response) => { console.log('RESPONSE', response.data); });
    // this.setState({
    //   user: { id: '123124234234' },
    //   currentView: views.LIST,
    // });
  };

  renderLogin = () => {
    return (
      <Login
        signupCB={this.signUp}
        loginCB={this.logIn}
      />
    );
  };

  render() {
    const { currentView, user } = this.state;
    return (
      <div style={appStyles} >
        <div style={containerStyles}>
          { currentView === views.HOME &&
            this.renderLogin()
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
