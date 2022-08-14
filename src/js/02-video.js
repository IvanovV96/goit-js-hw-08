import Player from "@vimeo/player"
import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe')
const player = new Player(iframe)
const STORAGE_KEY = "videoplayer-current-time"

function setCurrentTime() {
    const parsedCurrentTime = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if(parsedCurrentTime) {
        player.setCurrentTime(parsedCurrentTime.seconds)
    }
}

function onTimeSave(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

player.on('timeupdate', throttle(onTimeSave, 1000))

setCurrentTime()






