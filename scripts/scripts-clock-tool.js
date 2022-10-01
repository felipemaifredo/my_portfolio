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