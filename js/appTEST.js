import musicSourceHandler from "./modules/musicSourceHandler.js";
import setCurrentMusic from "./modules/setCurrentMusic.js";
import albumInfoPageHandler from "./modules/albumInfoPageHandler.js"
import nowPlayingPageHandler from "./modules/nowPlayingPageHandler.js"


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









