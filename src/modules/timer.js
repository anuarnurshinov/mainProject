const timer = (deadline) => {
    const timerHours = document.querySelector("#timer-hours");
    const timerMinutes = document.querySelector("#timer-minutes");
    const timerSeconds = document.querySelector("#timer-seconds");
    let idInterval;
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds,
        };
    };
    const zeroFormat = (x) => {
        if (x < 10) {
            x = "0" + x;
        }
        return x;
    };
    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerHours.textContent = zeroFormat(getTime.hours);
        timerMinutes.textContent = zeroFormat(getTime.minutes);
        timerSeconds.textContent = zeroFormat(getTime.seconds);

        if (getTime.timeRemaining < 0) {
            clearInterval(idInterval);
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
    };

    updateClock();
    idInterval = setInterval(updateClock, 1000);

}
export default timer