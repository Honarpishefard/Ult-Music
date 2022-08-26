import musicSource from "./../musicDataBase.js";

const musicContainer = document.querySelector(".music-container");


export default function musicSourceHandler() {
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
