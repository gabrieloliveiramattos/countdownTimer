const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const proxAno = new Date().getFullYear()+1;
const primeiroDia = '1 '+'jan '+proxAno;


function countdown(){
    
    const dataAnoNovo = new Date(primeiroDia);
    const dataAtual = new Date();
    
    
    const totalSegundos = (dataAnoNovo - dataAtual) / 1000;
    
    const days = Math.floor(totalSegundos / 3600 / 24);
    const hours = Math.floor(totalSegundos/ 3600) % 24;
    const minutes = Math.floor(totalSegundos/60) % 60;
    const seconds = Math.floor(totalSegundos) % 60;
    
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);