function showCategory(category) {
  const allMenus = document.querySelectorAll(".menu-container");
  allMenus.forEach((menu) => {
    menu.style.display = "none";
  });

  const selectedMenu = document.getElementById(category);
  if (selectedMenu) {
    selectedMenu.style.display = "block";
  }
}
//Cart
const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");
const closeCartIcon = document.getElementById("close-cart-icon");
cartIcon.addEventListener("click", function () {
  console.log("Cart icon clicked!");
  cart.style.right = "0";
});

//Closing cart
closeCartIcon.addEventListener("click", function () {
  cart.style.right = "-100%";
});

//Delivery Postcodes
document.addEventListener("DOMContentLoaded", function () {
  const deliveryPostcodes = ["M12", "M13"];

  function checkDelivery() {
    const postcodeInput = document.getElementById("postcode").value.trim();
    const messageDiv = document.getElementById("deliveryMessage");
    const categoryButtons = document.getElementById("categoryButtons");

    const canDeliver = deliveryPostcodes.some((postcode) =>
      postcodeInput.startsWith(postcode)
    );

    if (canDeliver) {
      messageDiv.textContent =
        "We can delivery to your area! Delivery will take 45mins.";
      messageDiv.style.color = "green";
      categoryButtons.style.display = "block";
    } else {
      messageDiv.textContent =
        "Delivery not available, but you can pick up your order.";
      messageDiv.style.color = "red";
      categoryButtons.style.display = "none";
    }
  }
  const deliveryButton = document.getElementById("checkDelivery");
  deliveryButton.addEventListener("click", checkDelivery);
});

//Register
const registerForm = document.getElementById("register-form");
const registerLink = document.getElementById("register-link");
const closeFormBtn = document.getElementById("close-form-btn");

registerLink.addEventListener("click", function (event) {
  event.preventDefault(); 
  registerForm.style.right = "0"; 
});

// Close the form
closeFormBtn.addEventListener("click", function () {
  registerForm.style.left = "-100%"; 
});

//Login
const loginForm = document.getElementById("login-form");
const loginLink = document.getElementById("login-link");
const closeLoginBtn = document.getElementById("close-login-btn");

loginLink.addEventListener("click", function (event) {
  event.preventDefault(); 
  loginForm.style.right = "0"; 
});

// Close the form
closeLoginBtn.addEventListener("click", function () {
  loginForm.style.left = "-100%"; 
});

//OTP Form
let generatedOtp = null; 

const sendOtpBtn = document.getElementById("send-otp-btn");
sendOtpBtn.addEventListener("click", function() {
  const phoneInput = document.getElementById("phone").value;
  
  if (!phoneInput) {
    alert("Please enter your phone number.");
    return;
  }

  document.getElementById("otp").style.display = "block";
  document.getElementById("verify-otp-btn").style.display = "block";
});


//login otp



