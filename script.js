const menuNavbar = document.getElementById("menuNavbar");
const closeButton = document.getElementById("closeBtn");
const menuList = document.getElementById("menuList");
const navBar = document.getElementById("navBar");

menuNavbar.addEventListener("click", () => {
  document.body.classList.toggle("isBlur");
  navBar.classList.toggle("navbar");
});

closeButton.addEventListener("click", () => {
  navBar.classList.toggle("navbar");
  document.body.classList.toggle("isBlur");
});
