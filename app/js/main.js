$(function () {

    fetch("./html/header.html") //adding HTML page (header) in general page (index)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
    });

});

function burgerMenu() {     //burger & locked header
    const body = document.querySelector('body');
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.burger');
    burger.onclick = () => {
        if (!menu.classList.contains('--active')) {
            menu.classList.add('--active');
            burger.classList.add('--active-burger');
            body.classList.add('locked');
        } else {
            menu.classList.remove('--active');
            burger.classList.remove('--active-burger');
            body.classList.remove('locked');
        }
    };
    window.addEventListener('resize', () => {
        if (window.innerWidth > 770) {
            menu.classList.remove('--active');
            burger.classList.remove('--active-burger');
            body.classList.remove('locked');
        }
    })
}

function fixedNav() { //scrolling nav fixing
    const nav = document.querySelector('nav');
    const breakpoint = 1;
    if (window.scrollY >= breakpoint)
        nav.classList.add('fixed__nav');
    else
        nav.classList.remove('fixed__nav');
}
window.addEventListener('scroll', fixedNav);