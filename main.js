//Input and Search
const input = document.querySelector("input");
const search = document.querySelector("img.search");

input.addEventListener("keypress", (event) => {
  event.preventDefault;
  const keyName = event.key;

  if (keyName == "Enter") {
    location.reload();
  }
});

search.addEventListener("click", (event) => {
  location.reload();
});

const btnMobile = document.getElementById("btn-mobile");

// Toggle nav
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");

  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
