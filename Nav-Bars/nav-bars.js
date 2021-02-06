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


