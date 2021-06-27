const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const SWITCH_DELAY = 1000;

let timerId;

const refs = {
  bodyEl: document.querySelector("body"),
  startBtnEl: document.querySelector('[data-action="start"]'),
  stopBtnEl: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtnEl.addEventListener("click", onStartBtnClick);
refs.stopBtnEl.addEventListener("click", onStopBtnClick);

function bodyColorRender() {
  refs.bodyEl.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function onStartBtnClick() {
  timerId = setInterval(bodyColorRender, SWITCH_DELAY);
  refs.startBtnEl.setAttribute("disabled", "disabled");
}

function onStopBtnClick() {
  clearInterval(timerId);
  refs.startBtnEl.removeAttribute("disabled", "disabled");
}
