 const HAMBURGER = document.querySelector(".hamburger");
 const MOBILEMENU = document.querySelector(".nav-list ul");
 const HEADER = document.querySelector(".header");
 const UL = document.querySelectorAll(".nav-list ul li a")

 HAMBURGER.addEventListener("click", function() {
     HAMBURGER.classList.toggle("active");
     MOBILEMENU.classList.toggle("active");
 }); //this adds a class called active on the 
 console.log(HAMBURGER, MOBILEMENU, UL);




 MOBILEMENU.addEventListener("click", function() {
     HEADER.classList.toggle("active");
 });

 document.addEventListener("scroll", function() {
     var scroll = window.scrollY;
     if (scroll > 250) {
         HEADER.style.backgroundColor = "rgb(2, 13, 15)";
     } else {
         HEADER.style.backgroundColor = "transparent";
     }
 });

 UL.forEach(item => {
     item.addEventListener("click", function() {
         HAMBURGER.classList.toggle("active");
         MOBILEMENU.classList.toggle("active");
     })
 })