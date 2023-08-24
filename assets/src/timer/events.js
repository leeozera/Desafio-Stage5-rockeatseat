import * as el from "./elements.js";
import * as actions from "./actions.js";
import * as music from "./sounds.js";
import state from "./state.js";

export function events() {
  el.controls.addEventListener("click", (e) => {
    let action = e.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
}

export function eventsSound() {
  el.cardsMusic.addEventListener("click", (e) => {
    let action = e.target.dataset.action;

    if (typeof music.audios[action] != "object") {
      return;
    }

    const elements = e.currentTarget.querySelectorAll(".card");
    const clickedElement = e.target;

    elements.forEach((element) => {
      if (element !== clickedElement) {
        element.classList.remove("active");
      }
    });
    e.target.classList.toggle("active");

    music.toggleAudio(action);
  });
}
