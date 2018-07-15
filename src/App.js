import React, { Component } from 'react';
import './App.css';
import GuessInput from './GuessInput';

class App extends Component {
//state stuff
  constructor(props) {
    super(props);

    this.state={
      currentGuess:"",
      guesses:[],
      count:0
    }
  }

  setGuess(currentGuess) {
    this.setState({
      currentGuess
    });
  }

  onSubmitGuess() {
    //clears input, updates count, adds guess to array of guesses
  this.setState({
    currentGuess: "",
    count:this.state.count +1,
    guesses: this.state.guesses.push(this.state.currentGuess) 
  })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HOT or COLD</h1>
          <button onClick={() => console.log("what")}>WHAT?</button>
          <button onClick={() => console.log("new game")}>+NEW GAME</button>
        </header>
        <div className="guess-box">
          <h2>Hot or cold(tochange)</h2>
          <GuessInput/>
          <h3>Guess # <strong>7(to change to counter)!</strong></h3>
          <p>(list previous guesses here)</p>
        </div>
      </div>
    );
  }
}

export default App;
