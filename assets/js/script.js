
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
        });
    }

    runGame("greaterthan");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    document.getElementById("answer-box").value= "";
    document.getElementById("answer-box").focus();


    // creates two random numbers between 1 and 20
    let num1 = Math.floor(Math.random() *20);
    let num2 = Math.floor(Math.random() *20);

    if (gameType === "greaterthan") {
        displayGreaterthanQuestion(num1, num2);

    } else if (gameType === "equal") {
        displayEqualQuestion(num1, num2);

    } else if (gameType === "lessthan") {
        displayLessthanQuestion(num1, num2);

    } 

}
// get user answer from the answer box
function getUserAnswer() {
    let value = document.getElementById("answer-box").value;
    if (value != null && value.toLowerCase() === 'true') {
        return true;
    } else if ( value != null && value.toLowerCase() === 'false') {
        return false;

    } else {
        document.getElementById("message").innerText = "Invalid value";

    }
}

// check answer function
function checkAnswer() {
    let userAnswer = getUserAnswer();
    let calculatedAnswer = calculateCorrectAnswer();
    if (userAnswer === null) {
        return;
       }
    let isCorrect = userAnswer === calculatedAnswer;

    if (isCorrect) {
        alert("you are correct!");
        incremetScore();
    } else {
        alert("you are incorrect, please try again!");
        incremetWrongAnswers();
    }

    runGame(calculatedAnswer[1]);
} 

/**
 * Gets the operands the (numbers) and the operator (greaterthan, equal, lessthan)
 * directely from the dom, and returnes the correct answer
 */

function calculateCorrectAnswer() {
    let operand1 = document.getElementById('operand1').innerText;
    let operand2 = document.getElementById('operand2').innerText;
    let operator = document.getElementById('operator').innerText;
    if (operator === ">") {
        return operand1 > operand2;
    } else if (operator === "===") {
        return operand1 === operand2;
    } else if (operator === "<") {
        return operand1 < operand2;
    } else {
        alert (`unimplemented operator ${operator}`);
        
    }
    
}
 

/**
 * Get the current score from the DOM and increments it by 1
 */

function incremetScore() {
    let oldscore = (document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldscore;

}

/**
 * Get the current tally of incorrect answers from the DOM and increments it by 1
 */

function incremetWrongAnswers() {
    let oldscore = (document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldscore;
    
}

function displayGreaterthanQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = ">";
    
}

function displayEqualQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "===";
    
}

function displayLessthanQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "<";
    
}