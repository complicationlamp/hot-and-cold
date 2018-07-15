import React, { Component } from 'react';
// import './GuessInput.css';

class GuessInput extends Component {
	
  render() {
    return (
		//   <p>Enter your guess(to change to input)</p>
		<form id="guess-inout">
			<input type="text"
				onChange={e => this.props.onChange(e.target.value)}
   			/>
			<button id="guess-button">
				Guess
			</button>

		</form>
	);
  }
}

export default GuessInput;
