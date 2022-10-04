const textsimc = document.querySelectorAll("[text-imc]");

function changePTFunc() {
    textsimc[0].innerText = "Calculadora de IMC";
    textsimc[1].innerText = "Nome";
    textsimc[2].innerText = "Altura";
    textsimc[3].innerText = "Peso";
    textsimc[4].innerText = "Calcular";
};

function changeENFunc() {
    textsimc[0].innerText = "IMC Calculator";
    textsimc[1].innerText = "Name";
    textsimc[2].innerText = "Height";
    textsimc[3].innerText = "Weight";
    textsimc[4].innerText = "Calculate";
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

//

function calcular() {
    
    let nome = document.getElementById('Nome').value;
    let altura = Number(document.getElementById('Altura').value);
    let peso = Number(document.getElementById('Peso').value);
    let imc = (peso / (altura * altura)).toFixed(2);
    let real = '';
    
    if ( imc < 17 ) {
        real = 'muito abaixo do peso';
    } else if ( imc <= 18.5 ) {
        real = 'Abaixo do peso';
    } else if ( imc <= 24.9 ) {
        real = 'No peso normal';
    } else if ( imc <= 29.9 ) {
        real = 'Acima do peso';
    } else {
        real = 'Obesidade e lá vai';
    }

    document.getElementById('resultado').innerText = `Olá ${nome} seu IMC é: ${imc} isso significa que você está ${real}`;

}