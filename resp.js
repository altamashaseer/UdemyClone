burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-resp');
    navlist.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');
})