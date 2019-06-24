var $minInput = $("#min-input-field");
var $maxInput = $("#max-input-field");
var $minOutput = $("#min-output");
var $maxOutput = $("#max-output");
var $updateButton = $("#update-button");
var $challengerOneName = $("#challenger-1-name");
var $challengerTwoName = $("#challenger-2-name");
var $guessOne = $("#challenger-1-guess");
var $guessTwo = $("#challenger-2-guess");
var $submitGuessButton = $("#submit-guess-button");
var $clearButton = $('#clear-button');
var $resetButton = $('#reset-button');
var $rightSectionContainer = $("#right-section");
var tooHighMessage = "That's too high!";
var tooLowMessage = "That's too low!";
var goldilocksMessage = "Boom!";
var $alertWarningOne = $("#alert-warning-1");
var $alertWarningTwo = $("#alert-warning-2");
var $alertGuessOne = $("#alert-guess-1");
var $alertGuessTwo = $("#alert-guess-2");
var outputGuessOne = null;
var outputGuessTwo = null;
var newMinOutput = null;
var newMaxOutput = null;
var randomNum = null;
var newChallengerOneName = null;
var newChallengerTwoName = null;

$updateButton.on("click", updateSubmit);
$submitGuessButton.on("click", handleSubmit);
$submitGuessButton.on("click", handleSubmitDown);
$resetButton.on('click', resetGameButton);
$clearButton.on('click', clearChallengerForm);
$resetButton.on('click', enableClearButton);
$clearButton.on('click', enableClearButton);
$minInput.on('keyup', enableClearButton);
$maxInput.on('keyup', enableClearButton);
$challengerOneName.on('keyup', enableClearButton);
$challengerTwoName.on('keyup', enableClearButton);
$guessOne.on('keyup', enableClearButton);
$guessTwo.on('keyup', enableClearButton);

function setRange() {
  newMinOutput = parseInt($minInput.val());
  $minOutput.text(newMinOutput);
  newMaxOutput = parseInt($maxInput.val());
  $maxOutput.text(newMaxOutput);
  randomNum = Math.floor(Math.random() * (newMaxOutput - newMinOutput + 1)) + newMinOutput;
}

function updateSubmit() {
  setRange();
}

function resetGameButton () {
  document.getElementById('guess-1-form').reset();
  document.getElementById('guess-2-form').reset();
  setRange();
}

function clearChallengerForm () {
  document.getElementById('challenger-1-form').reset();
  document.getElementById('challenger-2-form').reset();
  document.getElementById('min-range-form').reset();
  document.getElementById('max-range-form').reset();
  document.getElementById('guess-1-form').reset();
  document.getElementById('guess-2-form').reset();
}

function handleSubmit() {
  challengerNames();
  challengerGuess();
  challengerOneCompareNumbers();
  challengerTwoCompareNumbers();
  enableClearButton();
  rangeErrorOne($guessOne, $alertGuessOne, 'alert-warning-popup');
  rangeErrorTwo($guessTwo, $alertGuessTwo, 'alert-warning-popup');
}

function handleSubmitDown() {
  emptyFieldAlert($challengerOneName, $alertWarningOne, 'alert-warning-popup');
  emptyFieldAlert($challengerTwoName, $alertWarningTwo, 'alert-warning-popup');
  emptyGuessAlert($guessOne, $alertGuessOne, 'alert-warning-popup');
  emptyGuessAlert($guessTwo, $alertGuessTwo, 'alert-warning-popup');
}


function enableClearButton() {
  var inputFields = [
    $minInput.val(),
    $maxInput.val(),
    $challengerOneName.val(),
    $challengerTwoName.val(),
    $guessOne.val(),
    $guessTwo.val(),
  ];
  if (inputFields.includes('')) {
    $clearButton.prop('disabled', true);
    $resetButton.prop('disabled', true);
    return;
  } else {
    $clearButton.prop('disabled', false);
    $resetButton.prop('disabled', false);
  }
}

function challengerNames() {
  newChallengerOneName = $challengerOneName.val();
  newChallengerTwoName = $challengerTwoName.val();
  $("#change-challenger-one-name").html(newChallengerOneName);
  $("#change-challenger-two-name").html(newChallengerTwoName);
}

function challengerGuess() {
  outputGuessOne = parseInt($guessOne.val());
  outputGuessTwo = parseInt($guessTwo.val());
  $("#challenger-1-guess-output").html(outputGuessOne);
  $("#challenger-2-guess-output").html(outputGuessTwo);
}


