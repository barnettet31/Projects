var buttonClicked = null;
var textAreaValue = 0;
var textArea = document.querySelector(".textarea");


//This is a function that detects the button press and appends the inner text of the text-area div based on that input, then if the user clicks on the equal sign, it will run eval on the string.
document.querySelector(".button-div").addEventListener("click", function(event){
  buttonClicked = event.target.value;
  var textAreaLength = textArea.innerText.length - 1;
  var lastItem = textArea.innerText[textAreaLength];
  console.log(buttonClicked);
  if (buttonClicked == 0 || buttonClicked == 1 || buttonClicked == 2 || buttonClicked == 3 || buttonClicked == 4 || buttonClicked == 5 || buttonClicked == 6 || buttonClicked == 7 || buttonClicked == 8 || buttonClicked == 9) {
    textArea.append(buttonClicked);
  } else if (buttonClicked == "*" || buttonClicked == "-" || buttonClicked == "+" || buttonClicked == "/") {
    if (lastItem == "*" || lastItem == "/" || lastItem == "+" || lastItem == "-" || lastItem == null) {
      null;
    } else {
      textArea.append(buttonClicked);
    }
  } else if (buttonClicked == "clear") {
    textArea.innerHTML = null;
  } else if (buttonClicked == "=") {
    var x = document.querySelector(".textarea").innerHTML;
    var y = eval(x);
    document.querySelector(".textarea").innerHTML = y;
  } else if (buttonClicked == "percent") {
    var x = document.querySelector(".textarea").innerHTML;
    var y = eval(x) / 100;
    document.querySelector(".textarea").innerHTML = y;
  } else if (buttonClicked == "backspace") {
//This creates a substring x that goes from the start of the text in the display to the number character just before the end, then replaces the current string with that string
    var x= textArea.innerText.substr(0,textArea.innerText.length-1);
    textArea.innerText=x;
  } else if (buttonClicked == ".") {
    var textAreaLength = textArea.innerText.length - 1;
    var lastItem = textArea.innerText[textAreaLength];
    if (lastItem == 1 || lastItem == 2 || lastItem == 3 || lastItem == 4 || lastItem == 5 || lastItem == 6 || lastItem == 7 || lastItem == 8 || lastItem == 9 || lastItem == 0) {
      textArea.append(buttonClicked);
    } else if (lastItem == null || lastItem == "*" || lastItem == "/" || lastItem == "+" || lastItem == "-") {
      textArea.append("0.");
    } else {
      null;
    }
  } else {
    null;
  }
});
//
// var x = document.querySelector(".textarea").innerHTML;
// var y = eval(x) * (-1);
// document.querySelector(".textarea").innerHTML = y;

// || buttonClicked == 1 || buttonClicked == 2 || buttonClicked == 3 || buttonClicked == 4 || buttonClicked == 5 || buttonClicked == 6 || buttonClicked == 7 || buttonClicked == 8 || buttonClicked == 9 || buttonClicked == "+" || buttonClicked == "/" || buttonClicked == "-" || buttonClicked == "*"
