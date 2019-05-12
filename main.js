    // Min and Max parameters ---> Generate randomNum

var updateButton = document.querySelector("#update-button");
var minInput = document.querySelector("#min-input-field");
var minOutput = document.querySelector("#min-output");
var maxInput = document.querySelector("#max-input-field");
var maxOutput = document.querySelector("#max-output");
var randomNum = null;

updateButton.addEventListener("click", setRange);

function setRange() {
    var newMinOutput = parseInt(minInput.value) ;
    minOutput.innerText = newMinOutput;
    var newMaxOutput = parseInt(maxInput.value);
    maxOutput.innerText = newMaxOutput;

    randomNum = Math.floor(Math.random() * (newMaxOutput - newMinOutput + 1)) + newMinOutput;
    console.log(randomNum)
    };

// Challenger 1 and 2 input and output


var challengerOneName = document.querySelector("#challenger-1-name");
var challengerTwoName = document.querySelector("#challenger-2-name");

// Guess 1 and 2 input and output

var guessOne = document.querySelector("#challenger-1-guess");
var guessTwo = document.querySelector("#challenger-2-guess");

var submitGuessButton = document.querySelector("#submit-guess-button");

submitGuessButton.addEventListener("click", challengerGuess);
submitGuessButton.addEventListener("click", challengerNames);

//these variables have to be declared with no values 
//in order to assign them values from inside the function
// assign these to null? 

var outputGuessOne = null;
var outputGuessTwo = null;

var guessOne = document.querySelector("#challenger-1-guess");
var guessTwo = document.querySelector("#challenger-2-guess");

function challengerGuess() {
    outputGuessOne = parseInt(guessOne.value);
    outputGuessTwo = parseInt(guessTwo.value);
    document.getElementById("challenger-1-guess-output").innerHTML = outputGuessOne;
    document.getElementById("challenger-2-guess-output").innerHTML = outputGuessTwo;
}

var submitGuessButton = document.querySelector("#submit-guess-button");


var newChallengerOneName = null;
var newChallengerTwoName = null;

function challengerNames() {
    newChallengerOneName = challengerOneName.value;
    // console.log('testing', challengerOneName.value)
    newChallengerTwoName = challengerTwoName.value;
    document.getElementById("change-challenger-one-name").innerHTML = newChallengerOneName;
    document.getElementById("change-challenger-two-name").innerHTML = newChallengerTwoName;
};

// button clears challenger forms and sets new random number. Console.log on line 18 to check randomNum on both invocations of setRange();

var clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', clearChallengerForm)
function clearChallengerForm () {
  document.getElementById('challenger-1-form').reset();
  document.getElementById('challenger-2-form').reset();
  document.getElementById('min-range-form').reset();
  document.getElementById('max-range-form').reset();
  document.getElementById('guess-1-form').reset();
  document.getElementById('guess-2-form').reset();
}
//      
//Reset button that clears the the guess 1 and 2 columns and generates a randomNum//

var resetButton = document.querySelector('#reset-button')

resetButton.addEventListener('click', resetGameButton)

function resetGameButton () {
    document.getElementById('guess-1-form').reset();
    document.getElementById('guess-2-form').reset();
    setRange();
};

//document.getElementById('max-range-form').reset();  
// }


//building out testing the numbers against randomNum

function handleSubmit() {
    challengerNames();
    challengerGuess();
    challengerOneCompareNumbers();
    challengerTwoCompareNumbers();
    enableClearButton();
}



var tooHighMessage = "That's too high!";
var tooLowMessage = "That's too low!";
var goldilocksMessage = "Boom!"


submitGuessButton.addEventListener("click", handleSubmit);

var rightSectionContainer = document.querySelector(".right-section");
var winnerName = null;
//working out how to insert multiple cards below
/*can get multiple cards, problem is if outputGuessTwo is undefined still equates to randomNum(?WHY?), 
and displays multiple cards, there is afterbegin and beforeend, not sure which is better,
but they both appear to work the same because rightSectionContainer is empty before populating
with any cards*/



function challengerOneCompareNumbers() {
    if (outputGuessOne > randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = tooHighMessage;
    } else if (outputGuessOne < randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = tooLowMessage;
    } else if (outputGuessOne === randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = goldilocksMessage; 
        rightSectionContainer.insertAdjacentHTML('afterbegin', `<article class="proto-winner-card">  
                <div class="proto-winner-card-top">
                <span class="challenger-1-name challenger-1-name-output">${newChallengerOneName}</span> 
                vs <span class="challenger-2-name challenger-2-name-output">${newChallengerTwoName}</span></div>
                <output class="match-winner-name">${newChallengerOneName}</output>
                <p class="winner-label">WINNER</p>
                <div class="proto-winner-card-bottom">
                <span class="winner-number-of-guesses"></span>GUESSES<span class="winner-time-spent">
                </span>MINUTES<button type=button class="close-winner-card-button">X</button></div>
                </article>`);
        winnerName = newChallengerOneName;
    }
};

function challengerTwoCompareNumbers() {
    if (outputGuessTwo > randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = tooHighMessage;
    } else if (outputGuessTwo < randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = tooLowMessage;
    } else if (outputGuessTwo === randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = goldilocksMessage;
        rightSectionContainer.insertAdjacentHTML('afterbegin', `<article class="proto-winner-card">  
                <div class="proto-winner-card-top">
                <span class="challenger-1-name challenger-1-name-output">${newChallengerOneName}</span> 
                vs <span class="challenger-2-name challenger-2-name-output">${newChallengerTwoName}</span></div>
                <output class="match-winner-name">${newChallengerTwoName}</output>
                <p class="winner-label">WINNER</p>
                <div class="proto-winner-card-bottom">
                <span class="winner-number-of-guesses"></span>GUESSES<span class="winner-time-spent">
                </span>MINUTES<button type=button class="close-winner-card-button">X</button></div>
                </article>`);
        winnerName = newChallengerTwoName;
    }
};


function insertWinnerCard () {
rightSectionContainer.innerHTML = winnerCard;
};


minInput.addEventListener('keydown', enableClearButton);
maxInput.addEventListener('keydown', enableClearButton);
challengerOneName.addEventListener('keydown', enableClearButton);
challengerTwoName.addEventListener('keydown', enableClearButton);
guessOne.addEventListener('keydown', enableClearButton);
guessTwo.addEventListener('keydown', enableClearButton);
////disable clear and reset buttons

function enableClearButton() {
    var inputFields = [
    minInput.value,
    maxInput.value,
    challengerOneName.value,
    challengerTwoName.value,
    guessOne.value,
    guessTwo.value
    ];
    for(var i = 0; i < inputFields.length; i++){
        if (inputFields[i].length < 1) {
            clearButton.disabled = true;
            resetButton.disabled = true;
            return; 
        } else {
            clearButton.disabled = false;
            resetButton.disabled = false;
        }
    };
};



// // create a querySelector for guessOne and guessTwo, use innerHTML or innerText//


// guessOne.addEventListener('keydown', function() {
//   guessAlert('guessOne', guessOne)
// });
// guessTwo.addEventListener('keydown', function() {  
//     guessAlert('guessTwo', guessTwo)
// });


// function guessAlert(guess, element) {
//     if (element.value.isNaN) {
//       submitGuessButton.disabled = true;
//       ///the text of the p tag is 'guess is not a number'
//     } else if(/* element.value is greater than max || less than the min*/) {
//       /*disable submit button*/
//     } else {
//       submitGuessButton.disabled = false;
//       /* set display of p to and empty string or display none*/
//     };

// };











