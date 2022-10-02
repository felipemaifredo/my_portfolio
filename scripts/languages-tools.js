const changePT = document.querySelector("img.br");
const changeEN = document.querySelector("img.en");

const navItems = document.querySelectorAll("a.menu-a");
const textsTool = document.querySelectorAll("[text-tool]");


changePT.addEventListener("click", changePTFunc)
changeEN.addEventListener("click", changeENFunc)

const BTNlink = '<img src="/assets/imgs/access_icon.png">';
const BTNgithub = '<img src="/assets/imgs/github_icon.png">';

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
   textsClock[2].innerHTML = `${BTNlink} Ver Projeto`
   textsClock[3].innerHTML = `${BTNgithub} Ver Github`
   //
   textsClock[4].innerText = "Cronômetro Digital";
   textsClock[5].innerHTML = 'Cronômetro Digital usando <span class="js-alert">JavaScript</span> e estilizado <span class="html-alert">HTML 5</span> e <span class="css-alert">CSS 3</span>';
   textsClock[6].innerHTML = `${BTNlink} Ver Projeto`
   textsClock[7].innerHTML = `${BTNgithub} Ver Github`
   //
   textsClock[8].innerText = "Gerador de Cor";
   textsClock[9].innerHTML = 'Projeto em <span class="js-alert">JavaScript</span>,<span class="html-alert">HTML 5</span> e <span class="css-alert">CSS 3</span> para treinar o recurso de Return e manipulação de DOM';
   textsClock[10].innerHTML = `${BTNlink} Ver Projeto`
   textsClock[11].innerHTML = `${BTNgithub} Ver Github`
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
    textsTool[0].innerText = "Digital Clock";
    textsTool[1].innerHTML = 'This Digital Clock was my first project with the objective of practicing my knowledge in the date and time functions of <span class="js-alert">JavaScript</span> together with <span class="html-alert">HTML 5</span> and <span class="css-alert">CSS 3';
    textsTool[2].innerHTML = `${BTNlink} See Project`;
    textsTool[3].innerHTML = `${BTNgithub} See Github`;
   // STOPWATCH
    textsTool[4].innerText = "Digital StopWatch";
    textsTool[5].innerHTML = 'Digital Stopwatch using <span class="js-alert">JavaScript</span> together with <span class="html-alert">HTML 5</span> and <span class="css-alert">CSS 3</span>';
    textsTool[6].innerHTML = `${BTNlink} See Project`;
    textsTool[7].innerHTML = `${BTNgithub} See Github`;
   // GENERATE COLOR
    textsTool[8].innerText = "Color Generator";
    textsTool[9].innerHTML = 'Project made in <span class="js-alert">JavaScript</span>,<span class="html-alert">HTML 5</span> and <span class="css-alert">CSS 3</span> to train the Return feature and DOM manipulation';
    textsTool[10].innerHTML = `${BTNlink} See Project`;
    textsTool[11].innerHTML = `${BTNgithub} See Github`;
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();
