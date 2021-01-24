var firstDiceRoll = 0;
var secondDiceRoll = 0;
var audio = new Audio("sounds/rolldice.mp3");
var randomDiceImage = 0;
var playerOneName=0;
var playerTwoName=0;

//This function assigns player names so that it isn't just "player 1" or "player 2"
function assignPlayerNames(){
  playerOneName=prompt("Player one, what is your name?");
  playerTwoName=prompt("Player two, what is your name?");
  document.querySelectorAll("h2")[0].innerText=playerOneName+" Score:";
  document.querySelectorAll("h2")[1].innerText=playerTwoName+" Score:";
  return playerOneName;
  return playerTwoName;
}
assignPlayerNames();




function playAudio() {
  audio.play(audio);
}

function randomNumber() {
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
}


function roll() {
  firstDiceRoll = randomNumber();
  secondDiceRoll = randomNumber();
}
//function that changes the dice images//
function imageChanger() {
  var firstDiceImage = "images/dice" + firstDiceRoll + ".png";
  var secondDiceImage = "images/dice" + secondDiceRoll + ".png";
  //*This Script changes the image of the di//
  document.querySelector(".first-dice").setAttribute("src", firstDiceImage);
  document.querySelector(".second-dice").setAttribute("src", secondDiceImage);
}

function comparisonOfThePhotos() {
  //This function Compares the Dice and Announces the winner in the h1 and adds one to the counter in the table below/
  if (firstDiceRoll > secondDiceRoll) {
    document.querySelector(".victor").innerText = playerOneName+ " is the winner!";
    let x = document.querySelector(".player-one-score").innerText
    x++;
    document.querySelector(".player-one-score").innerText = x;
  } else if (firstDiceRoll < secondDiceRoll) {
    document.querySelector(".victor").innerText = playerTwoName+ " is the winner!";
    let y = document.querySelector(".player-two-score").innerText
    y++;
    document.querySelector(".player-two-score").innerText = y;
  } else {
    document.querySelector(".victor").innerText = "You both suck equally.";
    let z = document.querySelector(".number-of-ties").innerText
    z++;
    document.querySelector(".number-of-ties").innerText = z;
  }


}
//function that puts all the others together and adds a delay so that the final result doesn't pop up until the transformation
function winnerRoll() {

  setTimeout(roll, 0);
  setTimeout(comparisonOfThePhotos, 6000);
  playAudio();
  setTimeout(imageChanger,6000)
}

//Dice Animation Non-Sense//
function rotateDice() {
  document.querySelectorAll(".dice-image")[0].classList.add("dice-animation");
  document.querySelectorAll(".dice-image")[1].classList.add("dice-animation");
}

function removeRotateDice() {
  document.querySelectorAll(".dice-image")[0].classList.remove("dice-animation");
  document.querySelectorAll(".dice-image")[1].classList.remove("dice-animation");
  document.querySelectorAll(".dice-image")[0].classList.add("dice-animation-return");
  document.querySelectorAll(".dice-image")[1].classList.add("dice-animation-return");

}
//this function removes the return dice animation so that the on click event does something again.
function removeReturnClass() {
  document.querySelectorAll(".dice-image")[0].classList.remove("dice-animation-return");
  document.querySelectorAll(".dice-image")[1].classList.remove("dice-animation-return");
}
document.querySelector(".button").addEventListener("click", winnerRoll);
document.querySelector(".button").addEventListener("click", rotateDice);
document.querySelector(".button").addEventListener("click", function() {
  setTimeout(removeRotateDice, 3000);
  setTimeout(removeReturnClass, 6000)
});

//Created a for loop to take care of the cycling so that I don't have to set an interval
document.querySelector(".button").addEventListener("click", function(){
for(i=50; i<5950;i+=225){
  setTimeout(diceCycler,i);
};}
);
//function to do the number swapping effect using a if statement

function diceCycler() {
  var x = document.querySelectorAll("img")[0].classList[2];
  var y=randomNumber();

  if (  x == "dice-animation"|| x=="dice-animation-return") {
    document.querySelectorAll(".dice-image")[0].setAttribute("src", "images/dice"+y+ ".png" );
    document.querySelectorAll(".dice-image")[1].setAttribute("src", "images/dice"+y+ ".png" );
  } else {
    null
  }
}
