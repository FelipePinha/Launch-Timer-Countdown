const setTwoDigit = (arg) => {
    return arg > 9 ? arg : '0'+arg
}


const update = () => {
    const from = new Date()
    const to = new Date('dec 26 2022 23:59:59')
    const diff = to - from
    const days = setTwoDigit(Math.floor(diff/1000/60/60/24))
    const hours = setTwoDigit(Math.floor(diff/1000/60/60) % 24)
    const minutes = setTwoDigit(Math.floor(diff/1000/60) % 60)
    const seconds = setTwoDigit(Math.floor(diff/1000) % 60)

    document.querySelector('#days').innerHTML = days
    document.querySelector('#hour').innerHTML = hours
    document.querySelector('#minutes').innerHTML = minutes
    document.querySelector('#seconds').innerHTML = seconds
}

const interval = setInterval(update, 1000)


