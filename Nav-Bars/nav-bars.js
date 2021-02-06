const button=document.querySelector(".menu-btn");
const hiddenMenu=document.querySelector(".hidden-menu");


function showMenu(){
    let buttonText=button.innerHTML;
    alert(
        buttonText
    );
    
   

}

button.addEventListener("click" , showMenu);


