const changePT = document.querySelector("img.br");
const changeEN = document.querySelector("img.en");

const navItems = document.querySelectorAll("a.menu-a");
const textsClock = document.querySelectorAll("[text-tool]");


changePT.addEventListener("click", changePTFunc)
changeEN.addEventListener("click", changeENFunc)

function changePTFunc() {
   changeEN.classList.remove("language-active");
   changePT.classList.add("language-active")
   localStorage.setItem("idiom", "br")
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
   //CLOCK
   textsClock[0].innerText = "Relógio Digital";
   textsClock[1].innerHTML = 'Esse Relógio Digital foi meu primeiro projeto com o objetivo de praticar meus conhecimentos nas funções de data e hora de <span class="js-alert">JavaScript</span> junto com <span class="html-alert">HTML 5</span> e <span class="css-alert">CSS 3';
   textsClock[2].innerHTML = '<img src="/assets/imgs/access_icon.png"> Ver Projeto';
   textsClock[3].innerHTML = '<img src="/assets/imgs/github_icon.png">Ver GitHub';
   textsClock[4].innerText = "Cronômetro Digital";
   textsClock[5].innerHTML = 'Cronômetro Digital usando <span class="js-alert">JavaScript</span> e estilizado <span class="html-alert">HTML 5</span> e <span class="css-alert">CSS 3';
   textsClock[6].innerHTML = '<img src="/assets/imgs/access_icon.png"> Ver Projeto';
   textsClock[7].innerHTML = '<img src="/assets/imgs/github_icon.png">Ver GitHub';
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
   //CLOCK
   textsClock[0].innerText = "Digital StopWatch";
   textsClock[1].innerHTML = 'This Digital Clock was my first project with the objective of practicing my knowledge in the date and time functions of <span class="js-alert">JavaScript</span> together with <span class="html-alert">HTML 5</span> and <span class="css-alert">CSS 3';
   textsClock[2].innerHTML = '<img src="/assets/imgs/access_icon.png"> See Project';
   textsClock[3].innerHTML = '<img src="/assets/imgs/github_icon.png"> See GitHub';
   textsClock[4].innerText = "Digital StopWatch";
   textsClock[5].innerHTML = 'Digital Stopwatch using <span class="js-alert">JavaScript</span> together with <span class="html-alert">HTML 5</span> and <span class="css-alert">CSS 3';
   textsClock[6].innerHTML = '<img src="/assets/imgs/access_icon.png"> See Project';
   textsClock[7].innerHTML = '<img src="/assets/imgs/github_icon.png"> See GitHub';
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();
