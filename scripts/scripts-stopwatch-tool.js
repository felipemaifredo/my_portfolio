var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 10;
var cron;

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron)
    hh = 0;
    mm = 0;
    ss = 0;
    document.querySelector('h1#counter').innerHTML = '00:00:00';

}

function timer() {
    ss++;
    if ( ss == 60 ) {
        ss = 0;
        mm++;

        if ( mm == 60 ) {
            mm = 0;
            hh++;
        }
    }
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    document.querySelector('h1#counter').innerHTML = format;
}


const stopclock = document.querySelectorAll("[text-stopclock]");

function changePTFunc() {
    stopclock[0].innerText = "Iniciar";
    stopclock[1].innerText = "Pausar";
    stopclock[2].innerText = "Parar";
};

function changeENFunc() {
    stopclock[0].innerText = "Start";
    stopclock[1].innerText = "Pause";
    stopclock[2].innerText = "Stop";
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();
