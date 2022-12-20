const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

// Function
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
});
