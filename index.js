const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
var topbutton = document.getElementById("topBtn");
//topButton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}


//Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
       
        //Animate Links
    navLinks.forEach((link, index) => {
        if (((link.style.animation) && (nav.style.display === "flex" )) && (window.matchMedia("(max-width: 700px)").matches)) {
            link.style.animation = '';
             nav.style.display = "none";
               nav.style.right = "0px"; 
            
        }
 
            
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4  + 0.5}s`;
            nav.style.display = "flex";
           nav.style.right = "50%"; 
        }
       
    })


        //Burger animation
        burger.classList.toggle('toggle');
    })
    document.querySelector('.theme-toggle-btn').addEventListener('click', () => {
        document.body.classList.toggle('purple')
    })
    
}
const app = () => {
    navSlide();
}

app()
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}