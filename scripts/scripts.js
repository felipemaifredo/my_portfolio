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

var i = 1;
var timeT = 10000;
var images = [];
    images[1] = "url('assets/imgs/backgrounds/1.jpg')";
    images[2] = "url('assets/imgs/backgrounds/2.jpg')";
    images[3] = "url('assets/imgs/backgrounds/3.jpg')";
function auto() {
    imgObject.style.backgroundImage = images[i];
        if ( i < images.length - 1 ) {
            i++;
        } else {
            i = 1;
    }
    setTimeout("auto()", timeT);
}
auto()
// FIM CARROSSEL PAGE 1 