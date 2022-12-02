const changePT = document.querySelector("img.br");
const changeEN = document.querySelector("img.en");

const navItems = document.querySelectorAll("a.menu-a");
const textsTool = document.querySelectorAll("[text-work]");

changePT.addEventListener("click", changePTFunc);
changeEN.addEventListener("click", changeENFunc);

const spanJS = '<span class="js-alert">JavaScript</span>';
const spanHTML = '<span class="html-alert">HTML 5</span>';
const spanCSS = '<span class="css-alert">CSS 3</span>';

function changePTFunc() {
   changeEN.classList.remove("language-active");
   changePT.classList.add("language-active");
   localStorage.setItem("idiom", "br");
   //NAV
        navItems[0].innerText = "Home";
        navItems[1].innerText = "Sobre";
        navItems[2].innerText = "Habilidades";
        navItems[3].innerText = "Projetos";
        navItems[4].innerText = "Ferramentas";
        navItems[5].innerText = "Trabalhos";
        navItems[6].innerText = "E Se...?";
        navItems[7].innerText = "Blog";
        navItems[8].innerText = "Contato";
   //FIM NAV
   // Brusun
        textsTool[0].innerText = "Brusun Energia Solar";
        textsTool[1].innerHTML = `Meu primeiro trabalho real, utilizei ${spanHTML}, ${spanCSS} e ${spanJS} puro`;
        textsTool[2].innerHTML = `Ver Projeto`;
    
    };

function changeENFunc() {
    changePT.classList.remove("language-active");
    changeEN.classList.add("language-active")
    localStorage.setItem("idiom", "en")
    //NAV
        navItems[0].innerText = "Home";
        navItems[1].innerText = "About";
        navItems[2].innerText = "Skills";
        navItems[3].innerText = "Projects";
        navItems[4].innerText = "Tools";
        navItems[5].innerText = "Works";
        navItems[6].innerText = "What if...?";
        navItems[7].innerText = "Blog";
        navItems[8].innerText = "Contact";
   //FIM NAV
   // Brusun
        textsTool[0].innerText = "Brusun Solar Energy";
        textsTool[1].innerHTML = `My first real job, I used ${spanHTML}, ${spanCSS} and ${spanJS} pure`;
        textsTool[2].innerHTML = `See Project`;
   
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();
