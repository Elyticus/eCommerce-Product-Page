const menuNavbar = document.getElementById("menuNavbar");
const closeButton = document.getElementById("closeBtn");
const menuList = document.getElementById("menuList");
const navBar = document.getElementById("navBar");
const cartButton = document.getElementById("cartNavbar");
const cartMenu = document.getElementById("cartAddButtonNavbar");
const closePictureBtn = document.getElementById("closeProductBtn");
const productSection = document.getElementById("productSection");
const pictures = document.querySelectorAll(".picture_catalog");
const sliderType = document.getElementById("sliderType");
const arrowNext = document.getElementById("arrowNext");
const arrowPrev = document.getElementById("arrowPrev");

menuNavbar.addEventListener("click", () => {
  document.body.classList.toggle("isBlur");
  navBar.classList.toggle("navbar");
});

closeButton.addEventListener("click", () => {
  navBar.classList.toggle("navbar");
  document.body.classList.toggle("isBlur");
});

cartButton.addEventListener("click", () => {
  cartMenu.classList.toggle("cart-container");
});

function showImage(index) {
  pictures.forEach((picture, i) => {
    if (i === index) {
      picture.style.display = "block";
      sliderType.style.display = "block";
      productSection.style.display = "block";
      arrowNext.style.display = "block";
      arrowPrev.style.display = "block";
    } else {
      picture.style.display = "none";
    }
  });
}

closePictureBtn.addEventListener("click", () => {
  productSection.style.display = "none";
});
