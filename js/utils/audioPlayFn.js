import timeCalc from "./timeCalc.js"

const musicProgressBar = document.querySelector(".music-progress-bar");
const playBttn = document.getElementById("playBttn");

export default function audioPlayFn(){
    audio.play().then(() => {
        const pauseBttn = document.createElement("div");
        pauseBttn.innerHTML = `<img src="./../img/now playing svg/pause-circle-fill.svg" width="65px" height="65px" alt="">`;
        playBttnDiv.innerHTML = "";
        playBttnDiv.appendChild(pauseBttn);
        musicProgressInput.max = audio.duration;

        setInterval(() => {
            currentTime.innerHTML = timeCalc(audio.currentTime);
            const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
            musicProgressBar.style.width = musicProgressBarWidth + "%";
        }, 1000);


        fullDuration.innerHTML = timeCalc(audio.duration);


        pauseBttn.addEventListener("click", () => {
            audio.pause();
            playBttnDiv.innerHTML = "";
            playBttnDiv.appendChild(playBttn);
        });
    });
};