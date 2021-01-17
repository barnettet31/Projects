var buttonClicked = null;
var textAreaValue=0;

document.querySelector(".button-div").addEventListener("click", function(event) {
  buttonClicked = event.target.value;
  var textArea = document.querySelector(".textarea");
  console.log(buttonClicked);
  if (buttonClicked == 0 || buttonClicked == 1 || buttonClicked == 2 || buttonClicked == 3 || buttonClicked == 4 || buttonClicked == 5 || buttonClicked == 6 || buttonClicked == 7 || buttonClicked == 8 || buttonClicked == 9) {
    textArea.append(buttonClicked);
  } else if (buttonClicked == "clear") {
    textArea.innerHTML= null;
  } else if(buttonClicked=="+"||buttonClicked=="/"||buttonClicked=="-"||buttonClicked=="*"){
    textArea.append(buttonClicked);}else if(buttonClicked=="="){calculate();}else {
    null;
  }

});

// function calculate(){
// textAreaValue=  document.querySelector("textarea").value;
// var x=/g \d;
// console.log(x);
//
//
//
// }
