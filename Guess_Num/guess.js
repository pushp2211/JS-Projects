// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get DOM elements
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowhigh');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;       // Number of current guess
let resetButton;          // For "Start New Game" button

guessField.focus();       // Focus the input field initially

// Handle user guess
function checkGuess(e) {
    e.preventDefault(); // Prevent page reload on form submit

    const userGuess = Number(guessField.value); // Get number from input

    // Show previous guesses
    if (guessCount === 1) {
        guesses.textContent = '';
    }
    guesses.textContent += userGuess + ' ';

    // Correct guess
    if (userGuess === randomNumber) {
        lastResult.textContent = `You won in ${guessCount} guesses!`;
        lastResult.style.color = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    }
    // Last allowed guess
    else if (guessCount === 10) {
        lastResult.textContent = '!!! GAME OVER !!! You used all 10 guesses.';
        lastResult.style.color = 'red';
        lowOrHigh.textContent = '';
        setGameOver();
    }
    // Incorrect guess with hint
    else {
        lastResult.textContent = 10 - guessCount; // Show remaining guesses
        lastResult.style.color = '#333';

        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'Too low!';
        } else {
            lowOrHigh.textContent = 'Too high!';
        }
    }

    guessCount++;
    guessField.value = '';      // Clear input
    guessField.focus();         // Re-focus for next guess
}

// End game and show reset button
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', resetGame);
}

// Reset game state
function resetGame() {
    guessCount = 1;

    // Clear previous text
    guesses.textContent = '';
    lastResult.textContent = '10';
    lowOrHigh.textContent = '';

    // Remove reset button
    resetButton.parentNode.removeChild(resetButton);

    // Enable input and submit
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    // Generate new random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Attach checkGuess to submit button
guessSubmit.addEventListener('click', checkGuess);
