import state from "./state.js";
import * as timer from "./timer.js";
import * as events from "./events.js";

export function start(minutes, secondes) {
  state.minutes = minutes;
  state.secondes = secondes;

  timer.uptadeDisplay();
  events.events();
  events.eventsSound();
}
