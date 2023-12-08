
// Creating a responsive navigation bar
// Variables
const menu = document.querySelector('.menu i');
const nav = document.querySelector('.nav-container');
menu.addEventListener('click', () =>{
    nav.classList.toggle('active')
    if(menu.className === 'fa-solid fa-bars'){
        menu.className = "fa-solid fa-xmark";
    }else{
        menu.className = "fa-solid fa-bars" ;
    }
})



// add shadow to header on scroll
const theHeader = document.querySelector('.header');

window.addEventListener('scroll', () =>{
    theHeader.classList.toggle('scroll-shadow', window.scrollY > 0)
})
// using json to fetch data
// dark light togggle

const darkBtn = document.querySelector('.dark-light i')

darkBtn.addEventListener('click', () =>{

    document.body.classList.toggle('dark-theme');
    if(darkBtn.className === 'fa-solid fa-moon'){
        darkBtn.className = 'fa-solid fa-sun';
    }else{
        darkBtn.className = 'fa-solid fa-moon';

    }

    
})