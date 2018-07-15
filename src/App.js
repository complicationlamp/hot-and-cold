import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HOT or COLD</h1>
          <button onClick="aboutApp()">WHAT?</button>
          <button onClick="resetApp()">+NEW GAME</button>
        </header>
        <div className="guess-box">
          <h2>Hot or cold(tochange)</h2>
          <p>Enter your guess(to change to input)</p>
          <button onClick="">Guess button(nothing hooked to onclick)</button>
          <h3>Guess # <strong>7(to change to counter)!</strong></h3>
          <p>(list previous guesses here)</p>
        </div>
      </div>
    );
  }
}

export default App;
