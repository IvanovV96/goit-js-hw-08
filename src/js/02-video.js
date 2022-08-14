import Player from "@vimeo/player"
import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe')
const player = new Player(iframe)

function setCurrentTime() {
    const parsedCurrentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))
    if(parsedCurrentTime) {
        player.setCurrentTime(parsedCurrentTime.seconds)
    }
}

function onTimeSave(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}

player.on('timeupdate', throttle(onTimeSave, 1000))

setCurrentTime()






