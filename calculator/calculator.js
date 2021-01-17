var buttonClicked=null;

document.querySelector(".button-div").addEventListener("click", function(event){
  buttonClicked=event.target.value;
  console.log(buttonClicked);
  if(buttonClicked==undefined){null}else{document.querySelector("textarea").innerHTML=buttonClicked;}

});
