
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
