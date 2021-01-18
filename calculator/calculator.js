var buttonClicked = null;
var textAreaValue = 0;

//This is a function that detects the button press and appends the inner text of the text-area div based on that input, then if the user clicks on the equal sign, it will run eval on the string.
document.querySelector(".button-div").addEventListener("click", function(event) {
  buttonClicked = event.target.value;
  var textArea = document.querySelector(".textarea");
  console.log(buttonClicked);
  if (buttonClicked==0|| buttonClicked == 1 || buttonClicked == 2 || buttonClicked == 3 || buttonClicked == 4 || buttonClicked == 5 || buttonClicked == 6 || buttonClicked == 7 || buttonClicked == 8 || buttonClicked == 9 || buttonClicked == "*" || buttonClicked == "-" || buttonClicked == "+" || buttonClicked == "/") {
    textArea.append(buttonClicked);
  } else if (buttonClicked == "clear") {
    textArea.innerHTML = null;
  } else if (buttonClicked == "=") {
    var x = document.querySelector(".textarea").innerHTML;
    var y = eval(x);
    document.querySelector(".textarea").innerHTML = y;
  } else if (buttonClicked=="percent"){
    var x = document.querySelector(".textarea").innerHTML;
    var y=eval(x)/100;
    document.querySelector(".textarea").innerHTML=y;
  }else if(buttonClicked=="sign-change"){
    var x = document.querySelector(".textarea").innerHTML;
    var y=eval(x)*(-1);
    document.querySelector(".textarea").innerHTML=y;

  }else {
    null;
  }

});


// || buttonClicked == 1 || buttonClicked == 2 || buttonClicked == 3 || buttonClicked == 4 || buttonClicked == 5 || buttonClicked == 6 || buttonClicked == 7 || buttonClicked == 8 || buttonClicked == 9 || buttonClicked == "+" || buttonClicked == "/" || buttonClicked == "-" || buttonClicked == "*"
