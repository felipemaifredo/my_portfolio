const inputs = document.querySelectorAll(".slider-wrapper");
const box = document.querySelector("div#box");
const boxResult = document.querySelector('p.resultElement')

inputs.forEach(inp => inp.addEventListener("input", generateBorder));

const supEsq = document.querySelector("input#box-sup-esq");
const infEsq = document.querySelector("input#box-inf-esq");
const supDir = document.querySelector("input#box-sup-dir");
const infDir = document.querySelector("input#box-inf-dir");

function generateBorder() {
    
    let supEsqV = supEsq.value;
    let infEsqV = infEsq.value;
    let supDirV = supDir.value;
    let infDirV = infDir.value;

    let borderGerate = `${supEsqV || 0}% ${supDirV || 0}% ${infDirV || 0}% ${infEsqV || 0}%`;

    box.style.borderRadius = borderGerate;
    boxResult.innerHTML = `border-radius: ${borderGerate};`;
}

function copy() {
    const textarea = document.createElement("textarea");
    const resultCopy = boxResult.innerText;

    if (!resultCopy){
        return
    }

    textarea.value = resultCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("O texto foi copiado")
}
/* -------- */

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

function changePTFunc() {
    infDir.innerText = 'Canto Inferior Direito:'
    supDir.innerText = 'Canto Superior Direito:'
    infEsq.innerText = 'Canto Inferior Esquerdo:'
    supEsq.innerText = 'Canto Superior Esquerdo:'      
 };
 
 function changeENFunc() {
    infDir.innerText = 'Upper Left Corner:'
    supDir.innerText = 'Upper right Corner:'
    infEsq.innerText = 'Bottom left corner:'
    supEsq.innerText = 'Bottom right corner:'
}