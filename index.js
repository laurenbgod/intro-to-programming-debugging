//identifying HTML elements

//input
const guessInput = document.getElementById("guess");

//buttons
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

//outputs
var messages = document.getElementsByClassName("message");
const tooHighMessage = document.getElementById("too-high");
const tooLowMessage = document.getElementById("too-low");
const maxGuessesMessage = document.getElementById("max-guesses");
const numberOfGuessesMessage = document.getElementById("number-of-guesses");
const correctMessage = document.getElementById("correct");

//declare variables
let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;

function hideAllMessages() {
  let elementIndex = 0;
  elementIndex <= messages.length;
  elementIndex++;
  {
    messages[elementIndex].style.display = "none";
  }
}

console.log(messages);
hideAllMessages();
// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11

targetNumber = getRandomNumber(1, 99);
console.log(`target number: ${targetNumber}`);

//moved function definition up so function is known when called

//function to get number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//function to analyze input
function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  //hiding messages while analyzing??? (does this function exist)
  //correct answer message
  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = "";

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  //incorrect answer message
  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = "";
    } else {
      tooLowMessage.style.display = "";
    }

    //atempt counter
    const remainingAttempts = maxNumberOfAttempts - attempts;

    //status message
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  //maxed out message
  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  //????
  guessInput.value = "";

  //????
  resetButton.style.display = "";
}

//should function set up be at the beginning?
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 99);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  maxNumberOfAttempts = 0;

  // Enable the input and submit button
  submitButton.disabeld = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = "none";
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", setup);

setup();
