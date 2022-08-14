import Player from "@vimeo/player"
import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe')
const player = new Player(iframe)
const currentSeconds = JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds



const onTimeSave = function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}

player.on('timeupdate', throttle(onTimeSave, 1000))

player.setCurrentTime(currentSeconds)



