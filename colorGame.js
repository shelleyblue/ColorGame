var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var rgbTextDisplay = document.getElementById("display");
var msgDisplay = document.getElementById("msg");
var resetBtn = document.getElementById("resetBtn");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var h1 = document.querySelector("h1");
var pickedColor;
var colors = [];
var numSquares = 6;

fillUpColor(numSquares);
resetBtn.addEventListener("click", function(){
	fillUpColor(numSquares);
	h1.style.background = "steelblue";
	resetBtn.textContent = "New Colors"
	msgDisplay.textContent = "";
});

easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	fillUpColor(numSquares);
});

hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	fillUpColor(numSquares);
});

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function fillUpColor(num) {
	
	colors = [];
	for(var i = 0; i < num; i++){
		colors[i] = randomColor();
	}

	// pick a color
	pickedColor = colors[Math.floor(Math.random() * num)];
	rgbTextDisplay.textContent = pickedColor;

	//fill up the color to square
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		squares[i].addEventListener("click", function(){
			var color = this.style.background;
			if(color === pickedColor){
				msgDisplay.textContent = "Correct!";
				changeColor(pickedColor);
				h1.style.background = color;
				resetBtn.textContent = "Play Again?"
			}else{
				msgDisplay.textContent = "Try Again!";
				this.style.background = "#232323";
			}
		});
	}

	// set none display to remaining
	for (var j = num; j < squares.length; j++){
		squares[j].style.display = "none";
	}
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}