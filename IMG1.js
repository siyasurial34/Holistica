// 🌸 Daily Affirmations
const affirmations = [
  "You are grounded, calm, and strong.",
  "Your well-being is your priority.",
  "Healing is not linear, but you're doing great.",
  "Peace begins with a deep breath.",
  "Small steps every day create big change."
];
document.getElementById("affirmation").innerText =
  affirmations[Math.floor(Math.random() * affirmations.length)];

// 🎭 Filters
const filterButtons = document.querySelectorAll(".filter-buttons button");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    products.forEach(p => {
      p.style.display = p.dataset.tags.includes(filter) ? "block" : "none";
    });
  });
});

// 🔍 Modal Product Preview
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".view").forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const product = btn.closest(".product-card");
    modalTitle.innerText = product.querySelector("h3").innerText;
    modalDesc.innerText = product.querySelector("p").innerText;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => modal.style.display = "none");
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// 🛒 Cart + Wishlist
let cartCount = 0;
const cartCounter = document.getElementById("cart-count");

document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCounter.innerText = cartCount;
  });
});

// Wishlist (localStorage)
document.getElementById("wishlist").addEventListener("click", () => {
  alert("Wishlist feature coming soon (using localStorage)!");
});
