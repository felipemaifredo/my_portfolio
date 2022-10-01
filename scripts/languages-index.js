const changePT = document.querySelector("img.br");
const changeEN = document.querySelector("img.en");

const navItems = document.querySelectorAll("a.menu-a");
const textsSec1 = document.querySelectorAll("[text-sec1]");
const textsSec2 = document.querySelectorAll("[text-sec2]");
const textsSec3 = document.querySelectorAll("[text-sec3]");
const textsSec4 = document.querySelectorAll("[text-sec4]");
const textsSec5 = document.querySelectorAll("[text-sec5]");

const input1Sec5 = document.getElementsByName('nome')[0];
const input2Sec5 = document.getElementsByName('whatsappemail')[0];
const input3Sec5 = document.getElementsByName('assunto')[0];

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
   // SEC 1
   textsSec1[0].innerText = "Olá";
   textsSec1[1].innerText = "Sou o Felipe,";
   textsSec1[2].innerText = "Desenvolvedor Full Stack";
   textsSec1[3].innerText = "Portfólio e Trabalhos";
   textsSec1[4].innerText = "de Felipe Goncam,";
   textsSec1[5].innerText = "um Zé Mané Qualquer!";
   //FIM SEC 1
   //SEC 2
   textsSec2[0].innerText = "Eu e apenas eu";
   textsSec2[1].innerHTML = " Me chamo Felipe Goncalves, tenho 25 anos, sou morador de Cachoeiro de Itapemirim, Espirito Santo, sim, terra do rei Roberto Carlos, e atualmente estou graduando em Análise e Desenvolvimento de Sistemas.<br><br>Tive meu primeiro contato com programação em 2018, mas só comecei meus estudos em 2020";
   textsSec2[2].innerText = "Objetivo";
   textsSec2[3].innerHTML = "Tenho como objetivo me tonar um grande desenvolvedor full stack, e pensando nisso criei esse portifólio para demonstrar minhas habilidades através dos meus projetos.";
   //FIM SEC 2
   // SEC 3
   textsSec3[0].innerText = "HTML 5 e CSS 3";
   textsSec3[1].innerText = "Semântica";
   textsSec3[2].innerText = "Acessibilidade";
   textsSec3[3].innerText = "Responsividade";
   textsSec3[6].innerText = "Manipulação de Dom";
   textsSec3[9].innerHTML = "Controle e Versionamento<br>de Códigos";
   textsSec3[11].innerText = "Pré-Processador CSS";
   textsSec3[13].innerText = "Estudando";
   textsSec3[15].innerText = "Estudando";
   textsSec3[17].innerText = "Estudando";
   textsSec3[18].innerText = "E Mais";
   textsSec3[19].innerText = "Em Breve";
   // FIM SEC 3
   // SEC 4
   textsSec4[0].innerText = "Ferramentas";
   textsSec4[1].innerText = "Ferramentas criadas com o intuito de treinar e desenvolver minhas habilidades";
   textsSec4[2].innerText = "Acesse";
   textsSec4[3].innerText = "Trabalhos";
   textsSec4[4].innerText = "Meus trabalhos";
   textsSec4[5].innerText = "Em Breve";
   textsSec4[6].innerHTML = "E Se...?";
   textsSec4[7].innerHTML = "E Se tal site de tal grande empresa fosse feita por mim?<br>Aqui eu exploro essa possibilidade.";
   textsSec4[8].innerText = "Em Breve";
   textsSec4[9].innerText = "Blog";
   textsSec4[10].innerText = "Atualizações constantes e talvez relevantes sobre meu dia e minhas opiniões";
   textsSec4[11].innerText = "Em Breve";
   // FIM SEC 4
   // SEC 5
   textsSec5[0].innerText = "Obrigado por chegar até aqui!";
   textsSec5[1].innerText = "Me envie uma mensagem abaixo";
   textsSec5[2].innerText = "que eu entrarei em contato com você";
   textsSec5[3].innerText = "Enviar";
   input1Sec5.placeholder="Nome";
   input2Sec5.placeholder="Email ou WhatsApp";
   input3Sec5.placeholder="Assunto";
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
   // SEC 1
   textsSec1[0].innerText = "Hi";
   textsSec1[1].innerText = "I'm Felipe,";
   textsSec1[2].innerText = "Full Stack Developer";
   textsSec1[3].innerText = "Portfolio and Works ";
   textsSec1[4].innerText = "Of Felipe Gongam,";
   textsSec1[5].innerText = "Any any any any any!";
   //FIM SEC 1
    //SEC 2
    textsSec2[0].innerText = "Me and just me";
    textsSec2[1].innerHTML = "My name is Felipe Goncalves, I'm 25 years old, I live in Cachoeiro de Itapemirim, Espirito Santo, yes, land of King Roberto Carlos, and I'm currently majoring in Systems Analysis and Development.<br><br>I had my first contact with programming in 2018, but I only started my studies in 2020";
    textsSec2[2].innerText = "Objective";
    textsSec2[3].innerHTML = "I aim to become a great full Stack developer professional, and with that in mind I created this portfolio to demonstrate my skills through my projects.";
    //FIM SEC 2
    // SEC 3
   textsSec3[0].innerText = "HTML 5 e CSS 3"
   textsSec3[1].innerText = "Semantics"
   textsSec3[2].innerText = "Accessibility"
   textsSec3[3].innerText = "Responsivity"
   textsSec3[6].innerText = "Manipulation of Dom";
   textsSec3[9].innerHTML = "Control and Versioning<br>of Codes";
   textsSec3[11].innerText = "Pre-Processor CSS";
   textsSec3[13].innerText = "Studying";
   textsSec3[15].innerText = "Studying";
   textsSec3[17].innerText = "Studying";
   textsSec3[18].innerText = "And More";
   textsSec3[19].innerText = "Comming Soon";
   // FIM SEC 3
   // SEC 4
   textsSec4[0].innerText = "Tolls";
   textsSec4[1].innerText = "Tools created to train and develop my skills";
   textsSec4[2].innerText = "Access";
   textsSec4[3].innerText = "Works";
   textsSec4[4].innerText = "My works";
   textsSec4[5].innerText = "Coming Soon";
   textsSec4[6].innerHTML = "What if...?";
   textsSec4[7].innerHTML = "What if such a large company's website was made by me?<br>Here I explore that possibility.";
   textsSec4[8].innerText = "Coming Soon";
   textsSec4[9].innerText = "Blog";
   textsSec4[10].innerText = "References and maybe relevant updates about my day and my opinions";
   textsSec4[11].innerText = "Coming Soon";
    // FIM SEC 4
    // SEC 5
    textsSec5[0].innerText = "Thanks for getting here!";
    textsSec5[1].innerText = "send me a message below";
    textsSec5[2].innerText = "that I get in touch with you";
    textsSec5[3].innerText = "Send";
    input1Sec5.placeholder="Name";
    input2Sec5.placeholder="Email or WhatsApp";
    input3Sec5.placeholder="Subject";
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();