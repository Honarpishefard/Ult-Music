import musicSource from "./../js/music-data-base.js";

const musicContainer = document.querySelector(".music-container");
const mainCover = document.getElementById("mainCover");
const albumName = document.getElementById("albumName");
const songTittle = document.getElementById("songTittle");
const releaseYear = document.getElementById("releaseYear");
const artistName = document.getElementById("artistName");
const controls = document.getElementById("controls");
const playBttnDiv = document.getElementById("playBttnDiv");
const playBttn = document.getElementById("playBttn");
const audio = document.getElementById("audio");
const currentTime = document.getElementById("currentTime");
const fullDuration = document.getElementById("fullDuration");
const musicProgressInput = document.getElementById("musicProgressInput");
const musicProgressBar = document.querySelector(".music-progress-bar");
const previousBttn = document.getElementById("previousBttn");
const nextBttn = document.getElementById("nextBttn");



const page = document.body.id;
switch (page) {
    case "homePage":
        console.log("page one");
        musicSourceHandler();
        setCurrentMusic();
        break;
    case "AlbumInfoPage":
        console.log("page two");
        albumInfoPageHandler();
        break;
    case "nowPlayingPage":
        console.log("third page");
        nowPlayingPageHandler();

};


function musicSourceHandler() {
    musicSource().forEach((song) => {
        const element = `
        <a href="./../html/album-info.html" id="${song.id}" target="_blank" class="col-2 song-sec p-0 d-flex flex-column align-items-center music-div text-black">
        <img class="song-cover" src="${song.cover}" alt="${song.name} ${song.artist}">
        <p class="fw-semibold fs-5 my-1">${song.name}</p>
        <p class="fw-normal fs-6 mb-0">${song.artist}</p>
        </a>`;
        musicContainer.innerHTML += element;
    });
};

function setCurrentMusic() {
    [...musicContainer.children].forEach((songElement) => {
        songElement.addEventListener("click", (e) => {
            const currentMusic = musicSource().filter(item => item.id === parseInt(songElement.id))[0];
            console.log(currentMusic);
            var clicked = (e.currentTarget.id);
            localStorage.setItem("clickedOn", clicked);
        });
    });
};


function albumInfoPageHandler() {
    const clickedLc = localStorage.getItem("clickedOn");
    const playingMusic = musicSource().filter(item => item.id === parseInt(clickedLc))[0];
    albumName.innerHTML = playingMusic.album;
    releaseYear.innerHTML = playingMusic.year;
    artistName.innerHTML = playingMusic.artist;
    mainCover.style.backgroundImage = `linear-gradient(180deg, rgba(209,209,209,0.06252923532694332) 0%, rgba(0,0,0,0.5667309159992122) 47%, rgba(0,0,0,0.6283555658591562) 52%, rgba(0,0,0,0.9476832969515931) 82%, rgba(0,0,0,0.9784956218815651) 100%) , url(${playingMusic.cover})`;
};

function test(playingMusic) {
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
                const min = ("0" + Math.floor(audio.currentTime / 60)).slice(-2);
                const sec = ("0" + Math.floor(audio.currentTime % 60)).slice(-2);
                currentTime.innerHTML = `${min} : ${sec}`;
                const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
                musicProgressBar.style.width = musicProgressBarWidth + "%";
            }, 1000);

            const min = ("0" + Math.floor(audio.duration / 60)).slice(-2);
            const sec = ("0" + Math.floor(audio.duration % 60)).slice(-2);
            fullDuration.innerHTML = `${min} : ${sec}`;

            pauseBttnDiv.addEventListener("click", () => {
                audio.pause();
                controls.replaceChild(playBttnDiv, pauseBttnDiv);
            });
        });
    });
}


function nowPlayingPageHandler() {
    const clickedLc = localStorage.getItem("clickedOn");
    const playingMusic = musicSource().filter(item => item.id === parseInt(clickedLc))[0];

    nextBttn.addEventListener("click", (e) => {
        console.log(playingMusic, musicSource());
        const playingMusicindex = musicSource().findIndex((item => item.id === playingMusic.id));
        console.log(playingMusicindex);
        test(musicSource()[playingMusicindex + 1]);
        setTimeout(function () {
            audio.play();
        }, 2000)
    });

    test(playingMusic);
    
    musicProgressInput.addEventListener("change", (e) => {
        audio.currentTime = e.target.value;
    });

    previousBttn.addEventListener("click", (e) => {
        console.log(playingMusic, musicSource());
        const playingMusicindex = musicSource().findIndex((item => item.id === playingMusic.id));
        console.log(playingMusicindex);
        test(musicSource()[playingMusicindex - 1]);
        setTimeout(function () {
            audio.play();
        }, 2000)
    });


};