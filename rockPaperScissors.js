// function that allows user to choose rock, paper, or scissors when game starts. lower case built in function makes all user inputs lowercase. if / else statement checks to make sure user input is either below strings, bomb for secret cheat code (only user capability), otherwise an error is printed.

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error.');
  }
};

/* TEST
getUserChoice ('rock');
console.log(getUserChoice('Rock')); // prints 'rock'
console.log(getUserChoice('turtle')); // prints 'Error.' and undefined

*/

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

/* TEST
getComputerChoice ();
console.log(getComputerChoice()); // prints rock, paper, or scissors

*/

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You won.';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won.';
    } else {
      return 'You won.';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won.';
    } else {
      return 'You won.';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won.';
    } else {
      return 'You won.';
    }
  }
}

/* TEST 

console.log(determineWinner('paper', 'scissors')); // prints Computer won
console.log(determineWinner('rock', 'scissors')); // prints You won

*/ 

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You used: ${userChoice}`);
  console.log(`The computer used: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();






