

// Home Page ...................................

var typed = new Typed(".word", {
    strings: ["Web Designer", "Frontend Developer", "UX/UI Designer"],
    typeSpeed: 200,
    backSpeed:150,
    loop:true
});



// Skills - Professional - circle..Right side................

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var point = "";
    var rotate = 360 / dots;

    for(let i=0; i<dots; i++){
        point += `<div class="point" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML= point;

    const pointsMarked = elem.querySelectorAll(".point");
    for(let i = 0; i<percent; i++){
        pointsMarked[i].classList.add('marked');
    }
})


// portfolio section by clicking on word

var mixer = mixitup('.portfolio-gallery');


//  creative menu ..............................
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);



// navlist after they having display size of 768ps

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}



// to make more up come effect on full portfolio


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
})

const  scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((ele) => observer.observe(ele));

const  scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((ele) => observer.observe(ele));

const  scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((ele) => observer.observe(ele));














