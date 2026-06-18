// Mobile navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Contact / booking form message
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const service = document.querySelector("#service").value;

    alert("Thank you, " + name + "! Your " + service + " booking request has been received.");
    bookingForm.reset();
  });
}

// Service price display
const serviceSelect = document.querySelector("#service");
const priceDisplay = document.querySelector("#priceDisplay");

if (serviceSelect) {
  serviceSelect.addEventListener("change", () => {
    let price = "";

    if (serviceSelect.value === "haircut") {
      price = "Haircut: R120";
    } else if (serviceSelect.value === "fade") {
      price = "Fade: R150";
    } else if (serviceSelect.value === "beard") {
      price = "Beard Trim: R80";
    } else if (serviceSelect.value === "combo") {
      price = "Haircut + Beard Combo: R200";
    }

    priceDisplay.textContent = price;
  });
}
