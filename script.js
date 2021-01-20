document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked sumit!");
            }else{
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame(){

}

function checkAnwser(){
    
}

function calculateCorrectanwser(){
    
}

function incrementScore(){

}

function incrementWrongAnwser(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}