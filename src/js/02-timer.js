import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
let chackedDate = null;
startBtn.setAttribute('disabled', 'disabled');

startBtn.addEventListener('click', onCountdown);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      chackedDate = selectedDates[0];
    }
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

function onCountdown() {
  startBtn.setAttribute('disabled', 'disabled');
  setInterval(() => {
    const date = new Date();
    const difference = chackedDate.getTime() - date.getTime();
    if (difference < 0) {
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(difference);
    timerDays.textContent = addLeadingZero(days);
    timerHours.textContent = addLeadingZero(hours);
    timerMinutes.textContent = addLeadingZero(minutes);
    timerSeconds.textContent = addLeadingZero(seconds);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
