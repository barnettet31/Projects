const hamburger=document.getElementById('hamburger');
const change=()=>
{

document.querySelector('#hamburger').classList.toggle('change');
document.querySelector('#sidemenu').classList.toggle('slide');
}
hamburger.addEventListener('touchstart',change);
