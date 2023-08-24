import { countDown, uptadeDisplay } from "./timer.js";
import * as el from "./elements.js";
import state from "./state.js";

export function togglePlay() {
  state.isRunning = document.documentElement.classList.toggle("isRunning");
  countDown();
}

export function toggleReset() {
  state.isRunning = false;
  document.documentElement.classList.remove("isRunning");
  uptadeDisplay();
}

export function increaseTheTimer() {
  if (state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let secondes = Number(el.secondes.textContent);
  secondes = secondes + 5;

  if (secondes > 60) {
    minutes++;
    secondes = 0;
  }

  uptadeDisplay(minutes, secondes);
}

export function slowDownTimer() {
  if (state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let secondes = Number(el.secondes.textContent);
  secondes = secondes - 5;

  if (secondes < 0) {
    minutes--;
    secondes = 60;
  }

  if (minutes < 0) {
    return;
  }

  uptadeDisplay(minutes, secondes);
}
