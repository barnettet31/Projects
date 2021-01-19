var buttonClicked = null;
var textAreaValue = 0;
var textArea = document.querySelector(".textarea");

//This is a function that detects the button press and appends the inner text of the text-area div based on that input, then if the user clicks on the equal sign, it will run eval on the string.
document.querySelector(".button-div").addEventListener("click", function(event) {
    buttonClicked = event.target.value;
    console.log(buttonClicked);
    switch (buttonClicked) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        textArea.append(buttonClicked);
        break;
      case "*":
      case "+":
      case "-":
      case "/":
        var textAreaLength = textArea.innerText.length - 1;
        var lastItem = textArea.innerText[textAreaLength];
        switch (lastItem) {
          case "*":
          case "+":
          case "-":
          case "/":
          case ".":
            null;
            break;
          default:
            textArea.append(buttonClicked);
        }
        case "clear":
          textArea.innerHTML = null;
          break;
        case "=":
          var x = document.querySelector(".textarea").innerHTML;
          var y = eval(x);
          document.querySelector(".textarea").innerHTML = y;
          break;
        case ".":
          var textAreaLength = textArea.innerText.length - 1;
          var lastItem = textArea.innerText[textAreaLength];
          switch (lastItem) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
              textArea.append("buttonClicked");
              break;
            case null:
            case "*":
            case "+":
            case "-":
            case "/":
            case ".":
              textArea.append("0.");
              break;
            default:
              null;
          }
          case "percent":
            var x = document.querySelector(".textarea").innerHTML;
            var y = eval(x) / 100;
            document.querySelector(".textarea").innerHTML = y;
            break;
          case "sign-change":
            var x = document.querySelector(".textarea").innerHTML;
            var y = eval(x) * (-1);
            document.querySelector(".textarea").innerHTML = y;
            break;
          default:
            null;
    };
  }

);
