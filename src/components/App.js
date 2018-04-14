import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
import List from './List';
import Resources from './Resources';

const views = {
  LIST: 'LIST',
  CREATE: 'CREATE',
  RESOURCES: 'RESOURCES',
  LOGIN: 'LOGIN',
};

class App extends Component {
  state = {
    currentView: views.LOGIN,
    user: null,
  };

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
      <div>
        { currentView === views.LIST && <List user={user} /> }
        { currentView === views.LOGIN &&
          <Login
            loginCB={this.loginSignup}
          />
        }
        { currentView === views.RESOURCES && <Resources />}
      </div>
    );
  }
}

export default App;
