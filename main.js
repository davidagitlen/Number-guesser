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
            console.log(randomNum)
        }

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

    var outputGuessOne;
    var outputGuessTwo;
    var guessOne = document.querySelector("#challenger-1-guess");
    var guessTwo = document.querySelector("#challenger-2-guess");

function challengerGuess() {
    outputGuessOne = parseInt(guessOne.value);
    outputGuessTwo = parseInt(guessTwo.value);
    document.getElementById("challenger-1-guess-output").innerHTML = outputGuessOne;
    document.getElementById("challenger-2-guess-output").innerHTML = outputGuessTwo;
}

    var submitGuessButton = document.querySelector("#submit-guess-button");

    submitGuessButton.addEventListener("click", challengerNames);
    submitGuessButton.addEventListener("click", challengerGuess);


function challengerNames() {
    var newChallengerOneName = challengerOneName.value;
    var newChallengerTwoName = challengerTwoName.value;
    document.getElementById("change-challenger-one-name").innerHTML = newChallengerOneName;
    document.getElementById("change-challenger-two-name").innerHTML = newChallengerTwoName;
};

//Reset button clears challenger forms and sets new random number. Console.log on line 18 to check randomNum on both invocations of setRange();

    var tooHighMessage = "That's too high!";
    var tooLowMessage = "That's too low!";
    var goldilocksMessage = "Boom!"

function challengerOneCompareNumbers() {
    if (outputGuessOne > randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = tooHighMessage;
    } else if (outputGuessOne < randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = tooLowMessage;
    } else if (outputGuessOne === randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = goldilocksMessage;
        insertWinnerCard ();
    }
};

function challengerTwoCompareNumbers() {
    if (outputGuessTwo > randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = tooHighMessage;
    } else if (outputGuessTwo < randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = tooLowMessage;
    } else if (outputGuessOne === randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = goldilocksMessage;
        insertWinnerCard ();
    }
};

var clearButton = document.querySelector('#clear-button')

clearButton.addEventListener('click', clearChallengerForm)

function clearChallengerForm () {
    document.getElementById('challenger-1-form').reset();
    document.getElementById('challenger-2-form').reset();
    document.getElementById('min-range-form').reset();
    document.getElementById('max-range-form').reset();  
}

//building out testing the numbers against randomNum

    var tooHighMessage = "That's too high!";
    var tooLowMessage = "That's too low!";
    var goldilocksMessage = "Boom!"

function challengerOneCompareNumbers() {
    if (outputGuessOne > randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = tooHighMessage;
    } else if (outputGuessOne < randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = tooLowMessage;
    } else if (outputGuessOne === randomNum) {
        document.getElementById("challenger-1-result-message").innerHTML = goldilocksMessage; 
        insertWinnerCard();
    }
};

function challengerTwoCompareNumbers() {
    if (outputGuessTwo > randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = tooHighMessage;
    } else if (outputGuessTwo < randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = tooLowMessage;
    } else if (outputGuessOne === randomNum) {
        document.getElementById("challenger-2-result-message").innerHTML = goldilocksMessage;
        insertWinnerCard();
    }
};

submitGuessButton.addEventListener("click", challengerOneCompareNumbers);
submitGuessButton.addEventListener("click", challengerTwoCompareNumbers);

//working out how to insert a card below

var rightSectionContainer = document.querySelector(".right-section");

var winnerCard = "<article class=\"proto-winner-card\">" + 
                "<div class=\"proto-winner-card-top\"><span class=\"challenger-1-name challenger-1-name-output\">CHALLENGER 1 NAME</span> vs <span class=\"challenger-2-name challenger-2-name-output\">CHALLENGER 2 NAME</span></div>" +
                "<output class=\"match-winner-name\"></output>" +
                "<p class=\"winner-label\">WINNER</p>" +
                "<div class=\"proto-winner-card-bottom\"><span class=\"winner-number-of-guesses\"></span>GUESSES<span class=\"winner-time-spent\"></span>MINUTES<button type=button class=\"close-winner-card-button\">X</button></div>" +
            "</article>";


function insertWinnerCard () {
rightSectionContainer.innerHTML = winnerCard;
};


