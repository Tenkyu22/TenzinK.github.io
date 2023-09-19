// Add JavaScript code here
const hoursValue = document.querySelector('#hours');
const minutesValue = document.querySelector('#minutes');
const secondsValue = document.querySelector('#seconds');
const countdownTime = new Date(2023, 10, 27, 1, 6, 0).getTime();
const hourLabel = document.querySelector('#hour-label');
const minLabel = document.querySelector('#min-label');


function countdown() {
    const currentTime = new Date().getTime();
    let difference = countdownTime - currentTime;

    const hValue = Math.floor(difference / (1000 * 60 * 60) % 24);
    const mValue = Math.floor(difference / (1000 * 60) % 60);
    const sValue = Math.floor(difference / (1000) % 60);

    if (hValue == 1) {
        hourLabel.innerHTML = "HOUR";
    }
    if (mValue == 1) {
        minLabel.innerHTML = "MINUTE";
    }
    hoursValue.innerHTML = hValue;
    minutesValue.innerHTML = mValue;
    secondsValue.innerHTML = sValue;
}


setInterval(countdown, 1000);
