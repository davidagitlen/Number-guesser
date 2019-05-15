var minInput = document.querySelector("#min-input-field");
var maxInput = document.querySelector("#max-input-field");
var minOutput = document.querySelector("#min-output");
var maxOutput = document.querySelector("#max-output");
var updateButton = document.querySelector("#update-button");
var challengerOneName = document.querySelector("#challenger-1-name");
var challengerTwoName = document.querySelector("#challenger-2-name");
var guessOne = document.querySelector("#challenger-1-guess");
var guessTwo = document.querySelector("#challenger-2-guess");
var submitGuessButton = document.querySelector("#submit-guess-button");
var clearButton = document.querySelector('#clear-button');
var resetButton = document.querySelector('#reset-button');
var rightSectionContainer = document.querySelector("#right-section");
var tooHighMessage = "That's too high!";
var tooLowMessage = "That's too low!";
var goldilocksMessage = "Boom!";
var alertWarningOne = document.querySelector("#alert-warning-1");
var alertWarningTwo = document.querySelector("#alert-warning-2");
var alertGuessOne = document.querySelector("#alert-guess-1");
var alertGuessTwo = document.querySelector("#alert-guess-2");
var outputGuessOne = null;
var outputGuessTwo = null;
var newMinOutput = null;
var newMaxOutput = null;
var randomNum = null;
var newChallengerOneName = null;
var newChallengerTwoName = null;

updateButton.addEventListener("click", setRange);
submitGuessButton.addEventListener("click", handleSubmit);
resetButton.addEventListener('click', resetGameButton);
clearButton.addEventListener('click', clearChallengerForm);

minInput.addEventListener('keyup', enableClearButton);
maxInput.addEventListener('keyup', enableClearButton);
challengerOneName.addEventListener('keyup', enableClearButton);
challengerTwoName.addEventListener('keyup', enableClearButton);
guessOne.addEventListener('keyup', enableClearButton);
guessTwo.addEventListener('keyup', enableClearButton);

function setRange() {
    var newMinOutput = parseInt(minInput.value) ;
    minOutput.innerText = newMinOutput;
    var newMaxOutput = parseInt(maxInput.value);
    maxOutput.innerText = newMaxOutput;
    randomNum = Math.floor(Math.random() * (newMaxOutput - newMinOutput + 1)) + newMinOutput;
    console.log(randomNum);
};


function resetGameButton () {
    document.getElementById('guess-1-form').reset();
    document.getElementById('guess-2-form').reset();
    setRange();
};

function clearChallengerForm () {
  document.getElementById('challenger-1-form').reset();
  document.getElementById('challenger-2-form').reset();
  document.getElementById('min-range-form').reset();
  document.getElementById('max-range-form').reset();
  document.getElementById('guess-1-form').reset();
  document.getElementById('guess-2-form').reset();
};

function handleSubmit() {
    challengerNames();
    challengerGuess();
    challengerOneCompareNumbers();
    challengerTwoCompareNumbers();
    enableClearButton();
    guessRangeAlertOne(guessOne, alertGuessOne);
    guessRangeAlertTwo(guessTwo, alertGuessTwo);
    alertTextMessageOne(challengerOneName, alertWarningOne);
    alertTextMessageTwo(challengerTwoName, alertWarningTwo);
    alertGuessMessageOne(guessOne, alertGuessOne);
    alertGuessMessageTwo(guessTwo, alertGuessTwo);
};

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
        };
    };
};

function challengerNames() {
    newChallengerOneName = challengerOneName.value;
    newChallengerTwoName = challengerTwoName.value;
    document.getElementById("change-challenger-one-name").innerHTML = newChallengerOneName;
    document.getElementById("change-challenger-two-name").innerHTML = newChallengerTwoName;
};

function challengerGuess() {
    outputGuessOne = parseInt(guessOne.value);
    outputGuessTwo = parseInt(guessTwo.value);
    document.getElementById("challenger-1-guess-output").innerHTML = outputGuessOne;
    document.getElementById("challenger-2-guess-output").innerHTML = outputGuessTwo;
};

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
                <span class="match-winner-name">${newChallengerOneName}</span>
                <p class="winner-label">WINNER</p>
                <div class="proto-winner-card-bottom">
                <span class="winner-number-of-guesses"></span>GUESSES<span class="winner-time-spent">
                </span>MINUTES<button type=button class="close-winner-card-button">X</button></div>
                </article>`);
    };
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
                <span class="match-winner-name">${newChallengerTwoName}</span>
                <p class="winner-label">WINNER</p>
                <div class="proto-winner-card-bottom">
                <span class="winner-number-of-guesses"></span>GUESSES<span class="winner-time-spent">
                </span>MINUTES<button type=button class="close-winner-card-button">X</button></div>
                </article>`);
    };
};

