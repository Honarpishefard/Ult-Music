import musicSource from "./../musicDataBase.js";
import playPauseHandler from "./../modules/playPauseHandler.js";
import audioPlayFn from "./../utils/audioPlayFn.js";


export default function shuffleMusicFn() {
    const randomMusic = Math.floor(Math.random() * musicSource().length);
    console.log(randomMusic);
    audioPlayFn(playPauseHandler(musicSource()[randomMusic]));
};