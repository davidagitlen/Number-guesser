    // Min and Max parameters ---> Generate randomNum

        var updateButton = document.querySelector("#update-button");
        var minInput = document.querySelector("#min-input-field");
        var minOutput = document.querySelector("#min-output");
        var maxInput = document.querySelector("#max-input-field");
        var maxOutput = document.querySelector("#max-output");
        var randomNum;
        updateButton.addEventListener("click", setRange);
  

        function setRange() {
            var newMinOutput = parseInt(minInput.value);
            minOutput.innerText = newMinOutput;
            var newMaxOutput = parseInt(maxInput.value);
            maxOutput.innerText = newMaxOutput;

            randomNum = Math.floor(Math.random() * (newMaxOutput - newMinOutput + 1)) + newMinOutput;
        }

        // Challenger 1 and 2 input and output


    var challengerOneName = document.querySelector("#challenger-1-name");
    var challengerTwoName = document.querySelector("#challenger-2-name");

    // Guess 1 and 2 input and output

    var guessOne = document.querySelector("#challenger-1-guess");
    var guessTwo = document.querySelector("#challenger-2-guess");

    var submitGuessButton = document.querySelector("#submit-guess-button");

    submitGuessButton.addEventListener("click", challengerNames);
    submitGuessButton.addEventListener("click", challengerGuess);

function challengerGuess() {
    var outputGuessOne = guessOne.value;
    var outputGuessTwo = guessTwo.value;
    document.getElementById('challenger-1-guess-output').innerHTML = outputGuessOne;
    document.getElementById('challenger-2-guess-output').innerHTML = outputGuessTwo;
}


function challengerNames() {
    var newChallengerOneName = challengerOneName.value;
    var newChallengerTwoName = challengerTwoName.value;
    document.getElementById('change-challenger-one-name').innerHTML = newChallengerOneName;
    document.getElementById('change-challenger-two-name').innerHTML = newChallengerTwoName;
};






