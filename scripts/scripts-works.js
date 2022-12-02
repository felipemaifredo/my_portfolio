// CHANGE THEME
function changeTheme() {
    if (document.querySelector('input.checkbox').checked) {
        document.body.setAttribute('data-theme', 't-dark')
        localStorage.setItem("theme", "dark")
    } else {
        document.body.setAttribute('data-theme', 't-light')
        localStorage.setItem("theme", "light")
    }
}

function detectTheme() {
    if (localStorage.theme == "dark") {
        document.querySelector('input.checkbox').checked = true;
        document.body.setAttribute('data-theme', 't-dark')
    } else if (localStorage.theme == "light") {
        localStorage.setItem("theme", "light")
    };
}; detectTheme();

// MENU MOBILE
const itemsNav = document.querySelectorAll("a.menu-a");
const nav = document.querySelector("nav#nav");

function toggleMenu() {
    nav.classList.toggle("active");
}

for (let i = 0; i < itemsNav.length; i++) { 
    itemsNav[i].addEventListener("click", () => {
        nav.classList.remove("active");
    });
};
// FIM MENU MOBILE