const clockBox = document.querySelector(".js-clock");
const clockNum = clockBox.querySelector("span");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockNum.innerText = `${getH(hours)}시 ${getM(minutes)}분 ${getS(seconds)}초`;
}

function init() {
  setInterval(getTime, 1000);
}

init();

function getH(hours) {
  if (hours < 10) {
    hours = "오전 " + "0" + hours;
  } else if (hours < 12) {
    hours = "오전 " + hours;
  } else {
    hours = "오후 " + (hours - 12);
  }
  return hours;
}

function getM(minutes) {
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes;
}

function getS(seconds) {
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return seconds;
}
