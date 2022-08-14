import Player from "@vimeo/player"
import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe')
const player = new Player(iframe)
const STORAGE_KEY = "videoplayer-current-time"

function getCurrentSeconds() {
    const currentSeconds = JSON.parse(localStorage.getItem(STORAGE_KEY)).seconds
    if(currentSeconds) {
        player.setCurrentTime(currentSeconds)
    }
}

function onTimeSave(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

player.on('timeupdate', throttle(onTimeSave, 1000))

getCurrentSeconds()






