const button=document.querySelector(".menu-btn");
const hiddenMenu=document.querySelector(".hidden-menu");


function showMenu(){
    let buttonText=button.innerHTML;
    alert(
        buttonText
    );
    if(buttonText=="Menu"){
        button.innerHTML="Close";
    }else if (buttonText=="Close"){
        button.innerHTML="Menu";
    }
    
   

}

button.addEventListener("click" , showMenu);


