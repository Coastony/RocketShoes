const input = document.querySelector('input');
const search = document.querySelector('img.search');


input.addEventListener('keypress', event => {
    event.preventDefault;
    const keyName = event.key;

    if(keyName == 'Enter') {
        location.reload();
    }
})

search.addEventListener('click', event => {
    location.reload();
})

let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {

 document.body.style.overflow = show ? "hidden" : "initial";
 menuSection.classList.toggle("on", show);
 show = ! show;
});