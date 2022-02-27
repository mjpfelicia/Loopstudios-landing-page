const menu = document.querySelector(".nav-menu");
const conteudoNav = document.querySelector(".conteudo-nav");
const conteudoIcon = document.querySelector(".menu-icon");
const body = document.body;

menu.addEventListener("click", function () {
  if (conteudoNav.classList.contains("active")) {
    conteudoNav.classList.remove("active");
    conteudoIcon.src = "images/icon-hamburger.svg"
    body.style.overflow = "auto"

  } else {
    conteudoNav.classList.add("active");
    conteudoIcon.src = "images/icon-close.svg"
    body.style.overflow = "hidden";
  }
});