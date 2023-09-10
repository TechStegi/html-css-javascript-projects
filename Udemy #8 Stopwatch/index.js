const startEl = document.getElementsByClassName("start")[0];
const stopEl = document.getElementsByClassName("stop")[0];
const resetEl = document.getElementsByClassName("reset")[0];
const timerEl = document.getElementsByClassName("watch")[0];

function update_time() {
    timerEl.innerHTML = `${hours.toString().padStart(2, "0")}`+
    ":" +
    `${minutes.toString().padStart(2, "0")}` +
    ":" +
    `${seconds.toString().padStart(2, "0")}` +
    "." +
    `${milliseconds.toString().padStart(2, "0")}`;
}

milliseconds = 0;
seconds = 0;
minutes = 0;
hours = 0;
let interval;
let check_timer = 5;

function start_time() {
    if (check_timer != 5) {
        return;
    }
    interval = setInterval(() => {
        milliseconds += 1;
        if (milliseconds === 100) {
            seconds++;
            milliseconds= 0;
        } else if (seconds === 60) {
            minutes++; 
            seconds = 0;
        } else if (minutes === 60) {
            hours++;
            minutes = 0;
        } else if (hours === 24) {
            hours = 0;
            minutes = 0;
            seconds = 0; 
        }
        update_time();
    }, 10);
    check_timer = 6;
    startEl.style.backgroundColor = "black";
        stopEl.style.backgroundColor = "rgb(255, 57, 90)";
        resetEl.style.backgroundColor = "rgb(255, 57, 90)";
        if (interval) {
            return;
        }
}


function stop_time() {
    clearInterval(interval);
    check_timer = 5;
    stopEl.style.backgroundColor = "black";
        startEl.style.backgroundColor = "rgb(255, 57, 90)";
        resetEl.style.backgroundColor = "rgb(255, 57, 90)";
}

function reset_time() {
    check_timer = 5;
    clearInterval(interval);
    interval = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    update_time();
    resetEl.style.backgroundColor = "black";
    startEl.style.backgroundColor = "rgb(255, 57, 90)";
    stopEl.style.backgroundColor = "rgb(255, 57, 90)";
}



startEl.addEventListener("click", start_time);
stopEl.addEventListener("click", stop_time);
resetEl.addEventListener("click", reset_time);