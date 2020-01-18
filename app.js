
var numSquares = 6;
var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var button = document.querySelector("#button");
var dash = document.querySelector(".dash");
var hard = document.querySelector(".hard");
var easy = document.querySelector(".easy");

easy.addEventListener("click", function(){
  numSquares = 3;
  easy.classList.add("selected");
  hard.classList.remove("selected");
  colors = generateColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i = 0 ; i < squares.length ; i++)
  {
    if(colors[i])
    {
      squares[i].style.background = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

hard.addEventListener("click", function(){
  numSquares = 6;
  hard.classList.add("selected");
  easy.classList.remove("selected");
  colors = generateColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i = 0 ; i < squares.length ; i++)
  {

      squares[i].style.background = colors[i];

      squares[i].style.display = "block";

  }
});

button.addEventListener("click", function(){
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.color = 'white';
  messageDisplay.textContent = "";
  button.textContent = 'New Colors';
  h1.style.background = "#232323";
  dash.style.background = "white";


  for(var i = 0 ; i < squares.length ; i++)
  {
    squares[i].style.background = colors[i];
  }
});

var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for(var i = 0 ; i < squares.length ; i++)
{
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;

    if(clickedColor === pickedColor)
    {
      messageDisplay.textContent = "Correct"
      button.textContent = "Try Again";
      h1.style.color = clickedColor;
      dash.style.background = clickedColor;

      for(var j = 0 ; j < squares.length ; j++)
      {
        squares[j].style.background = clickedColor;
      }

    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Wrong"
      messageDisplay.style.color = "#232323"
    }




  });
}


function pickColor(){
  var randColor = Math.floor(Math.random()*colors.length)
  return colors[randColor];
}

function generateColors(num){
  var arr = [];
for(var i = 0 ; i < num ; i++)
{
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var newColor = "rgb(" + red +", " + green + ", " + blue + ")";
  arr.push(newColor);
}
  return arr;
}
