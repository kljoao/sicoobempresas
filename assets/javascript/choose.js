const welcomeAll = document.querySelector('.choose-user-container')
const welcomeBtn = document.querySelector('#welcomeBtn');
const upWelcome = document.querySelector('.upWelcome');
const downWelcome = document.querySelector('.downWelcome');

function dropWelcome(){
    welcomeBtn.classList.toggle('ativoW');
}

function welcomeAllF(){
    welcomeAll.classList.toggle('ativoW');
}