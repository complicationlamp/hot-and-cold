import React, { Component } from 'react';
// import './GuessInput.css';

class GuessInput extends Component {
	
  render() {
    return (
		//   <p>Enter your guess(to change to input)</p>
		// <form id="guess-inout">
		<div>
			<input type="text"
				onChange={e => this.props.onChange(e.target.value)}
				value={this.props.value}
   			/>
			<button id="guess-button" onClick={() => this.props.onUpdate()}>
				Guess
			</button>
		</div>
		// {/* </form> */}
	);
  }
}

export default GuessInput;
