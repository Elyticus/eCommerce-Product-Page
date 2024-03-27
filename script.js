const menuNavbar = document.getElementById("menuNavbar");
const closeButton = document.getElementById("closeBtn");
const menuList = document.getElementById("menuList");
const navBar = document.getElementById("navBar");

menuNavbar.addEventListener("click", () => {
  // closeButton.classList.toggle("close_btn");
  // menuList.classList.toggle("menu_items");

  navBar.classList.toggle("navbar");
});

closeButton.addEventListener("click", () => {
  navBar.classList.toggle("navbar");
});
