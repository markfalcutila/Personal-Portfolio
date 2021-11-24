const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");


navbarToggle.addEventListener('click', ()=>{
    console.log("tanginamoka");
    navbarMenu.classList.toggle('active');

});