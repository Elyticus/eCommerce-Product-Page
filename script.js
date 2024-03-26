const menuNavbar = document.getElementById("menu-navbar");
const menuList = document.getElementById("menuNavbar");
const closeButton = document.getElementById("closeBtn");

menuNavbar.addEventListener("click", () => {
  closeButton.classList.toggle("close-btn");
  menuList.classList.toggle("menu");
});

closeButton.addEventListener("click", () => {
  menuList.classList.toggle("menu");
});
