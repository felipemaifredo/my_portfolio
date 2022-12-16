// Key API
const keyAPI = '2ce5198adf85fd4908600e6f1a04518a';
// DOM Elements
const inputCity = document.querySelector('input#input-city');
const btnAcction = document.querySelector('button#btn-acction');
//  Card Elements
const weatherBox = document.querySelector('div#card-weather');
const cityName = document.querySelector('h1#city-name');
const weather = document.querySelector('h2#weather');
const weatherIcon = document.querySelector('img#weather-icon');
const weatherDescription = document.querySelector('h3#weather-description');
const tempMin = document.querySelector('p#temp-min');
const temperature = document.querySelector('p#temp');
const tempMax = document.querySelector('p#temp-max');
// Events
btnAcction.addEventListener('click', () => {
    if ( inputCity.value == '') {
        alert('Insira uma cidade');
        return
    }
    fetchSearchCity();
    inputCity.value = '';
});

// Funcs

function fetchSearchCity() {
    fetch(urlCityFunc()).then( (response) => { return response.json() }).then( (data) => {
        let cityLat = data[0].lat;
        let cityLon = data[0].lon;
        let searchWeather = urlWeatherFunc(cityLat, cityLon);
        fetchSearchWeather(searchWeather)
    });
};

function fetchSearchWeather(searchWeather) {
    fetch(searchWeather).then( (response) => { return response.json() }).then( (data) => {
       createCard(data);
    });
};

function urlCityFunc() {
    let urlCity = `https://api.openweathermap.org/geo/1.0/direct?q=${inputCity.value}&limit=1&appid=${keyAPI}`;
    return urlCity;
};

function urlWeatherFunc(cityLat, cityLon) {
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${keyAPI}`
    return urlWeather;
};

function createCard(data) {
    cityName.innerText = data.name;
    weather.innerText = data.weather[0].main;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherDescription.innerText = data.weather[0].description;
    tempMin.innerHTML =  `${parseInt(data.main.temp_min - 273.15)}&degC`;
    temperature.innerHTML = `${parseInt(data.main.temp - 273.15)}&degC`;
    tempMax.innerHTML = `${parseInt(data.main.temp_max - 273.15)}&degC`;
    activeWeatherBox();
}

function activeWeatherBox() {
    weatherBox.style.display = "flex";
};


/*-------------*/

const textsTD = document.querySelector("[textTD]");
var msgIdiom = 'Preencha o nome da Tarefa';
var msgConfir = 'Tem certeza que deseja excluir a tarefa?'

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

function changePTFunc() {
    textsTD.placeholder = 'Adicionar uma nova tarefa';
    msgIdiom = 'Preencha o nome da Tarefa';
    msgConfir = 'Tem certeza que deseja excluir a tarefa?';
 };
 
 function changeENFunc() {
    textsTD.placeholder = 'Add a new task';
    msgIdiom = 'Fill in the Task name';
    msgConfir = 'Are you sure you want to delete the task?';
};