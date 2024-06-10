# Rock Paper Scissors Game

This is a simple implementation of the classic "Rock, Paper, Scissors" game in JavaScript. The user and the computer each choose between rock, paper, and scissors, and the winner is determined based on the standard rules of the game.

## How to Play

1. The user inputs their choice of "rock", "paper", or "scissors".
2. The computer randomly selects its choice.
3. The winner is determined based on the following rules:
   - Rock beats Scissors
   - Scissors beat Paper
   - Paper beats Rock
   - If both choices are the same, it's a tie

## Code Overview

### Functions

- `getUserChoice(userInput)`: Takes the user's input, converts it to lowercase, and checks if it's a valid choice. If the choice is invalid, it logs an error message.
- `getComputerChoice()`: Randomly selects between "rock", "paper", and "scissors" and returns the computer's choice.
- `determineWinner(userChoice, computerChoice)`: Determines the winner based on the user's and computer's choices and returns the result.

### Main Game Logic

- `playGame()`: The main function that simulates the game. It gets the user's and computer's choices, logs them, and determines the winner.

### Example

To play the game, simply call the `playGame()` function:

```javascript
playGame();
