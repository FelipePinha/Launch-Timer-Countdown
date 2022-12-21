const days = document.querySelector('#days')
const hour = document.querySelector('#hour')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const timer = () => {
    seconds.innerHTML = Number(seconds.innerHTML) - 1

    if(seconds.innerHTML === '0') {
        minutes.innerHTML = Number(minutes.innerHTML) - 1
        seconds.innerHTML = 60
    }

    if(minutes.innerHTML === '0') {
        hour.innerHTML = Number(hour.innerHTML) - 1
        minutes.innerHTML = 59
    }

    if(hour.innerHTML === '0') {
        days.innerHTML = Number(days.innerHTML) - 1
        hour.innerHTML = 24
    }
}

setInterval(timer, 1000)