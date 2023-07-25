
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("greaterthan");

})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // creates two random numbers between 1 and 20
    let num1 = Math.floor(Math.random() *20);
    let num2 = Math.floor(Math.random() *20);

    if (gameType === "greaterthan") {
        displayGreaterthanQuestion(num1, num2);
    }else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    }

}


function checkAnswer() {

}


function calculateCorrectAnswer() {
    
}

function incremetScore() {
    
}

function incremetWrongAnswers() {
    
}

function displayGreaterthanQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = ">";
    
}

function displayEqualQuestion() {
    
}

function displayLessthanQuestion() {
    
}