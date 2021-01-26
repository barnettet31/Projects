var textAreaValue=0;
var toDoListAdd=0;

var textArea=document.querySelector("textarea");


document.querySelector(".submit").addEventListener("click", grabTextArea);



function grabTextArea(){
  textAreaValue=textArea.value;
  createTasks(textAreaValue);
  textArea.value=null;
}
function createTasks(input){
 if(input===""){
   null;
 }
 else{
   const newDiv=document.createElement("div");
   newDiv.classList.add("list");
   const newDivText=document.createTextNode(input);
   newDiv.appendChild(newDivText);

   document.querySelector(".list-div").appendChild(newDiv);}
var numberOfListItems=document.querySelectorAll(".list").length;
   for (var i=0;i<numberOfListItems;i++){
     document.querySelectorAll(".list")[i].setAttribute("id", "newList:"+i);
   }
   createDeleteButton();
}

function createDeleteButton(){
  const deleteButton=document.createElement("div");
  deleteButton.classList.add("delete-button");
  const deleteText=document.createTextNode("Done");
  deleteButton.appendChild(deleteText);
  var numberOfItems=document.querySelectorAll(".list").length;
    for(var i=0;i<numberOfItems;i++){
      document.querySelectorAll(".list")[i].appendChild(deleteButton);




  }
  addDeleteFunction();

}
function deleteButton(){
  var buttonClicked=event.target;
  buttonClicked.classList.add("added-delete-button");
  var listItem=buttonClicked.closest(".list");
  listItem.remove();

}

function addDeleteFunction(newDeleteButton){
var numberOfDeleteButtons=document.querySelectorAll(".delete-button").length;
var numberOfButtons=document.querySelectorAll(".added-delete-button").length;


  for(i=0; i<numberOfDeleteButtons; i++){
  document.querySelectorAll(".delete-button")[i].addEventListener("click", deleteButton);
}

}


// This function grabs the text in the text area when the button is clicked
