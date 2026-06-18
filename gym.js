// Mobile navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Contact form message
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;

    alert("Thank you, " + name + "! We will contact you soon.");
    contactForm.reset();
  });
}

// Simple membership price selector
const membershipSelect = document.querySelector("#membership");
const priceDisplay = document.querySelector("#priceDisplay");

if (membershipSelect) {
  membershipSelect.addEventListener("change", () => {
    let price = "";

    if (membershipSelect.value === "basic") {
      price = "Basic Plan: R250 per month";
    } else if (membershipSelect.value === "standard") {
      price = "Standard Plan: R400 per month";
    } else if (membershipSelect.value === "premium") {
      price = "Premium Plan: R600 per month";
    } else {
      price = "";
    }

    priceDisplay.textContent = price;
  });
}