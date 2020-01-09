import React, { Component } from 'react';
import './App.css';
import Instructions from './Instructions.js'

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: '[Your Name Here]'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>React Practice: Base Syntax</h1>
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Ray" />
        <Instructions/>
      </div>
    );
  }
}

export default App;
