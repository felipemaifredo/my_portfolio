const input = document.querySelector("input");
const choiceInput = document.querySelector("select#selection");
const boxResult = document.querySelector("p.resultmsg");
var msgNum = "Digite um número";
// urlAPI = "http://numbersapi.com/number/type";

function executar() {
    let nDigitado = input.value;
    let typeChoiced = choiceInput.value;

    if (!nDigitado) {
        alert(msgNum)
        return
    }

    fetch(`http://numbersapi.com/${nDigitado}/${typeChoiced}`).then((Response) =>
    Response.text()).then((data) => {
        boxResult.style.display = "block";
        boxResult.innerText = data;
        referrerPolicy: "unsafe_url" 
    });
};

const textCN = document.querySelectorAll('[text-cn]');
const msgOnlyEnglish = document.querySelector('div.msg-sIngles-box');

function msgdadosingles() {
    msgOnlyEnglish.style.display = "block";
    setTimeout( () => {
        msgOnlyEnglish.style.display = "none";
    }, 10000);
}

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();


function changePTFunc() {
    msgdadosingles();
    msgNum = 'Digite um número';
    textCN[0].innerText = 'Tipo';
    textCN[1].innerText = 'Curiosidade Matemática';
    textCN[2].innerText = 'Curiosidade sobre o Número'
    textCN[3].innerText = 'Gerar'
    
}

function changeENFunc() {
    msgNum = 'Enter a Number';
    textCN[0].innerText = 'Type';
    textCN[1].innerText = 'Mathematical Curiosity';
    textCN[2].innerText = 'Curiosity about the number'
    textCN[3].innerText = 'generate'
}