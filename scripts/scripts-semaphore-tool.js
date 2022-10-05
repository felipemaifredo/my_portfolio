const textsSem = document.querySelectorAll("[text-semaphore]");

function changePTFunc() {
    textsSem[0].innerText = "Semaforo";
    textsSem[1].innerText = "Vermelho";
    textsSem[2].innerText = "Amarelo";
    textsSem[3].innerText = "Verde";
    textsSem[4].innerText = "Automático";

};

function changeENFunc() {
    textsSem[0].innerText = "Semaphore";
    textsSem[1].innerText = "Red";
    textsSem[2].innerText = "Yellow";
    textsSem[3].innerText = "Green";
    textsSem[4].innerText = "Auto";
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

//

const imgp = document.querySelector('img.img');
var i = 1;
var time = 1000;
var images = [];
    images[1] = '/assets/imgs/semaphore-tool/amarelo.png';
    images[2] = '/assets/imgs/semaphore-tool/vermelho.png';
    images[3] =  '/assets/imgs/semaphore-tool/verde.png';

function mverm() {
    imgp.src = images[2];
}

function mama() {
    imgp.src = images[1];
}

function mverd() {
    imgp.src = images[3];
}

function auto() {
    imgp.src = images[i];
    if ( i < images.length - 1 ) {
        i++;
    } else {
        i = 1;
    }
    setTimeout("auto()", time);
}
