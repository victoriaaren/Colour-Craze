//Default start with 6!
var num = 6;
var cols = createCols(6);

var squares = document.querySelectorAll(".square");
//random index between 0-5
var correctCol = cols[Math.floor(Math.random() * num)];
var picked = false;
var colDis = document.getElementById("colDis");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var newColButton = document.querySelector("#reset");
var newColDis = document.querySelector("#resetDis");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

hardButton.classList.add("select");
easyButton.classList.remove("select");

//generates all new colors, and a new color is picked
newColButton.addEventListener("click", function(){
	setSquares(num);
	this.style.background = "ivory";
	msg.textContent = "";
	resetDis.textContent = "New Colours";
	
})

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("select");
	easyButton.classList.add("select");
	num = 3;
	setSquares(num);

	//since it's default 6 squares, must say if 
	//the squares are actually in the game, show them, otherwise don't
	squares[3].style.background = "white";
	squares[4].style.background = "white";
	squares[5].style.background = "white";
})

hardButton.addEventListener("click", function(){
	hardButton.classList.add("select");
	easyButton.classList.remove("select");
	num = 6;
	setSquares(num);
})


colDis.textContent = correctCol;


for(var i = 0; i < squares.length; i++){
	//initialize squares
	squares[i].style.background = cols[i];

	//click events
	squares[i].addEventListener("click", function(){
		var clickedCol = this.style.background;
		//if you get the right one!
		if(clickedCol === correctCol){
			msg.textContent="Correct!";
			h1.style.background = clickedCol;
			changeColor(clickedCol);
			resetDis.textContent = "PLAY AGAIN";
		}
		//wrong one
		else{
			this.style.background = "white";
			msg.textContent="Try Again!";

		}
	});
}

function changeColor(color){
	for(var i = 0; i< cols.length; i++){
		squares[i].style.background = color;
	}
}

function createCols(num){
	var result = []
	for(var i = 0; i<num; i++){
		var r= Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		colString = "rgb("+r+", "+g+", "+b+")";
		console.log(colString);
		result.push(colString);
	}
	return result;
}

function setSquares(number){
	cols = createCols(number);
	correctCol = cols[Math.floor(Math.random() * number)];
	colDis.textContent = correctCol;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = cols[i];
	}
	h1.style.background = "#ADD8E6";
	newColButton.style.background = "lightpink";

}