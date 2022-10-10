const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const nav = document.querySelector("nav");
let isOpen = false;

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");

//   nav.style.padding = "0";
//   nav.style.padding = "0";
});

// hamburger.addEventListener("click", () => {
//   if (isOpen) {
//     navItems.style.clipPath = "circle(800px at 50% 80%)";
//     // navItems.style.position ="fixed"
//     // nav.style.padding="0";
//     isOpen = false;
//   }else{
//     navItems.style.clipPath = "circle(10px at 50% -10%)";
//     // nav.style.padding="15px";
//     isOpen =true;
//   }
// });
