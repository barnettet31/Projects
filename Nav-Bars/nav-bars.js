const button=document.querySelector(".menu-btn");
const hiddenMenu=document.querySelector(".hidden-menu");


function showMenu(){
    var buttonText=button.innerHTML;
    var menu="Menu";
    var closed="Close";
   
   if(buttonText=menu){
       button.innerHTML=closed;
   } else {
    button.innerHTML="Menu";
   }

}

button.addEventListener("click" , showMenu);


