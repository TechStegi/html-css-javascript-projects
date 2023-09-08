/** @format */

const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === -1) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
  startEl.disabled = true;
}
function stopTimer() {
  clearInterval(interval);
  startEl.disabled = false;
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
  startEl.disabled = false;
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
