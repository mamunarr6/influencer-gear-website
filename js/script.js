let icon = document.querySelector("#change-icon");
let nav_ul = document.querySelector("ul");
icon.addEventListener("click", () => {
    nav_ul.classList.toggle("show-nav");
    if (nav_ul.className == "show-nav") {
        icon.className = "fa-solid fa-xmark";
    } else {
        icon.className = "fa-solid fa-bars";
    }
})