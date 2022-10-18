let fish = document.getElementById(`fish`)
window.ticker = 0
// move fish to mouse position
function moveFish(e) {
    let x = e.clientX
    let y = e.clientY
    x = x - fish.offsetWidth / 2
    y = y - fish.offsetHeight / 2
    fish.style.left = x + `px`
    fish.style.top = y + `px`
    window.ticker = window.ticker + 1
    document.getElementsByClassName("fishtext")[0].innerText = window.ticker + " FISH!"
}

// move fish when mouse moves
document.addEventListener(`mousemove`, moveFish)
document.addEventListener(`mousemove`, spinFish)

//randomly spin fish
function spinFish() {
    let spin = Math.floor(Math.random() * 360)
    fish.style.transform = `rotate(${spin}deg)`
}
