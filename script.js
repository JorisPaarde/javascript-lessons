document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnwser();
            }else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
document.getElementById("answer-box").addEventListener("keydown", function(e){
   if (e.key === "Enter"){
        checkAnwser();
    }
})

    runGame("addition");
})

function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates two numbers with a value of between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Selects and displays the question depending on the gameType
    // which we set when we called the function

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type ${gameType}, aborting`;
    }

}

function checkAnwser(){
    let userAwnser = parseInt(document.getElementById("answer-box").value);
    calculatedAnwser = calculateCorrectAnwser();
    iscorrect = calculatedAnwser[0] === userAwnser;
    if (iscorrect){
        incrementScore();
        alert("You got it right, whooptedoo. Feeling smart now?");
    }else{
        incrementWrongAnwser();
        alert(`No stupid, it was ${calculatedAnwser[0]}, not ${userAwnser} U dumbass!`);
    }
    runGame(calculatedAnwser[1]);
}

function calculateCorrectAnwser(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return[operand1 + operand2, "addition"];
    } else if (operator === "x"){
        return[operand1 * operand2, "multiply"];
    } else if (operator === "-"){
        return[operand1 - operand2, "subtract"];
    } else if (operator === "/"){
        return[operand1 / operand2, "division"];
    }else{
        alert(`Uniumplemented operator ${operator}`);
        throw `Uniumplemented operator ${operator}, aborting`;
    }
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").textContent = ++oldScore;
}

function incrementWrongAnwser(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").textContent = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1 * operand2;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}