const timer = (deadline) => {
    const timerHours = document.querySelector("#timer-hours")
    const timerMinutes = document.querySelector("#timer-minutes")
    const timerSeconds = document.querySelector("#timer-seconds")

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000

        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return {
            timeRemaining,
            hours,
            minutes,
            seconds,
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining(deadline)

        if (getTime.hours < 10) {
            timerHours.textContent = '0' + `${getTime.hours}`
        } else {
            timerHours.textContent = getTime.hours
        }
        if (getTime.minutes < 10) {
            timerMinutes.textContent = '0' + `${getTime.minutes}`
        } else {
            timerMinutes.textContent = getTime.minutes
        }
        if (getTime.seconds < 10) {
            timerSeconds.textContent = '0' + `${getTime.seconds}`
        } else {
            timerSeconds.textContent = getTime.seconds
        }


    }
    const starter = () => {
        let getTime = getTimeRemaining(deadline)
        const idInterval = setInterval(updateClock, 1000)
        if (getTime.timeRemaining < 0) {
            clearTimeout(idInterval)
        }
    }
    starter()
}
export default timer