function guessRangeAlertOne(input, location) {
    var inputValue = parseInt(input.value);
    if (inputValue < newMinOutput) {
        location.insertAdjacentHTML ('beforeend', `<p class="alert-warning-text" id="min-max-warning-popup-1"><img src="error-icon.svg" class="alert-warning-img" id="alert-warning-img">Outside range!</p>`)
    } else if (inputValue > newMaxOutput) {
           location.insertAdjacentHTML ('beforeend', `<p class="alert-warning-text" id="min-max-warning-popup-1"><img src="error-icon.svg" class="alert-warning-img" id="alert-warning-img">Outside range!</p>`)
    } else {
        var removeWarning = document.getElementById("min-max-warning-popup-1");
        removeWarning.remove();
    };
};

function guessRangeAlertTwo(input, location) {
    var inputValue = parseInt(input.value);
    if (inputValue < newMinOutput) {
        location.insertAdjacentHTML ('beforeend', `<p class="alert-warning-text" id="min-max-warning-popup-2"><img src="error-icon.svg" class="alert-warning-img" id="alert-warning-img">Outside range!</p>`)
    } else if (inputValue > newMaxOutput) {
           location.insertAdjacentHTML ('beforeend', `<p class="alert-warning-text" id="min-max-warning-popup-2"><img src="error-icon.svg" class="alert-warning-img" id="alert-warning-img">Outside range!</p>`)
    } else {
        var removeWarning = document.getElementById("min-max-warning-popup-2");
        removeWarning.remove();
    };
};


function alertTextMessageOne(input, location) {
     var inputValue = input.value;
    if (inputValue.length < 1) {     
        location.insertAdjacentHTML('beforeend',`<p class="alert-warning-text" id="alert-warning-popup-1"><img src="error-icon.svg" class="alert-warning-img" id="alert-warning-img">Please enter a name!</p>`);
    } else {
       var removeWarning = document.getElementById("alert-warning-popup-1");
            removeWarning.remove();
    };
};

function alertTextMessageTwo(input, location) {
     var inputValue = input.value;
    if (inputValue.length < 1) {     
        location.insertAdjacentHTML('beforeend',`<p class="alert-warning-text" id="alert-warning-popup-2"><img src="error-icon.svg" class="alert-warning-img" id="alert-warning-img">Please enter a name!</p>`);
    } else {
       var removeWarning = document.getElementById("alert-warning-popup-2");
            removeWarning.remove();
    };
    
};

function alertGuessMessageOne(input, location) {
     var inputValue = input.value;
    if (inputValue.length < 1) {     
        location.insertAdjacentHTML('beforeend',`<p class="alert-warning-guess" id="alert-guess-popup-1"><img src="error-icon.svg" class="alert-warning-img" id="alert-warning-img">Guess!</p>`);
    } else {
       var removeWarning = document.getElementById("alert-guess-popup-1");
            removeWarning.remove();
    };
};

function alertGuessMessageTwo(input, location) {
     var inputValue = input.value;
    if (inputValue.length < 1) {     
        location.insertAdjacentHTML('beforeend',`<p class="alert-warning-guess" id="alert-guess-popup-2"><img src="error-icon.svg" class="alert-warning-img" id="alert-warning-img">Guess!</p>`);
    } else {
       var removeWarning = document.getElementById("alert-guess-popup-2");
            removeWarning.remove();
    };
};


// // create a querySelector for guessOne and guessTwo, use innerHTML or innerText//

// guessOne.addEventListener('keyup', function() {
//   guessAlert('guessOne', guessOne)
// });
// guessTwo.addEventListener('keydown', function() {  
//     guessAlert('guessTwo', guessTwo)
// });

// // function guessAlert(guess, element) {
// //     if (element.value.isNaN) {
// //       submitGuessButton.disabled = true;
// //       ///the text of the p tag is 'guess is not a number'
// //     } else if(/* element.value is greater than max || less than the min*/) {
// //       /*disable submit button*/
// //     } else {
// //       submitGuessButton.disabled = false;
// //       /* set display of p to and empty string or display none*/
// //     };
// // };