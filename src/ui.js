export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

export const modScence = function modScence(state) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};

export const writeModel = function writeModel(text = "") {
  document.querySelector(
    ".model-inner"
  ).innerHTML = `<div class="model-inner">${text}</div>`;
};
