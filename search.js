const clock = document.querySelector(".js-clock");
const searchInput = document.querySelector(".js-searchInput");

function handleFocus() {
  clock.style.display = "none";
}

function handleBlur() {
  clock.style.display = "block";
}

searchInput.addEventListener("focus", handleFocus);
searchInput.addEventListener("blur", handleBlur);
