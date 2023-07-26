
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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

/**
 * 
 * Checks the answer aganist the first element in
 * the returned calculateCorrectAnswer array
 */

function checkAnswer() {
    let userAnswer = Boolean(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("You are correct!")
    } else {
        alert (`you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);
} 

/**
 * Gets the operands the (numbers) and the operator (greaterthan, equal, lessthan)
 * directely from the dom, and returnes the correct answer
 */

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
    if (operator === ">") {
        return[operand1 > operand2, "greaterthan"];
    } else {
        alert (`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting!`;
    }
    
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