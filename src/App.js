import React, { Component } from 'react';
import logo from './static/makeitrain.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="splash">
          <img src={logo} alt="scrilla Logo"/>
        </header>
      </div>
    );
  }
}

export default App;
