'use scrict';
// Navbar 를 스크롤에 따라서 투명하게 만들기!
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

function scroll (target) {
    const scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView({behavior:"smooth"});
}

//Navbar 스크롤 이벤트
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scroll(link);
});

//contact me 스크롤 이벤트
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', ()=>{
    scroll('#contant');
});

//home opacity 이벤트
const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1-window.scrollY/homeheight;
});

//첫번째로 돌아가는 버튼 이벤트
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener("scroll", () => {
    if(window.scrollY > homeheight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});
arrowUp.addEventListener('click', () => {
    scroll('#home');
});

