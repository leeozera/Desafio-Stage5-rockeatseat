export const audios = {
  florest: new Audio("./assets/floresta.wav"),
  rain: new Audio("./assets/Chuva.wav"),
  coffe: new Audio("./assets/Cafeteria.wav"),
  fire: new Audio("./assets/Lareira.wav"),
};

for (const key in audios) {
  audios[key].loop = true;
}

export function toggleAudio(audioName) {
  const audio = audios[audioName];

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

  for (const audio in audios) {
    if (audio !== audioName) {
      audios[audio].pause();
    }
  }
}
