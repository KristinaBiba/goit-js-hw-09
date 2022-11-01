const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let active = false;

const timerId = setInterval(() => {
  body.style.backgroundColor = getRandomHexColor();
}, 1000);

function colorChange() {
  if (active) {
    return;
  }
  timerId;
  active = true;
}

startBtn.addEventListener('click', colorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.addEventListener('click', stopColorChange);

function stopColorChange() {
  active = false;
  clearInterval(timerId);
}
