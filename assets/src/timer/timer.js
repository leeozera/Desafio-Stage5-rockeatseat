import * as el from "./elements.js";
import state from "./state.js";

export function uptadeDisplay(minutes, secondes) {
  minutes = minutes ?? state.minutes;
  secondes = secondes ?? state.secondes;

  el.minutes.textContent = String(minutes).padStart("2", "0");
  el.secondes.textContent = String(secondes).padStart("2", "0");
}

export function countDown() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let secondes = Number(el.secondes.textContent);

  secondes--;

  if (secondes < 0) {
    secondes = 59;
    minutes--;
  }

  if (minutes < 0) {
    return;
  }

  console.log(state.minutes);

  uptadeDisplay(minutes, secondes);

  setTimeout(() => countDown(), 1000);
}
