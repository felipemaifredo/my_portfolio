// CHANGE THEME
function changeTheme() {
    if (document.querySelector('input.checkbox').checked) {
        document.body.setAttribute('data-theme', 't-dark')
    } else {
        document.body.setAttribute('data-theme', 't-light')
    }
}
// FIM CHANGE THEME
// CARROSSEL PAGE1 
const imgObject = document.querySelector("div.right-sec1");
var i = 0;
const timeT = 5000;
const images = [
    "url('assets/imgs/backgrounds/0.jpg')", "url('assets/imgs/backgrounds/1.jpg')", "url('assets/imgs/backgrounds/2.jpg')"
];
function auto() {
    imgObject.style.backgroundImage = images[i];
        if ( i < images.length - 1) {
            i++;
        } else {
            i = 0;
    }
    setTimeout("auto()", timeT);
}
auto()
// FIM CARROSSEL PAGE 1 