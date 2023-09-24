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

const next = document.getElementById('next');
const previous = document.getElementById('previous');
const watch1 = document.getElementById('watch1');
const watch2 = document.getElementById('watch2');
const watch3 = document.getElementById('watch3');
const watches = [watch1, watch2, watch3];
let currentWatch = 0;

next.addEventListener('click', () => {
    if ((watch1.style.display === 'block') && (watch2.style.display === 'none') && (watch3.style.display === 'none')) {
        watch1.style.display = 'none';
        watch2.style.display = 'block';
        console.log("HELLO")
    } else if ((watch1.style.display === 'none') && (watch2.style.display === 'block') && (watch3.style.display === 'none')) {
        watch2.style.display = 'none';
        watch3.style.display = 'block';
    } else if ((watch1.style.display === 'none') && (watch2.style.display === 'none') && (watch3.style.display === 'block')) {
        watch3.style.display = 'none';
        watch1.style.display = 'block';
    }
});

previous.addEventListener('click', () => {
    if ((watch1.style.display === 'block') && (watch2.style.display === 'none') && (watch3.style.display === 'none')) {
        watch1.style.display = 'none';
        watch3.style.display = 'block';
        console.log("HELLO")
    } else if ((watch1.style.display === 'none') && (watch2.style.display === 'none') && (watch3.style.display === 'block')) {
        watch3.style.display = 'none';
        watch2.style.display = 'block';
    } else if ((watch1.style.display === 'none') && (watch2.style.display === 'block') && (watch3.style.display === 'none')) {
        watch2.style.display = 'none';
        watch1.style.display = 'block';
    }
});
