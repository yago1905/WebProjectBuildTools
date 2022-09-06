let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let interval;

start.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});
stop.addEventListener('click', () => {
  clearInterval(interval);
});
reset.addEventListener('click', () => {
  clearInterval(interval);
  tens = '00';
  seconds = '00';
  mins = '00';
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
  getMins.innerHTML = mins;
});

function startTime() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = '0' + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = '0' + seconds;
    tens = 0;
    getTens.innerHTML = '0' + 0;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mins++;
    getMins.innerHTML = '0' + mins;
    seconds = 0;
    getSeconds.innerHTML = '0' + 0;
  }
  if (mins > 9) {
    getSeconds.innerHTML = mins;
  }
}
