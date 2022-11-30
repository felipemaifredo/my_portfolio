const inputNameTask = document.querySelector("input#input-Name-Task");
const inputTimeTask = document.querySelector("input#input-Time-Task");
const taskBox = document.querySelector("div.tasks-box");

const popOutChange = document.querySelector('div#edit-popout');
const BtnSaveTask= document.querySelector('#BtnSaveTas');

function addTask() {
    if (inputNameTask.value == '')  {
        alert(msgIdiom);
    } else {
        let task = {
            nome: inputNameTask.value,
            time: inputTimeTask.value,
            id: gerarID(),
        }
        newTask(task); 
    }
}

function gerarID() {
    return Math.floor(Math.random() * 3000)
}

function newTask(task) {
    let divTask = createDivTask(task);
    taskBox.appendChild(divTask);
    inputNameTask.value = '';
    inputTimeTask.value = '';
}

function createDivTask(task) {

    let divTask = document.createElement('div');
    divTask.classList.add('tasks');
    divTask.id = task.id;
    
        let spanName = document.createElement('span');
        spanName.classList.add('task-name');
        spanName.innerHTML = task.nome;

        let spanTime = document.createElement('span');
        spanTime.classList.add('task-prize');
        spanTime.innerHTML = task.time;

        let divBtnBox = document.createElement('div');
        divBtnBox.classList.add('btns-box');
        
            let btnCheck = document.createElement('button');
            btnCheck.classList.add('btn-acction');
            btnCheck.innerHTML = '<i class="fa fa-check"></i>';
            btnCheck.setAttribute('onclick', 'check('+task.id+')');

            let btnExcluir = document.createElement('button');
            btnExcluir.classList.add('btn-acction');
            btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
            btnExcluir.setAttribute('onclick', 'excluir('+task.id+')');

        divBtnBox.appendChild(btnCheck);
        divBtnBox.appendChild(btnExcluir);
  
    divTask.appendChild(spanName);
    divTask.appendChild(spanTime);
    divTask.appendChild(divBtnBox);

    return divTask;
}

function excluir(IdTask) {
    let confirm = window.confirm(msgConfir);
    if (confirm) {
        let taksInQ = document.getElementById(''+IdTask+'')
        if (taksInQ) {
            taskBox.removeChild(taksInQ);
        }
    }
}

function check(IdTask) {
    let taksInQ = document.getElementById(''+IdTask+'')
    if (taksInQ) {
        taksInQ.classList.toggle('task-finished');
    }
}
/*----------*/

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