function emptyFieldAlert(input, location, id) {
  if  (!input.val() && !location.text()) {
    location.append(`<p class="alert-warning-text" id="${id}">
    <img src="error-icon.svg" class="alert-warning-img" >Enter a name!</p>`);
  } else if (input.val() !== '' && location.text() !== '') {
    location.text('');
  }
}

function emptyGuessAlert (input, location, id) {
  if (!input.val() && !location.html()) {
    location.append(`<p class="alert-warning-text" id="${id}">
    <img src="error-icon.svg" class="alert-warning-img" >Enter a number!</p>`);
  } else if (input.val() !== '' && location.val() !== '') {
    location.text('');
  }
}

function rangeErrorOne (input, location, id) {
  if (parseInt(input.val()) < newMinOutput && !location.html()) {
    location.append(`<p class="alert-warning-text" id="${id}">
    <img src="error-icon.svg" class="alert-warning-img">Outside range!</p>`);
  } else if (parseInt(input.val()) > newMaxOutput && !location.html()) {
    location.append(`<p class="alert-warning-text" id="${id}">
    <img src="error-icon.svg" class="alert-warning-img" >Outside range!</p>`)
  } else if ((!parseInt(input.val()) && location.html() !== '') || (parseInt(input.val()) <= newMaxOutput && parseInt(input.val()) >= newMinOutput) && location.html() !== '') {
    location.html('');
  }
}

function rangeErrorTwo (input, location, id) {
  if (parseInt(input.val()) < newMinOutput && !location.html()) {
    location.append(`<p class="alert-warning-text" id="${id}">
    <img src="error-icon.svg" class="alert-warning-img">Outside range!</p>`);
  } else if (parseInt(input.val()) > newMaxOutput && !location.html()) {
    location.append(`<p class="alert-warning-text" id="${id}">
    <img src="error-icon.svg" class="alert-warning-img" >Outside range!</p>`)
  } else if ((!parseInt(input.val()) && location.html() !== '') || (parseInt(input.val()) <= newMaxOutput && parseInt(input.val()) >= newMinOutput) && location.html() !== '') {
    location.html('');
  }
}

function challengerOneCompareNumbers() {
  if (outputGuessOne > randomNum) {
    $("#challenger-1-result-message").html(tooHighMessage);
  } else if (outputGuessOne < randomNum) {
    $("#challenger-1-result-message").html(tooLowMessage);
  } else if (outputGuessOne === randomNum) {
    $("#challenger-1-result-message").html(goldilocksMessage); 
    $rightSectionContainer.append(`<article class="proto-winner-card">  
      <div class="proto-winner-card-top">
      <span class="challenger-1-name challenger-1-name-output">${newChallengerOneName}</span> 
      vs <span class="challenger-2-name challenger-2-name-output">${newChallengerTwoName}</span></div>
      <span class="match-winner-name">${newChallengerOneName}</span>
      <p class="winner-label">WINNER</p>
      <div class="proto-winner-card-bottom">
      <span class="winner-number-of-guesses"></span>GUESSES<span class="winner-time-spent">
      </span>MINUTES<button type=button class="close-winner-card-button">X</button></div>
      </article>`);
  }
}

function challengerTwoCompareNumbers() {
  if (outputGuessTwo > randomNum) {
    $("#challenger-2-result-message").html(tooHighMessage);
  } else if (outputGuessTwo < randomNum) {
    $("#challenger-2-result-message").html(tooLowMessage);
  } else if (outputGuessTwo === randomNum) {
    $("#challenger-2-result-message").html(goldilocksMessage);
    $rightSectionContainer.append( `<article class="proto-winner-card">  
      <div class="proto-winner-card-top">
      <span class="challenger-1-name challenger-1-name-output">${newChallengerOneName}</span> 
      vs <span class="challenger-2-name challenger-2-name-output">${newChallengerTwoName}</span></div>
      <span class="match-winner-name">${newChallengerTwoName}</span>
      <p class="winner-label">WINNER</p>
      <div class="proto-winner-card-bottom">
      <span class="winner-number-of-guesses"></span>GUESSES<span class="winner-time-spent">
      </span>MINUTES<button type=button class="close-winner-card-button" onclick=">X</button>
      </div>
      </article>`);
  }
}