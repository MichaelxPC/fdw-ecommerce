const mainContainer = document.getElementById("main-container");
const navbar = document.getElementById("nav-bar");
const navItems = document.getElementsByClassName("nav-items");
const switchNav = document.getElementById("switch-navbar");

switchNav.addEventListener("click", () => {
  navbar.classList.toggle("close");
  mainContainer.classList.toggle("home");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("close-text");
  }
});
