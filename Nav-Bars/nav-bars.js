const button = document.querySelector(".menu-btn");
const hiddenMenu = document.querySelector(".hidden-menu");


function showMenu() {
    let buttonText = button.innerHTML;
    if (buttonText == "Menu") {
        button.innerHTML = "Close";
        hiddenMenu.classList.add("flex");

    } else if (buttonText == "Close") {
        button.innerHTML = "Menu";
        hiddenMenu.classList.remove("flex");
    }



}
button.addEventListener("click", showMenu);

var slidesArray=[
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',

]
// function slideshow(){

//     for(var i=0; i<slidesArray.length-1;i++){

//     }
// }