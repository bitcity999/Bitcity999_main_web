// .......... Data Library ..........
const navToggleBtn = document.getElementById("nav-toggle-btn")
const navModal = document.getElementById("modal")
const header = document.getElementById("header");
const main = document.getElementById("main");
const plansFltrbtn = document.getElementById("plans-switch")
const basicPl = document.getElementById("basic")
const standardPl = document.getElementById("standard")
const premiumPl = document.getElementById("premium")
const navLinks = document.querySelector(".nav-links")
const hLogo = document.querySelector(".h-logo")
const backToTop = document.querySelector(".back-to-top")
const footer = document.querySelector("footer")
const dots = document.querySelectorAll(".dot"); 
const hideModalLink = document.querySelectorAll(".hide-modal")
const slides = document.getElementsByClassName("slide");
const sticky = header.offsetTop;

window.onscroll = function() {myFunction(), bTTBtnCheck(), ftClashCheck()};

// .......... Header Nav links ...........

navToggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show-nav")
    navToggleBtn.classList.toggle("butt-rot")
})

// .......... Header ..........

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    main.style.marginTop = "12vh";
  } else {
    header.classList.remove("sticky");
    main.style.marginTop = "5vh"
  }
}

// ............ Back To Top Button .............

function bTTBtnCheck() {
  if (window.pageYOffset > main.offsetTop) { 
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
}

// ............ Footer Clash Check .............

function ftClashCheck() {
  if(window.scrollY >= footer.offsetTop + footer.offsetHeight - window.innerHeight) {
    backToTop.style.bottom = "8%"
  }
  else {
    backToTop.style.bottom = "3%"
  }
}

// ............ Slide Show ............ 

var slideIndex = 0;
var i;
showIntroSlides();

function showIntroSlides() {
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].className += " active";
    dots[slideIndex-1].className += " active";
    setTimeout(showIntroSlides, 5000);
}

// ............. Modal Hide / Show ............

function hide(modal) {
  modal.style.visibility = "hidden"
  modal.style.opacity = "0"
}

function show(modal) {
  modal.style.visibility = "visible"
  modal.style.opacity = "1"
}

// ............ Hide Modal Link ........... 

hideModalLink.forEach( function (link) {
  link.addEventListener("click", function () {
    hide(navModal)
  })
})

// ............ Pricing Filter ............

plansFltrbtn.addEventListener("click", function () {
  if (plansFltrbtn.classList.contains("active")) {
    plansFltrbtn.classList.remove("active")
    basicPl.innerHTML = monthlyPlans.basic
    standardPl.innerHTML = monthlyPlans.standard
    premiumPl.innerHTML = monthlyPlans.premium
  } else {
    plansFltrbtn.classList.add("active")
    basicPl.innerHTML = permanentPlans.basic
    standardPl.innerHTML = permanentPlans.standard
    premiumPl.innerHTML = permanentPlans.premium
  }
})

