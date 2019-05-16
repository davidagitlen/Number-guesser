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
// var alertNanOne = document.querySelector("#alert-nan-1");
// var alertNanTwo = document.querySelector("#alert-nan-2");
var outputGuessOne = null;
var outputGuessTwo = null;
var newMinOutput = null;
var newMaxOutput = null;
var randomNum = null;
var newChallengerOneName = null;
var newChallengerTwoName = null;

updateButton.addEventListener("click", updateSubmit);
submitGuessButton.addEventListener("click", handleSubmit);
submitGuessButton.addEventListener("mousedown", handleSubmitDown);
resetButton.addEventListener('click', resetGameButton);
clearButton.addEventListener('click', clearChallengerForm);
minInput.addEventListener('keyup', enableClearButton);
maxInput.addEventListener('keyup', enableClearButton);
challengerOneName.addEventListener('keyup', enableClearButton);
challengerTwoName.addEventListener('keyup', enableClearButton);
guessOne.addEventListener('keyup', enableClearButton);
guessTwo.addEventListener('keyup', enableClearButton);

function setRange() {
    newMinOutput = parseInt(minInput.value) ;
    minOutput.innerText = newMinOutput;
    newMaxOutput = parseInt(maxInput.value);
    maxOutput.innerText = newMaxOutput;
    randomNum = Math.floor(Math.random() * (newMaxOutput - newMinOutput + 1)) + newMinOutput;
    console.log(randomNum);
};

function updateSubmit() {
    setRange();
    // notE(alertNanOne, alertNanTwo, 'alert-warning-popup');
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
    console.log('click')
    challengerNames();
    challengerGuess();
    challengerOneCompareNumbers();
    challengerTwoCompareNumbers();
    enableClearButton();
    rangeErrorOne(guessOne, alertGuessOne, 'alert-warning-popup');
    rangeErrorTwo(guessTwo, alertGuessTwo, 'alert-warning-popup');
};

function handleSubmitDown(){
    console.log('down')
    emptyFieldAlert(challengerOneName, alertWarningOne, 'alert-warning-popup');
    emptyFieldAlert(challengerTwoName, alertWarningTwo, 'alert-warning-popup');
    emptyGuessAlert(guessOne, alertGuessOne, 'alert-warning-popup');
    emptyGuessAlert(guessTwo, alertGuessTwo, 'alert-warning-popup');
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

function emptyFieldAlert(input, location, id) {
    if  (input.value === '' && location.innerText === ''){
    location.insertAdjacentHTML('beforeend',`<p class="alert-warning-text" id="${id}"><img src="error-icon.svg" class="alert-warning-img" >Please enter a name!</p>`);
  } else if (input.value !== '' && location.innerText !== '') {
    location.innerText = '';
  }
};

function emptyGuessAlert (input, location, id) {
    if (input.value === '' && location.innerText === '') {
    location.insertAdjacentHTML('beforeend',`<p class="alert-warning-text" id="${id}"><img src="error-icon.svg" class="alert-warning-img" >Please enter a number!</p>`);
  } else if (input.value !== '' && location.innerText !== '') {
    location.innerText = '';
  }
};

function rangeErrorOne (input, location, id) {
    if (parseInt(input.value) < newMinOutput) {
    console.log('iferrortop1')
    location.insertAdjacentHTML('beforeend', `<p class="alert-warning-text" id="${id}"><img src="error-icon.svg" class="alert-warning-img">Outside range!</p>`);
  } else if (parseInt(input.value) > newMaxOutput) {
    console.log('iferrortop2')
    location.insertAdjacentHTML ('beforeend', `<p class="alert-warning-text" id="${id}"><img src="error-icon.svg" class="alert-warning-img" >Outside range!</p>`)
    } else {
        console.log('error1')
        location.innerText = '';
  }
};

function rangeErrorTwo (input, location, id) {
    if (parseInt(input.value) < newMinOutput) {
    location.insertAdjacentHTML('beforeend', `<p class="alert-warning-text" id="${id}"><img src="error-icon.svg" class="alert-warning-img">Outside range!</p>`);
  } else if (parseInt(input.value) > newMaxOutput) {
    location.insertAdjacentHTML ('beforeend', `<p class="alert-warning-text" id="${id}"><img src="error-icon.svg" class="alert-warning-img" >Outside range!</p>`)
    } else {
         console.log('error2')
        location.innerText = '';
  }
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

// function notE(location, location2, id) {
//     if(randomNum = Number.isNaN) {
//     location.insertAdjacentHTML('beforeend',`<p class="alert-warning-text" id="${id}"><img src="error-icon.svg" class="alert-warning-img" >Not a number!</p>`);
//     location2.insertAdjacentHTML('beforeend',`<p class="alert-warning-text" id="${id}"><img src="error-icon.svg" class="alert-warning-img" >Not a number!</p>`);
//     } else {
//         location.innerText = '';
//         location2.innerText = '';
//     }
// };