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
      count:0,
      randomNum: this.randomNumFunc(),
      result:''
    }
    this.setGuess=this.setGuess.bind(this)
    this.onSubmitGuess=this.onSubmitGuess.bind(this)
    this.newGame=this.newGame.bind(this)
  }

  newGame(){
    this.setState({
      currentGuess:"",
      guesses:[],
      count:0,
      randomNum: this.randomNumFunc(),
      result:''
    })
  }

randomNumFunc() {
  const targetNumber = Math.floor(Math.random() * (100 - 0) + 0);
  console.log(targetNumber)
  return targetNumber
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
    guesses: this.state.guesses.concat([this.state.currentGuess]),
    result:this.compareRanNum(this.state.randomNum, this.state.currentGuess)
  })
  }

  compareRanNum(randomNum, currentGuess) {
    if (currentGuess == randomNum){
      return "THATS THE RIGHT NUMBER"
    }
    else if (currentGuess >randomNum+10 || currentGuess < randomNum-10) {
      return 'COLD'
    }
    return 'HOT'; 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HOT or COLD</h1>
          <button onClick={() => console.log("what")}>WHAT?</button>
          <button onClick={() => this.newGame()}>+NEW GAME</button>
        </header>
        <div className="guess-box">
          <h2>{this.state.result}</h2>
          <GuessInput
            value={this.state.currentGuess}
            onChange={this.setGuess}
            onUpdate={this.onSubmitGuess}
          />
          <h3>Guess # <strong>{this.state.count}</strong></h3>
          <p>{
            this.state.guesses.map(number => {
              return number + " "
            })
            }</p>
        </div>
      </div>
    );
  }
}

export default App;
