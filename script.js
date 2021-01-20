let boxes = document.getElementsByClassName("box");

for (var i = 0; i < boxes.length; i++){
boxes[i].addEventListener('click', boxClicked);
}

function boxClicked(event){
    let clickedBox = document.getElementById(this.id);
    let currentBackgroundColor = window.getComputedStyle(clickedBox).getPropertyValue('background-color');
    
    if(currentBackgroundColor == 'rgb(0, 128, 0)'){
        clickedBox.style.backgroundColor = "orange";
    }else if(currentBackgroundColor == 'rgb(255, 165, 0)'){
        clickedBox.style.backgroundColor = "green";
    }
}

