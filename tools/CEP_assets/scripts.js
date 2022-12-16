const cep = document.getElementById('cep');
const enderecoR = document.getElementById('endereco');
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

const pesquisarCep = async() => {
    let cepValue = document.getElementById('cep').value;
    if (!cepValue) {
        limparCampos();
        return
    }
    let url = `http://viacep.com.br/ws/${cepValue}/json/`;
    if (cepValido1(cepValue)) {
        enderecoR.value = 'Digite Somente números no CEP';
        limparCampos();
    } else {
        if (cepValido2(cepValue)) {
                let dados = await fetch(url);
                let endereco = await dados.json();
                if (endereco.hasOwnProperty('erro')) {
                    enderecoR.value = 'Dados não encontrados';
                    limparCampos();
                } else {
                    preencherForm(endereco)
                }
            } else {
            enderecoR.value = 'Cep inválido';
            limparCampos();
            }
        }
    }

const limparCampos = () => {
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
}

const cepValido1 = (cepValue) => cepValue.includes('-');
const cepValido2 = (cepValue) => cepValue.length == 8 && /^[0-9]+$/.test(cepValue);

const preencherForm = (endereco) => {
    enderecoR.value = endereco.logradouro;
    bairro.value = endereco.bairro;
    cidade.value = endereco.localidade;
    estado.value = endereco.uf;
}

cep.addEventListener('focusout', pesquisarCep);


/*--------*/

const textsCEP = document.querySelectorAll("[texts-CEP]");

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

function changePTFunc() {
    textsCEP[0].innerText = 'CEP';
    textsCEP[1].innerText = 'Endereço';
    textsCEP[2].innerText = 'Bairro';
    textsCEP[3].innerText = 'Cidade';
    textsCEP[4].innerText = 'Estado';

 };
 
 function changeENFunc() {
    textsCEP[0].innerText = 'ZIP Code';
    textsCEP[1].innerText = 'Address';
    textsCEP[2].innerText = 'Neighborhood';
    textsCEP[3].innerText = 'City';
    textsCEP[4].innerText = 'State';
};