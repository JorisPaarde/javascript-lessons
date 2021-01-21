document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked sumit!");
            }else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

function runGame(gameType){
 let num1 = Math.floor(Math.random()*25) + 1;
 let num2 = Math.floor(Math.random()*25) + 1;

 if (gameType === "addition"){
     displayAdditionQuestion(num1,num2);
 }else{
     alert(`Unknown gametype ${gameType}`);
     throw(`Unknown gametype ${gameType}, aborting!`);
 }
}

function checkAnwser(){
    
}

function calculateCorrectanwser(){
    
}

function incrementScore(){

}

function incrementWrongAnwser(){

}

function displayAdditionQuestion(operand1, operand2){
    getElementById("operand1").textcontent = operand1;
    getElementById("operand2").textcontent = operand2;
    getElementById("operator").textcontent = "+";
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}