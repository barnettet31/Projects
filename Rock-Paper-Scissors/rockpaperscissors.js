var submitButton=document.querySelector(".submit");
var inputField=document.querySelector("input");
var userInput="";
submitButton.addEventListener("click",alertTest);
var computerInput=function(){
    let x=math.floor(Math.random()*3+1);
    if(x==1){
        return "scissors";
        alert("scissors")
    }else if(x==2){
        return "paper";
        alert("paper")
    }else{
        return "rock";
        alert("rock");
    }
}

console.log(computerInput);
function alertTest(){
    let x=inputField.value;
    let regex=/[^a-z]/gi;
    let y=x.replace(regex,"");
    
    if(y=="rock"||y=="paper"||y=="scissors"){
        userInput=y;
         
    }else{
        alert("Please enter a valid input.");
       
    }
    inputField.value="";
}

function comparison(userInput,computerInput){
    
}