const textsSimCalc = document.querySelectorAll("[text-sim-calc]");

function changePTFunc() {
    textsSimCalc[0].innerText = "Calculadora Simples";
    textsSimCalc[1].innerText = "Primeiro Número";
    textsSimCalc[2].innerText = "Segundo Número";
    textsSimCalc[3].innerText = "Resultado";
};

function changeENFunc() {
    textsSimCalc[0].innerText = "Simple Calculator";
    textsSimCalc[1].innerText = "First Number";
    textsSimCalc[2].innerText = "Second Number";
    textsSimCalc[3].innerText = "Result";
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

//

const result = document.querySelector("p#result");

function soma() {
    let operacao = "soma";
    result.textContent = calc(operacao);
}

function sub() {
    let operacao = "sub";
    result.textContent = calc(operacao);
}

function divi() {
    let operacao = "divi";
    result.textContent = calc(operacao);
}

function mult() {
    let operacao = "mult";
    result.textContent = calc(operacao);
}

function calc(operacao) {
    let n1 = Number(document.querySelector("input#n1").value);
    let n2 = Number(document.querySelector("input#n2").value);

    if (operacao == "soma") {
        return n1 + n2;
    } else if (operacao == "sub") {
        return n1 - n2;
    } else if (operacao == "divi" ) {
        return n1 / n2;
    } else if (operacao == "mult") {
        return n1 * n2;
    }
}