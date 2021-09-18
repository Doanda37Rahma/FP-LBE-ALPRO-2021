const navToggle = document.querySelector(".toggle");
const links = document.querySelector(".links");
const welcome = document.querySelector(".welcome-container");
const colorToggle = document.querySelector(".color-toggle");
var root = document.documentElement;

window.addEventListener("DOMContentLoaded", function() {
  if (welcome.classList.contains("slide-on-click")) {
    welcome.classList.remove("slide-on-click")
  }
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  }  
})

welcome.addEventListener('click', function() {
  welcome.classList.toggle("slide-on-click");
})

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});


colors = [
  {
    id: 1,
    black: "#091109",
    white: "#f0fff0",
    gray: "#e8efe9",
    dark: "#005337",
    light: "#26e07f",
  },
  {
    id: 2,
    black: "#110909",
    white: "#e3e2df",
    gray: "#e3afdc",
    dark: "#5d001e",
    light: "#eefc7c",
  },
  {
    id: 3,
    black: "#25274d",
    white: "#fefefe",
    gray: "#aaabb8",
    dark: "#29648a",
    light: "#2e9cca",
  },
]


var prevScheme = 0;
colorToggle.addEventListener("click", function() {
  // console.log(rand);
  let rand = getRand(colors.length);
  if (prevScheme === rand) rand = getRand(colors.length);
  let colorScheme = colors[rand];
  prevScheme = rand;
  
  root.style.setProperty("--clr-dark", colorScheme.dark);
  root.style.setProperty("--clr-light", colorScheme.light);
  root.style.setProperty("--clr-black", colorScheme.black);
  root.style.setProperty("--clr-white", colorScheme.white);
  root.style.setProperty("--clr-gray", colorScheme.gray);
})

function getRand(n) {
  return Math.floor(Math.random() * n);
}