import React, { Component } from 'react';
import logo from './static/makeitrain.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="splash">
          <img src={logo} alt="scrilla Logo" className="splash-logo"/>
          <h1>Scrilla</h1>
          <h2>See where your money's going</h2>
          <button class="button start-button">Show me the money</button>
        </header>
      </div>
    );
  }
}

export default App;
