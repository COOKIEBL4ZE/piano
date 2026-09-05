const notes = document.querySelectorAll(".key");
const Dokey = document.querySelector(".L");
const Rekey = document.querySelector(".F");
const Mikey = document.querySelector(".H");
const Fakey = document.querySelector(".K");
const Sokey = document.querySelector(".a");
const Lakey = document.querySelector(".S");
const Tikey = document.querySelector(".Q");
const Dokey2 = document.querySelector(".G");
const audiocontext = new (window.AudioContext || window.webkitAudioContext)();

function playnote(frequency, duration) {
  const oscillator = audiocontext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;

  const gainnode = audiocontext.createGain();
  gainnode.gain.setValueAtTime(0.3, audiocontext.currentTime);
  gainnode.gain.exponentialRampToValueAtTime(
    0.001,
    audiocontext.currentTime + duration,
  );

  oscillator.connect(gainnode);
  oscillator.connect(audiocontext.destination);

  oscillator.start();
  oscillator.stop(audiocontext.currentTime + duration);
}

notes.forEach(function (note) {
  note.addEventListener("click", function () {
    const frequency = Number(note.dataset.freq);
    playnote(frequency, 0.5);
  });
});

document.addEventListener("keydown", function (event) {
  const dofrequency = Number(Dokey.dataset.freq);
  const refrequency = Number(Rekey.dataset.freq);
  const mifrequency = Number(Mikey.dataset.freq);
  const fafrequency = Number(Fakey.dataset.freq);
  const sofrequency = Number(Sokey.dataset.freq);
  const lafrequency = Number(Lakey.dataset.freq);
  const tifrequency = Number(Tikey.dataset.freq);
  const dofrequency2 = Number(Dokey2.dataset.freq);

  if (event.key == "a") {
    playnote(dofrequency, 0.5);
  }
  if (event.key == "s") {
    playnote(refrequency, 0.5);
  }
  if (event.key == "d") {
    playnote(mifrequency, 0.5);
  }
  if (event.key == "f") {
    playnote(fafrequency, 0.5);
  }
  if (event.key == "h") {
    playnote(sofrequency, 0.5);
  }
  if (event.key == "j") {
    playnote(lafrequency, 0.5);
  }
  if (event.key == "k") {
    playnote(tifrequency, 0.5);
  }
  if (event.key == "l") {
    playnote(dofrequency2, 0.5);
  }
});
