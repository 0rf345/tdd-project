import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TestComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <div className="message">
          { this.props.message }
        </div>
        <i>mpla</i>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TestComp />
      </div>
    );
  }
}

export default App;
