    // Min and Max parameters ---> Generate randomNum

        var updateButton = document.querySelector("#update-button");
        var minInput = document.querySelector("#min-input-field");
        var minOutput = document.querySelector("#min-output");
        var maxInput = document.querySelector("#max-input-field");
        var maxOutput = document.querySelector("#max-output");
        var randomNum;
        updateButton.addEventListener("click", setRange)
  

        function setRange() {
            var newMinOutput = parseInt(minInput.value);
            minOutput.innerText = newMinOutput;
            var newMaxOutput = parseInt(maxInput.value);
            maxOutput.innerText = newMaxOutput;

            randomNum = Math.floor(Math.random() * (newMaxOutput - newMinOutput + 1)) + newMinOutput;
        }





        // Challenger 1 and 2 input and output


    var challengerOneName = document.querySelector("#challenger-1-name");
    var challengerOneGuess = document.querySelector("#challenger-1-guess");
    var challengerTwoName = document.querySelector("#challenger-2-name");
    var challengerTwoGuess = document.querySelector("#challenger-2-guess");
    var submitGuessButton = document.querySelector("#submit-guess-button");

    submitGuessButton.addEventListener("click", challengerNames);


function challengerNames() {
    var newChallengerOneName = challengerOneName.value;
    var newChallengerTwoName = challengerTwoName.value;
    console.log('challenger1',newChallengerOneName)
    console.log('challenger2',newChallengerTwoName)
};

    //Take newChallengerOneName and newChallengerTwoName values
    //and replace <p> .challenger-1-name, .challenger-2-name </p>


// function changeChallengerName (name1, name2) {
    

// }


    // var changeChallengerOneName = document.querySelector("#change-challenger-one-name");
    // var changeChallengerTwoName = document.querySelector("#change-challenger-two-name");























