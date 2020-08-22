var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#messageDisplay");
var colorDisplay = document.querySelector("#colorDisplay");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();

// functions

function init(){
    setUpModeButtons();
    setUpSquareColors();
    reset();

}

function setUpModeButtons(){
// mode change buttons loop 
for( var i = 0 ; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("modeSelected");
        modeButtons[1].classList.remove("modeSelected");
        this.classList.add("modeSelected");
        this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
        reset(); 
    })
};
}

function setUpSquareColors(){
    // loops to load the squares 

for(var i = 0; i < squares.length; i++){
    // add click function to squares
    squares[i].addEventListener("click", function(){
        // identify clicked square color
        var ClickedColor = this.style.backgroundColor;
        if(ClickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            colorDisplay.textContent = ClickedColor;
            h1Display.style.backgroundColor = ClickedColor;
            changeColor(ClickedColor);
            resetButton.textContent = "Play Again?";
        } else  {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Wrong!";
        }
    })

};
}

function reset(){
    // generate new colors 
    colors = generatRandomColor(numOfSquares);
    // pick a new pickedColor 
    pickedColor = pickColor();
    // change colorDisplay to the new pickedColor 
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // assign new colors to squares 
    for(var i = 0 ; i < squares.length; i++){
        
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    // reset h1 background
    h1Display.style.background = "pink";
    
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + " " + g + "," + " " + b +")";
}

function generatRandomColor(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function pickColor(){
    var randomNum = Math.floor(Math.random()*colors.length);
    return colors[randomNum];
}

function changeColor(color){
    for(var i = 0 ; i <squares.length; i ++)
    { squares[i].style.backgroundColor = color;  }
}



resetButton.addEventListener("click", function(){
   reset();
});

// below replaced by modeButton for loop 
// ezButton.addEventListener("click", function(){
//    
//     // generate new colors for 3 
//     numOfSquares = 3;
//     colors = generatRandomColor(numOfSquares);
//     // pick new pickedColor
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     // assign new colors to squares & hide buttom 3 squares 
//     for(var i = 0 ; i < squares.length; i++){
//        if(colors[i]){
//         squares[i].style.backgroundColor = colors[i];
//        } else {
//            squares[i].style.display = "none";
//        }
//     }
   
// });

// hardButton.addEventListener("click", function(){
//     ezButton.classList.remove("modeSelected");
//     hardButton.classList.add("modeSelected");
//     // generate new colors for 6
//     numOfSquares = 6;
//     colors = generatRandomColor(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0 ; i < squares.length; i++){
//          squares[i].style.backgroundColor = colors[i];
//          squares[i].style.display = "block";
//      }
// });