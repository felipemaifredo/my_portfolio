const changePT = document.querySelector("img.br");
const changeEN = document.querySelector("img.en");

const navItems = document.querySelectorAll("a.menu-a");
const textsTool = document.querySelectorAll("[text-tool]");

changePT.addEventListener("click", changePTFunc);
changeEN.addEventListener("click", changeENFunc);

const BTNlink = '<img src="/assets/imgs/access_icon.png">';
const BTNgithub = '<img src="/assets/imgs/github_icon.png">';

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
   //CLOCK
        textsTool[0].innerText = "Relógio Digital";
        textsTool[1].innerHTML = `Esse Relógio Digital foi meu primeiro projeto com o objetivo de praticar meus conhecimentos nas funções de data e hora de ${spanJS} junto com ${spanHTML} e ${spanCSS}`;
        textsTool[2].innerHTML = `${BTNlink} Ver Projeto`;
        textsTool[3].innerHTML = `${BTNgithub} Ver Github`;
   //
        textsTool[4].innerText = "Cronômetro Digital";
        textsTool[5].innerHTML = `Cronômetro Digital usando ${spanJS} e estilizado ${spanHTML} e ${spanCSS}`;
        textsTool[6].innerHTML = `${BTNlink} Ver Projeto`;
        textsTool[7].innerHTML = `${BTNgithub} Ver Github`;
   // GENERATE COLOR
        textsTool[8].innerText = "Gerador de Cor";
        textsTool[9].innerHTML = `Projeto em <span ${spanJS}, ${spanHTML} e ${spanCSS} para treinar o recurso de Return e manipulação de DOM`;
        textsTool[10].innerHTML = `${BTNlink} Ver Projeto`;
        textsTool[11].innerHTML = `${BTNgithub} Ver Github`;
   // GENERATE PALLETE  
        textsTool[12].innerText = "Gerador de Paleta de Cores";
        textsTool[13].innerHTML = `Surgiu como uma evolução do projeto de gerador de cores usando ${spanJS}, ${spanHTML} and ${spanCSS} porém gerando código hexadecimal`;
        textsTool[14].innerHTML = `${BTNlink} Ver Projeto`;
        textsTool[15].innerHTML = `${BTNgithub} Ver Github`;
   // SIMPLE CALC
        textsTool[16].innerText = "Calculadora Simples";
        textsTool[17].innerHTML = `Projeto de Calculadora simples com ${spanJS}, ${spanHTML} e ${spanCSS}`;
        textsTool[18].innerHTML = `${BTNlink} See Project`;
        textsTool[19].innerHTML = `${BTNgithub} See Github`;
    //  CALC
        textsTool[20].innerText = "Calculadora";
        textsTool[21].innerHTML = `Uma evolução da Calculadora Simples usando ${spanJS}, ${spanHTML} e ${spanCSS} porém mais complexa e completa`;
        textsTool[22].innerHTML = `${BTNlink} See Project`;
        textsTool[23].innerHTML = `${BTNgithub} See Github`;
    //  CALC
        textsTool[24].innerText = "Calculadora de IMC";
        textsTool[25].innerHTML = `Criada para treinar a lógica de programação em ${spanJS} e manipulação de DOM ${spanHTML} e ${spanCSS}`;
        textsTool[26].innerHTML = `${BTNlink} See Project`;
        textsTool[27].innerHTML = `${BTNgithub} See Github`;
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
        textsTool[1].innerHTML = `This Digital Clock was my first project with the objective of practicing my knowledge in the date and time functions of ${spanJS} together with${spanHTML} and ${spanCSS}`;
        textsTool[2].innerHTML = `${BTNlink} See Project`;
        textsTool[3].innerHTML = `${BTNgithub} See Github`;
   // STOPWATCH
        textsTool[4].innerText = "Digital StopWatch";
        textsTool[5].innerHTML = `Digital Stopwatch using ${spanJS} together with ${spanHTML} and ${spanCSS}`;
        textsTool[6].innerHTML = `${BTNlink} See Project`;
        textsTool[7].innerHTML = `${BTNgithub} See Github`;
   // GENERATE COLOR
        textsTool[8].innerText = "Color Generator";
        textsTool[9].innerHTML = `Project made in ${spanJS}, ${spanHTML} and ${spanCSS} to train the Return feature and DOM manipulation`;
        textsTool[10].innerHTML = `${BTNlink} See Project`;
        textsTool[11].innerHTML = `${BTNgithub} See Github`;
   // GENERATE PALLETE
        textsTool[12].innerText = "Color Palette Generator";
        textsTool[13].innerHTML = `It emerged as an evolution of the color generator design using ${spanJS}, ${spanHTML} and ${spanCSS} but generating hex code`;
        textsTool[14].innerHTML = `${BTNlink} See Project`;
        textsTool[15].innerHTML = `${BTNgithub} See Github`;
    // SIMPLE CALC
        textsTool[16].innerText = "Simple Calculator";
        textsTool[17].innerHTML = `Simple Calculator Design with ${spanJS}, ${spanHTML} and ${spanCSS}`;
        textsTool[18].innerHTML = `${BTNlink} See Project`;
        textsTool[19].innerHTML = `${BTNgithub} See Github`;
    //  CALC
        textsTool[20].innerText = "Calculator";
        textsTool[21].innerHTML = `An evolution of the Simple Calculator using ${spanJS}, ${spanHTML} and ${spanCSS} but more complex and complete`;
        textsTool[22].innerHTML = `${BTNlink} See Project`;
        textsTool[23].innerHTML = `${BTNgithub} See Github`;
    //  CALC imc
        textsTool[24].innerText = "IMC Calculator";
        textsTool[25].innerHTML = `Created to train programming logic in ${spanJS} and DOM manipulation ${spanHTML} and ${spanCSS}`;
        textsTool[26].innerHTML = `${BTNlink} See Project`;
        textsTool[27].innerHTML = `${BTNgithub} See Github`;
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();
