import data from "./data.js";

const menuNavbar = document.getElementById("menuNavbar");
const closeButton = document.getElementById("closeBtn");
const navBar = document.getElementById("navBar");
const cartButton = document.getElementById("cartNavbar");
const cartMenu = document.getElementById("cartAddButtonNavbar");
const closePictureBtn = document.getElementById("closeProductBtn");
const productSection = document.getElementById("productSection");
const pictures = document.querySelectorAll(".picture_catalog");
const sliderType = document.getElementById("sliderType");
const prevButton = document.getElementById("arrowPrev");
const nextButton = document.getElementById("arrowNext");
const productQuantity = document.getElementById("productQuantity");
const plusButton = document.getElementById("plusBtn");
const minusButton = document.getElementById("minusBtn");
const addCartButton = document.getElementById("addCartButton");
const cartMessage = document.getElementById("cartMessage");
const cartNav = document.getElementById("displayCartProduct");
const displayCartItems = document.querySelector(".display_items");
const thumbnailButtons = document.querySelectorAll(".thumbnail-image-button");
const thumbnailSlider = document.querySelectorAll(".slider");

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

closePictureBtn.addEventListener("click", () => {
  productSection.style.display = "none";
});

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0; // Initialize the current index

  // Add click event listener to the previous button
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length; // Calculate the new index
    showImage(currentIndex); // Show the image at the new index
  });

  // Add click event listener to the next button
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % pictures.length; // Calculate the new index
    showImage(currentIndex); // Show the image at the new index
  });
});

// Add event listener to each button
thumbnailButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showImage(index);
  });
});

thumbnailSlider.forEach((button, index) => {
  button.addEventListener("click", () => {
    showImage(index);
  });
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

// Add to cart function____________________________________________________

let quantity = 0;

productQuantity.innerText = quantity;

function updateQuantity(value) {
  quantity += value;
  productQuantity.innerText = quantity;
}

plusButton.addEventListener("click", () => {
  updateQuantity(1);
});

minusButton.addEventListener("click", () => {
  if (quantity > 0) {
    updateQuantity(-1);
  }
});

addCartButton.addEventListener("click", () => {
  const { img, title, price, deleteBtn } = data;

  if (quantity > 0) {
    cartMessage.style.marginTop = 0;
    cartMessage.innerHTML = `
     <div class="cart_info">
     <img class="cart_info_image" src=${img} />
     <div>
     <p class="cart_product_title">${title}</p>
     <div class="cart_product_price"><p>
       $${price} x ${quantity.toString()} <span class="total">$
       ${(price * quantity).toFixed(2)}
       </span>
     </p>

     <img id="deleteBtn" class="delete_btn" src=${deleteBtn} />
    </div>
     </div>
     </div>
     <button class="checkout_btn">Checkout</button>
     `;

    cartNav.innerText = quantity.toString();
    displayCartItems.style.display = "block";
    updateQuantity(-quantity);

    const deleteCartBtn = document.getElementById("deleteBtn");

    deleteCartBtn.addEventListener("click", () => {
      cartMessage.innerText = "Your Cart is empty";
      displayCartItems.style.display = "none";
      updateQuantity(-quantity);
      cartMessage.style.marginTop = "3em";
    });
  }
});
