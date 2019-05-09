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
        });
