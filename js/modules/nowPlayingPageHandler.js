import musicSource from "./../musicDataBase.js";
import playPauseHandler from "./../modules/playPauseHandler.js"
import setCurrentMusic from "./setCurrentMusic.js";

const nextBttn = document.getElementById("nextBttn");
const musicProgressInput = document.getElementById("musicProgressInput");
const previousBttn = document.getElementById("previousBttn");
const musicContainer = document.querySelector(".music-container");


export default function nowPlayingPageHandler() {
    const clickedLc = localStorage.getItem("clickedOn");
    const playingMusic = musicSource().filter(item => item.id === parseInt(clickedLc))[0];

    let playingMusicIndex = localStorage.getItem("playingMusicIndex");


    nextBttn.addEventListener("click", (e) => {
        console.log(playingMusic, musicSource());
        playingMusicIndex ++;
        playPauseHandler(musicSource()[playingMusicIndex]);
        setTimeout(function () {
            audio.play();
        }, 2000)
    });


    playPauseHandler(playingMusic);
    musicProgressInput.addEventListener("change", (e) => {
        audio.currentTime = e.target.value;
    });

    previousBttn.addEventListener("click", (e) => {
        console.log(playingMusic, musicSource());
        playingMusicIndex --;
        playPauseHandler(musicSource()[playingMusicIndex]);
        setTimeout(function () {
            audio.play();
        }, 2000)
    });


};