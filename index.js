 
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  var topbutton = document.getElementById("topBtn");
      const bibi = document.querySelector(".bibi");

//topButton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
     
        //Burger Animation
        burger.classList.toggle("toggle");
    })
    bibi.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
     
        //Burger Animation
        burger.classList.toggle("toggle");
    })
       

 
    
  
         document.querySelector('.theme-toggle-btn').addEventListener('click', () => {
        document.body.classList.toggle('purple')
    });
    
}
// functionnavSlideBack(){
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");
  
//   burger.addEventListener("click", () => {
//     //Toggle Nav
//     nav.classList.toggle("nav-active");
//   });
// }
const app = () => {
    navSlide();
}
app()

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
