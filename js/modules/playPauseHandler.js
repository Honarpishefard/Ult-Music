import timeCalc from "./../utils/timeCalc.js"

const playBttnDiv = document.getElementById("playBttnDiv");
const playBttn = document.getElementById("playBttn");
const musicProgressInput = document.getElementById("musicProgressInput");
const musicProgressBar = document.querySelector(".music-progress-bar");


export default function playPauseHandler(playingMusic) {
    songTittle.innerHTML = playingMusic.name;
    artistName.innerHTML = playingMusic.artist;
    audio.src = playingMusic.audio;
    mainCover.style.backgroundImage = `linear-gradient(180deg, rgba(209,209,209,0.06252923532694332) 0%, rgba(0,0,0,0.5667309159992122) 47%, rgba(0,0,0,0.6283555658591562) 52%, rgba(0,0,0,0.9476832969515931) 82%, rgba(0,0,0,0.9784956218815651) 100%) , url(${playingMusic.cover})`;

    playBttn.addEventListener("click", () => {
        audio.play().then(() => {
            const pauseBttnDiv = document.createElement("div");
            pauseBttnDiv.id = "pauseBttnDiv";

            pauseBttnDiv.innerHTML = `<img src="./../img/now playing svg/pause-circle-fill.svg" width="65px" height="65px" alt="">`;
            controls.replaceChild(pauseBttnDiv, playBttnDiv);
            musicProgressInput.max = audio.duration;

            setInterval(() => {
                currentTime.innerHTML = timeCalc(audio.currentTime);
                const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
                musicProgressBar.style.width = musicProgressBarWidth + "%";
            }, 1000);


            fullDuration.innerHTML = timeCalc(audio.duration);


            pauseBttnDiv.addEventListener("click", () => {
                audio.pause();
                controls.replaceChild(playBttnDiv, pauseBttnDiv);
            });
        });
    });
};