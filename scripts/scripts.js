// CHANGE THEME
function changeTheme() {
    if (document.querySelector('input.checkbox').checked) {
        document.body.setAttribute('data-theme', 't-dark')
        localStorage.setItem("theme", "dark")
    } else {
        document.body.setAttribute('data-theme', 't-light')
        localStorage.setItem("theme", "light")
    }
}

function detectTheme() {
    if (localStorage.theme == "dark") {
        document.querySelector('input.checkbox').checked = true;
        document.body.setAttribute('data-theme', 't-dark')
    } else if (localStorage.theme == "light") {
        localStorage.setItem("theme", "light")
    };
}; detectTheme();

// FIM CHANGE THEME
// CARROSSEL PAGE1 
const imgObject = document.querySelector("div.right-sec1");
var i = 0;
const timeT = 5000;
const images = ["url('assets/imgs/backgrounds/0.jpg')", "url('assets/imgs/backgrounds/1.jpg')", "url('assets/imgs/backgrounds/2.jpg')"];
function auto() {
    imgObject.style.backgroundImage = images[i];
        if ( i < images.length - 1) {
            i++;
        } else {
            i = 0;
    }
    setTimeout("auto()", timeT);
}; auto();
// FIM CARROSSEL PAGE 1 
// FORM SEND
const documentForm = document.querySelector("form");
const formBtn = document.querySelector("button.form-btn");
const nameIn = document.querySelector("input[name=nome]");
const whatsEmail = document.querySelector("input[name=whatsappemail]")
const assunto = document.querySelector("input[name=assunto]");

documentForm.addEventListener("submit", (event) => {
    
    event.preventDefault();

    let  getTime = getHours()
    let nameV =  nameIn.value;
    let whatsEmailV =  whatsEmail.value;
    let assuntoV = assunto.value;

    if ( nameV == "" || whatsEmailV == "" || assuntoV == "" ) {
        formBtn.innerHTML = "Preecha os campos acima"
        setTimeout( () => {
            formBtn.innerHTML = "Enviar";
        }, 5000);
    } else {
        formBtn.innerHTML ='<img src="assets/imgs/loading.png">';
        fetch("https://api.sheetmonkey.io/form/7JKr1TpjSCqNPfTEju5jZ8", {
            method: "post",
            headers: { "Accept": "aplication/json", "Content-Type": "application/json" },
            body: JSON.stringify({ nome: nameV, WhatsAppEmail: whatsEmailV, Assunto: assuntoV, Quando: getTime }),
        }).then( () => msgEnviada() )
    };
});

function getHours() {
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    return today.toUTCString(); // "Sun, 30 Jan 2022 18:30:00 GMT"
};

function msgEnviada() {
    formBtn.innerHTML = "Mensagem Enviada!";
    setTimeout( () => {
        nameIn.value = "";
        whatsEmail.value = "";
        assunto.value = "";
        formBtn.innerHTML = "Enviar";
    }, 5000);
};
//  FAZER TEMPORIZADOR PARA LIMPAR OS CAMPOS PERMITIR UMA NOVA MENSAGEM
// FIM FORM SEND