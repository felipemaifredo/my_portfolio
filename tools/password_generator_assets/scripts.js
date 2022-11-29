const pwEl = document.querySelector("span#pw");
const lenEl = document.querySelector("input#len");
const upperEl = document.querySelector("input#upper");
const lowerEl = document.querySelector("input#lower");
const numberEl = document.querySelector("input#number");
const symbolEl = document.querySelector("input#symbol");
const copyEl = document.querySelector("button#copy");
const generateEl = document.querySelector("button#generate");


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%&-";

const lengthResult = document.querySelector('span#lenght-result');

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumbersCase() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbolsCase() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;
    let password = "";

    if (upperEl.checked) {
        password += getUpperCase();
    }

    if (lowerEl.checked) {
        password += getLowerCase();
    }

    if (numberEl.checked) {
        password += getNumbersCase();
    }
    
    if (symbolEl.checked) {
        password += getSymbolsCase();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];

    if(upperEl.checked) {
        xs.push(getUpperCase());
    }

    if(lowerEl.checked) {
        xs.push(getLowerCase());
    }

    if(numberEl.checked) {
        xs.push(getNumbersCase());
    }

    if(symbolEl.checked) {
        xs.push(getSymbolsCase());
    }

    if ( xs.length === 0 ) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

function copy() {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password){
        return
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    copytextSucess()
}

function  copytextSucess() {
    document.body.classList.add("copy-text-sucess");
    setTimeout( () => {
        document.body.classList.remove("copy-text-sucess");
    }, 3000);
}

/*-----*/
lenEl.oninput = ( ()=>  {
    let lenElV = lenEl.value;
    lengthResult.innerText = lenElV;
})
/*----*/

const textsPG = document.querySelectorAll("[text-pg]")

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

function changePTFunc() {
    textsPG[0].innerText = "Gere sua Senha";
    textsPG[1].innerText = "Tamanho da Senha";
    textsPG[2].innerText = "Maiúsculas";
    textsPG[3].innerText = "Minúsculas";
    textsPG[4].innerText = "Números";
    textsPG[5].innerText = "Símbolos";
    textsPG[6].innerText = "Gerar Senha";
    textsPG[7].innerText = "Copiar Senha";
    textsPG[8].innerText = "Texto Copiado!";

 };
 
 function changeENFunc() {
    textsPG[0].innerText = "Generate Your Password";
    textsPG[1].innerText = "Password Lenght";
    textsPG[2].innerText = "Uppercade";
    textsPG[3].innerText = "Lowercase";
    textsPG[4].innerText = "Numbers";
    textsPG[5].innerText = "Symbols";
    textsPG[6].innerText = "Generate Password";
    textsPG[7].innerText = "Copy Password";
    textsPG[8].innerText = "Copied Text!";
}