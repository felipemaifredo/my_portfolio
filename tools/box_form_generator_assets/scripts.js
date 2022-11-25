const inputs = document.querySelectorAll(".slider-wrapper");
const box = document.querySelector("div#box");
const boxResult = document.querySelector('p.resultElement')

inputs.forEach(inp => inp.addEventListener("input", generateBorder));

const supEsq = document.querySelector("input#box-sup-esq");
const infEsq = document.querySelector("input#box-inf-esq");
const supDir = document.querySelector("input#box-sup-dir");
const infDir = document.querySelector("input#box-inf-dir");

const labelTexts = document.querySelectorAll("[text-box-form-generator]");

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
    labelTexts[0].innerText = 'Canto Superior Esquerdo:';
    labelTexts[1].innerText = 'Canto Superior Direito:';
    labelTexts[2].innerText = 'Canto Inferior Direito:';
    labelTexts[3].innerText = 'Canto Inferior Esquerdo:';
    labelTexts[4].innerText = 'Copiar';
 };
 
 function changeENFunc() {
    labelTexts[0].innerText = 'Upper Left Corner:';
    labelTexts[1].innerText = 'Upper Right Corner:';
    labelTexts[2].innerText = 'Bottom Right Corner:';
    labelTexts[3].innerText = 'Bottom Left Corner:';
    labelTexts[4].innerText = 'Copy';

}