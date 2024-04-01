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
const prevButton = document.getElementById("arrowPrev");
const nextButton = document.getElementById("arrowNext");

menuNavbar.addEventListener("click", () => {
  document.body.classList.toggle("isBlur");
  navBar.classList.toggle("navbar");
  productSection.style.zIndex = "-99";
});

closeButton.addEventListener("click", () => {
  navBar.classList.toggle("navbar");
  document.body.classList.toggle("isBlur");
  productSection.style.zIndex = "99";
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
      nextButton.style.display = "block";
      prevButton.style.display = "block";
    } else {
      picture.style.display = "none";
    }
  });
}

closePictureBtn.addEventListener("click", () => {
  productSection.style.display = "none";
});

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the arrow buttons

  // Get references to the images
  const images = document.querySelectorAll(".picture_catalog");

  let currentIndex = 0; // Initialize the current index

  // Add click event listener to the previous button
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Calculate the new index
    showImage(currentIndex); // Show the image at the new index
  });

  // Add click event listener to the next button
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length; // Calculate the new index
    showImage(currentIndex); // Show the image at the new index
  });

  // Function to show the image at a specific index
  function showImage(index) {
    // Hide all images
    images.forEach(function (img) {
      img.style.display = "none";
    });
    // Show the image at the given index
    images[index].style.display = "block";
  }
});
