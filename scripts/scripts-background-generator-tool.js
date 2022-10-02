const gecolor = document.querySelectorAll("[text-gecolor]");
function changePTFunc() {
    gecolor[0].innerText = "Gerar Cor";
    gecolor[1].innerText = "Copiar";
};

function changeENFunc() {
    gecolor[0].innerText = "Generate Color";
    gecolor[1].innerText = "Copy";
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

//

function change() {
    let cor = generateColor();
    document.querySelector("#body").style.backgroundColor = cor;
    document.querySelector(".objParag").innerHTML = `${cor}`;
}

function generateColor() {
    let r = parseInt(Math.random() * 250);
    let g = parseInt(Math.random() * 250);
    let b = parseInt(Math.random() * 250);
    return (`rgb(${r}, ${g}, ${b})`);
}

function copyText() {
    let textCor = document.querySelector(".objParag");
    navigator.clipboard.writeText(textCor.textContent);
}
