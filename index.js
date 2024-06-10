const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Invalid choice');
    }
  }
  
  function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3)
      if (randomNum === 0) {
      return 'rock';
      } else if (randomNum === 1) {
        return 'paper';
      } else {
        return 'scissors';
      }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'tie'
    } if (userChoice === 'rock') {
        if (computerChoice = 'paper') {
          return 'Computer wins';
      } else {
        return 'User wins';
      }
    } if (userChoice === 'paper') {
        if (computerChoice = 'scissors') {
          return 'computer wins';
        } else { 
          return 'User wins';
        }
    } if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Computer wins'
        } else {
            return 'User wins'
        }
    }
  } 
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: '+ userChoice);
    console.log('The computer threw '+ computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();

  
  