    // Min and Max parameters ---> Generate randomNum

        var updateButton = document.querySelector("#update-button");
        var minInput = document.querySelector("#min-input-field");
        var minOutput = document.querySelector("#min-output");
        var maxInput = document.querySelector("#max-input-field");
        var maxOutput = document.querySelector("#max-output");
        updateButton.addEventListener("click", function (){
            var newMinOutput = minInput.value;
            minOutput.innerText = newMinOutput;
            var newMaxOutput = maxInput.value;
            maxOutput.innerText = newMaxOutput;

            randomNum = Math.floor(Math.random() * (newMaxOutput - newMinOutput + 1) +1);

        return randomNum;

        });


        // Challenger 1 and 2 input and output


    var challengerOneName = document.querySelector("#challenger-1-name");
    var challengerOneGuess = document.querySelector("#challenger-1-guess");
    var challengerTwoName = document.querySelector("#challenger-2-name");
    var challengerTwoName = document.querySelector("#challenger-2-guess");
    var submitButton = document.querySelector("#submit-guess-button");

    submitButton.addEventListener("click", function (){
        var 

    })
