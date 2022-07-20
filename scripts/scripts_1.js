// CHANGE THEME

function change() {
    if (document.querySelector('input.checkbox').checked) {
        document.body.setAttribute('data-theme', 't-dark')
    } else {
        document.body.setAttribute('data-theme', 't-light')
    }
}

// FIM CHANGE THEME

// CARROSSEL PAGE1 
    
    const imgObject = document.querySelector("div.aside");

    var i = 1;
    var timeT = 5000;
    var images = [];
        images[1] = "url('assets/imgs/wallpaper2.jpg')";
        images[2] = "url('assets/imgs/wallpaper3.jpg')";
        images[3] = "url('assets/imgs/wallpaper4.jpg')";
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
// CHANGE LANGUAGE

    function changeLanguageEn() {
        document.querySelector(".br").classList.remove("language-active");
        document.querySelector(".en").classList.add("language-active")
    }

    function changeLanguagePt() {
        document.querySelector(".en").classList.remove("language-active");
        document.querySelector(".br").classList.add("language-active")
    }

// FIM CHANGE LANGUAGE


