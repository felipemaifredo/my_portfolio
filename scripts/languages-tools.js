const changePT = document.querySelector("img.br");
const changeEN = document.querySelector("img.en");

const navItems = document.querySelectorAll("a.menu-a");
const textsTool = document.querySelectorAll("[text-tool]");

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
   // GENERATE PALLETE  
        textsTool[0].innerText = "Gerador de Paleta de Cores";
        textsTool[1].innerHTML = `Surgiu como uma evolução do projeto de gerador de cores usando ${spanJS}, ${spanHTML} and ${spanCSS} porém gerando código hexadecimal`;
        textsTool[2].innerHTML = `Ver Projeto`;
        textsTool[3].innerHTML = `Ver Github`;
    //  CALC
        textsTool[4].innerText = "Calculadora";
        textsTool[5].innerHTML = `Uma evolução da Calculadora Simples usando ${spanJS}, ${spanHTML} e ${spanCSS} porém mais complexa e completa`;
        textsTool[6].innerHTML = `Ver Projeto`;
        textsTool[7].innerHTML = `Ver Github`;
     //  REGRA DE 3
        textsTool[8].innerText = "Regra de 3";
        textsTool[9].innerHTML = `Criada para treinar a lógica de programação em ${spanJS} e manipulação de DOM ${spanHTML} e ${spanCSS}`;
        textsTool[10].innerHTML = `Ver Projeto`;
        textsTool[11].innerHTML = `Ver Github`;
     // PASSCHECK
        textsTool[12].innerText = "Verificador de Senha";
        textsTool[13].innerHTML = `Criada para treinar a lógica de programação em ${spanJS} e manipulação de DOM ${spanHTML} e ${spanCSS} e validação de dados enviados`;
        textsTool[14].innerHTML = `Ver Projeto`;
        textsTool[15].innerHTML = `Ver Github`;
     // Box Form
        textsTool[16].innerText = "Gerador de Borda";
        textsTool[17].innerHTML = `Criada para treinar a lógica de programação em ${spanJS} e manipulação de DOM ${spanHTML} e ${spanCSS} e validação de dados enviados`;
        textsTool[18].innerHTML = `Ver Projeto`;
        textsTool[19].innerHTML = `Ver Github`;
    // Password Generator
        textsTool[20].innerText = "Gerador de Senhas";
        textsTool[21].innerHTML = `Criada para treinar a lógica de programação em ${spanJS} e manipulação de DOM ${spanHTML} e ${spanCSS} e validação de dados enviados`;
        textsTool[22].innerHTML = `Ver Projeto`;
        textsTool[23].innerHTML = `Ver Github`;
    // Password Generator
        textsTool[24].innerText = "Lista de Tarefas";
        textsTool[25].innerHTML = `Criada para treinar a lógica de programação em ${spanJS} e manipulação de DOM ${spanHTML} e ${spanCSS} e validação de dados enviados`;
        textsTool[26].innerHTML = `Ver Projeto`;
        textsTool[27].innerHTML = `Ver Github`;
    // User Generator
      textsTool[28].innerText = "Gerador de Usuários";
      textsTool[29].innerHTML = `Um dos meus primeiros projetos utilizando APIs e aplicando os dados com ${spanJS}, ${spanHTML} e ${spanCSS}.`;
      textsTool[30].innerHTML = `Ver Projeto`;
      textsTool[31].innerHTML = `Ver Github`;
    // User Generator
       textsTool[32].innerText = "Curiosidades de Números";
       textsTool[33].innerHTML = `Um dos meus primeiros projetos utilizando APIs e aplicando os dados com ${spanJS}, ${spanHTML} e ${spanCSS}.`;
       textsTool[34].innerHTML = `Ver Projeto`;
       textsTool[35].innerHTML = `Ver Github`;
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
   // GENERATE PALLETE
        textsTool[0].innerText = "Color Palette Generator";
        textsTool[1].innerHTML = `It emerged as an evolution of the color generator design using ${spanJS}, ${spanHTML} and ${spanCSS} but generating hex code`;
        textsTool[2].innerHTML = `See Project`;
        textsTool[3].innerHTML = `See Github`;
    //  CALC
        textsTool[4].innerText = "Calculator";
        textsTool[5].innerHTML = `An evolution of the Simple Calculator using ${spanJS}, ${spanHTML} and ${spanCSS} but more complex and complete`;
        textsTool[6].innerHTML = `See Project`;
        textsTool[7].innerHTML = `See Github`;
     // REGRA DE 3
        textsTool[8].innerText = "rule of 3";
        textsTool[9].innerHTML = `Created to train programming logic in ${spanJS} and DOM manipulation ${spanHTML} and ${spanCSS}`;
        textsTool[10].innerHTML = `See Project`;
        textsTool[11].innerHTML = `See Github`;
    // PASSCHECK
        textsTool[12].innerText = "Password Checker";
        textsTool[13].innerHTML = `Created to train programming logic in ${spanJS} and DOM manipulation ${spanHTML} and ${spanCSS} and validation of submitted data`;
        textsTool[14].innerHTML = `See Project`;
        textsTool[15].innerHTML = `See Github`;
    // Box Form
        textsTool[16].innerText = "Box Form Generator";
        textsTool[17].innerHTML = `Created to train programming logic in ${spanJS} and DOM manipulation ${spanHTML} and ${spanCSS} and validation of submitted data`;
        textsTool[18].innerHTML = `See Project`;
        textsTool[19].innerHTML = `See Github`;
    // Password Generator
        textsTool[20].innerText = "Password Generator";
        textsTool[21].innerHTML = `Created to train programming logic in ${spanJS} and DOM manipulation ${spanHTML} and ${spanCSS} and validation of submitted data`;
        textsTool[22].innerHTML = `See Project`;
        textsTool[23].innerHTML = `See Github`;
    // Password Generator
        textsTool[24].innerText = "Task List";
        textsTool[25].innerHTML = `Created to train programming logic in ${spanJS} and DOM manipulation ${spanHTML} and ${spanCSS} and validation of submitted data`;
        textsTool[26].innerHTML = `See Project`;
        textsTool[27].innerHTML = `See Github`;
     // User Generator
        textsTool[28].innerText = "Users Generator";
        textsTool[29].innerHTML = `One of my first projects using APIs and applying the data with ${spanJS}, ${spanHTML} and ${spanCSS}.`;
        textsTool[30].innerHTML = `See Project`;
        textsTool[31].innerHTML = `See Github`;
    // User Generator
        textsTool[32].innerText = "Numbers Curiosity";
        textsTool[33].innerHTML = `One of my first projects using APIs and applying the data with ${spanJS}, ${spanHTML} and ${spanCSS}.`;
        textsTool[34].innerHTML = `See Project`;
        textsTool[35].innerHTML = `See Github`;
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();
