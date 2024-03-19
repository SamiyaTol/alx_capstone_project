let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let selection = document.querySelector('selection');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selection.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a' [href*=' + id +']).classList.add('active');
            })
        }
    })
}



menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}