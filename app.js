let play = document.querySelector('.play')
let stop = document.querySelector('.stop')
stop.style.display = 'none'
let video = document.querySelector('.video')

function playy() {
    video.play()
    play.style.display = "none"
    stop.style.display = "block"
}

function pause() {
    video.pause();
    play.style.display = "block"
    stop.style.display = "none"
}