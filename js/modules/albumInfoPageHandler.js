import musicSource from "./../musicDataBase.js";


export default function albumInfoPageHandler() {
    const clickedLc = localStorage.getItem("clickedOn");
    const playingMusic = musicSource().filter(item => item.id === parseInt(clickedLc))[0];
    albumName.innerHTML = playingMusic.album;
    releaseYear.innerHTML = playingMusic.year;
    artistName.innerHTML = playingMusic.artist;
    mainCover.style.backgroundImage = `linear-gradient(180deg, rgba(209,209,209,0.06252923532694332) 0%, rgba(0,0,0,0.5667309159992122) 47%, rgba(0,0,0,0.6283555658591562) 52%, rgba(0,0,0,0.9476832969515931) 82%, rgba(0,0,0,0.9784956218815651) 100%) , url(${playingMusic.cover})`;
};