let startWatch = document.getElementById("button-start");
let stopWatch = document.getElementById("button-stop");
let resetWatch = document.getElementById("button-reset");
let elementSeconds = document.getElementById("seconds");
let elementDeciSeconds = document.getElementById("deciseconds");
let seconds = 00;
let deciseconds = 00;
let interval
function start() {
    interval = setInterval(startTime, 10);
}
startWatch.addEventListener("click", start);

function stop() {
    clearInterval(interval);
}
resetWatch.onclick = function reset() {
    clearInterval(interval);
    seconds = "00";
    deciseconds = "00";
    elementSeconds.innerHTML = seconds;
    elementDeciSeconds.innerHTML = deciseconds;
}

stopWatch.addEventListener("click", stop);

function startTime(){
    deciseconds++
    if(deciseconds <= 9) {
       elementDeciSeconds.innerHTML = "0" + deciseconds;
    }
    if (deciseconds > 9) {
        elementDeciSeconds.innerHTML = deciseconds;
    }
    if (deciseconds > 99) {
        seconds++
        elementSeconds.innerHTML = "0" + seconds;
        deciseconds = 0;
        elementDeciSeconds.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        elementSeconds.innerHTML = seconds;
    }
}