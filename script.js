const menuButtonOpen = document.getElementById("js-menu-open");
const menuCloseButton = document.getElementById("js-menu-close");
const menu = document.querySelector(".menu")

menuButtonOpen.addEventListener("click", () => {
  menuButtonOpen.classList.remove("hidden");
})

menuButtonOpen.addEventListener("click", () => {
  menu.classList.remove("hidden");
})

menuCloseButton.addEventListener("click", () => {
  menu.classList.add("hidden");
})