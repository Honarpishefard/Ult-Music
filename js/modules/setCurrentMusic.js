import musicSource from "./../musicDataBase.js";



const musicContainer = document.querySelector(".music-container");


export default function setCurrentMusic() {
    let playingMusicIndex = 0;
    [...musicContainer.children].forEach((songElement) => {
        songElement.addEventListener("click", (e) => {
            playingMusicIndex = musicSource().findIndex((item) => item.id === parseInt(songElement.id));
            console.log(playingMusicIndex);
            const currentMusic = musicSource().filter(item => item.id === parseInt(songElement.id))[0];
            console.log(currentMusic);
            var clicked = (e.currentTarget.id);
            localStorage.setItem("clickedOn", clicked);
            localStorage.setItem("playingMusicIndex", playingMusicIndex);
        });
    });
};