import audioPlayFn from  "./../utils/audioPlayFn.js";

const playBttn = document.getElementById("playBttn");

export default function playPauseHandler(playingMusic) {
    songTittle.innerHTML = playingMusic.name;
    artistName.innerHTML = playingMusic.artist;
    audio.src = playingMusic.audio;
    mainCover.style.backgroundImage = `linear-gradient(180deg, rgba(209,209,209,0.06252923532694332) 0%, rgba(0,0,0,0.5667309159992122) 47%, rgba(0,0,0,0.6283555658591562) 52%, rgba(0,0,0,0.9476832969515931) 82%, rgba(0,0,0,0.9784956218815651) 100%) , url(${playingMusic.cover})`;

    playBttn.addEventListener("click", () => {
        audioPlayFn();
    });
};