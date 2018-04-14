import React, { Component } from 'react';
import axios from 'axios';
import { TextField, Button } from 'material-ui';
import Splash from './Splash';


class App extends Component {
  state = {
    user: null,
  };

  loginSignup = ({ username, password }) => {
    console.log(username, password);
    // make api call
    this.setState({
      user: { id: '123124234234' },
    });
  };

  render() {
    return (
      <div>
        {
          !this.state.user &&
          <Splash
            loginCB={this.loginSignup}
          />
        }{
          this.state.user &&
          <div>
            <div>show the list</div>
            <button >REport and incident</button>
          </div>
        }
      </div>
    );
  }
}

export default App;
