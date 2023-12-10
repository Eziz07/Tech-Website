let navbar__toggle = document.querySelector(".navbar__toggle");
let navbar__menu = document.querySelector(".navbar__menu");

navbar__toggle.addEventListener("click", () => {
  navbar__menu.classList.toggle("active");
});
