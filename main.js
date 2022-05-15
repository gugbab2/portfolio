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
    navbarMenu.classList.remove('open');
    scroll(link);
});

//navbar 반응형 토글
const navberToggleButton = document.querySelector('.navbar__toggle-btn');
navberToggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
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

//프로젝트 분리
const workButtonContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workButtonContainer.addEventListener('click', (e)=> {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null)return;
    projectContainer.classList.add('animation');
    // 같은 애니매이션을 넣는 타이밍에 따라서 달라진다. 
    // projects.forEach((ele,idx)=>{
    //     if(filter === '*' || filter === ele.dataset.type){
    //         ele.classList.remove('invisible')
    //     }else{
    //         ele.classList.add('invisible')
    //     }
    // });
    setTimeout(() => {
        projects.forEach((ele,idx)=>{
            if(filter === '*' || filter === ele.dataset.type){
                ele.classList.remove('invisible')
            }else{
                ele.classList.add('invisible')
            }
        });
        projectContainer.classList.remove('animation');
    }, 300);
});
