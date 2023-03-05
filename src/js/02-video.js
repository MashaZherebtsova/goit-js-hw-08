import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
console.log(player);

function onProgress ({seconds}){
  localStorage.setItem("vimeoplayer-current-time",seconds);
}

player.on('timeupdate', throttle(onProgress,1000));

const storedTime=localStorage.getItem("vimeoplayer-current-time");
if (storedTime) {
  player.setCurrentTime(storedTime);
}


