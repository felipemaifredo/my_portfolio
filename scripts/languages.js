const changePT = document.querySelector("img.br");
const changeEN = document.querySelector("img.en");

const navItems = document.querySelectorAll("a.menu-a");


changePT.addEventListener("click", () => {
   changeEN.classList.remove("language-active");
   changePT.classList.add("language-active")

   //NAV
   navItems[0].innerText = "Casa";
   navItems[1].innerText = "Sobre";
   navItems[2].innerText = "Habilidades";
   navItems[3].innerText = "Projetos";
   navItems[4].innerText = "Ferramentas";
   navItems[5].innerText = "Trabalhos";
   navItems[6].innerText = "E Se...?";
   navItems[7].innerText = "Blog";
   navItems[8].innerText = "Fale Comigo";
   //FIM NAV

});

changeEN.addEventListener("click", () => {
    changePT.classList.remove("language-active");
    changeEN.classList.add("language-active")
  
    //NAV
    navItems[0].innerText = "Home";
    navItems[1].innerText = "About";
    navItems[2].innerText = "Skills";
    navItems[3].innerText = "Projects";
    navItems[4].innerText = "Tools";
    navItems[5].innerText = "Works";
    navItems[6].innerText = "Whats if...?";
    navItems[7].innerText = "Blog";
    navItems[8].innerText = "Talk to Me";
   //FIM NAV
});
