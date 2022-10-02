const horas = document.querySelector('span#hours');
const minutos = document.querySelector('span#min');
const segundos = document.querySelector('span#sec');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds(); 
    if (hr < 10 ) {
        hr = `0${hr}`
    } 
    if (min < 10 ) {
        min = `0${min}`
    }
    if (seg < 10 ) {
        seg = `0${seg}`
    }
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})


const textsClockin = document.querySelectorAll("[text-clockin]");

function changePTFunc() {
    textsClockin[0].innerText = "Horas";
    textsClockin[1].innerText = "Minutos";
    textsClockin[2].innerText = "Segundos";
};

function changeENFunc() {
    textsClockin[0].innerText = "Hours";
    textsClockin[1].innerText = "Minutes";
    textsClockin[2].innerText = "Seconds";
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();
