import musicSource from "./../musicDataBase.js";
import playPauseHandler from "./../modules/playPauseHandler.js";
import audioPlayFn from "./../utils/audioPlayFn.js";
import shuffleMusicFn from "./../utils/shuffle.js";


const nextBttn = document.getElementById("nextBttn");
const audio = document.getElementById("audio");
const musicProgressInput = document.getElementById("musicProgressInput");
const previousBttn = document.getElementById("previousBttn");
const shuffleBttn = document.getElementById("shuffleBttn");
const replayBttn = document.getElementById("replayBttn");
const replayBttnPath = document.querySelectorAll(".replay-bttn-path");
const musicVolume = document.getElementById("musicVolume");
const musicVolumeBar = document.getElementById("musicVolumeBar");
const musicVolumeIcon = document.getElementById("musicVolumeIcon");


export default function nowPlayingPageHandler() {
    const clickedLc = localStorage.getItem("clickedOn");
    const playingMusic = musicSource().filter(item => item.id === parseInt(clickedLc))[0];

    let playingMusicIndex = localStorage.getItem("playingMusicIndex");


    function nextBttnFn() {
        if (replayMusicState) {
            return audioPlayFn(playPauseHandler(musicSource()[playingMusicIndex]));
        }
        if (playingMusicIndex === musicSource().length - 1) {
            playingMusicIndex = 0;
            audioPlayFn(playPauseHandler(musicSource()[0]));
        } else {
            playingMusicIndex++;
            audioPlayFn(playPauseHandler(musicSource()[playingMusicIndex]));
        }
    };
    nextBttn.addEventListener("click", nextBttnFn);


    playPauseHandler(playingMusic);
    musicProgressInput.addEventListener("change", (e) => {
        audio.currentTime = e.target.value;
    });

    previousBttn.addEventListener("click", (e) => {
        if (playingMusicIndex === 0) {
            playingMusicIndex = musicSource().length - 1;
            audioPlayFn(playPauseHandler(musicSource()[playingMusicIndex]));
        } else {
            playingMusicIndex--;
            audioPlayFn(playPauseHandler(musicSource()[playingMusicIndex]));
        }
    });

    audio.addEventListener("ended", nextBttnFn);

    shuffleBttn.addEventListener("click", shuffleMusicFn);

    let replayMusicState = false;

    replayBttn.addEventListener("click", () => {
        replayMusicState = !replayMusicState;
        if (replayMusicState) {
            replayBttnPath[0].style.fill = "#4450bc";
            replayBttnPath[1].style.fill = "#4450bc";
        } else {
            replayBttnPath[0].style.fill = "#d2d2d2";
            replayBttnPath[1].style.fill = "#d2d2d2";
        }
    });

    musicVolume.addEventListener("change", () => {
        audio.volume = musicVolume.value / 10;
        musicVolumeBar.style.width = (musicVolume.value) + "rem";
    });

    let volumeMute = false;
    musicVolumeIcon.addEventListener("click", () => {
        volumeMute = !volumeMute;

        function muteToggleHandler() {
            if (volumeMute) {
                audio.volume = 0;
                musicVolumeBar.style.width = "0rem";
                musicVolumeIcon.src = "./../img/now playing svg/volume-xmark-solid.svg";
            } else {
                audio.volume = musicVolume.value / 10;
                musicVolumeBar.style.width = (musicVolume.value) + "rem";
                musicVolumeIcon.src = "./../img/now playing svg/volume-high-solid.svg";
            }
        };

        muteToggleHandler();
    });
    
};