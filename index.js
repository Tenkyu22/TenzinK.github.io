document.addEventListener('DOMContentLoaded', function () {
    const hover = document.getElementById('circle');
    const show = document.getElementById('skills')
    const message = document.getElementById("mess");

    hover.addEventListener('mouseover', () => {
        show.style.cssText = 'display: block; opacity: 100%; transiton: opacity 1s;';
        message.innerHTML = "Tenzin";
        message.style.display = 'none';
    });

    hover.addEventListener('mouseout', () => {
        show.style.cssText = 'display: none; opacity: 0; transiton: opacity 1s;';
        message.style.display = 'block';
    });
});

const rightImg = document.querySelectorAll('.right-img-animate');
const leftImg = document.querySelectorAll('.left-img-animate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
rightImg.forEach((el) => observer.observe(el));
leftImg.forEach((el) => observer.observe(el));

const open = document.getElementById('menu');
const close = document.getElementById('close');
const navi = document.getElementById('navigation');

open.addEventListener('click', () => {
    open.style.display = 'none';
    close.style.display = 'block';
    navi.style.cssText = 'display: flex;';
})

close.addEventListener('click', () => {
    close.style.display = 'none';
    open.style.display = 'block';
    navi.style.display = 'none';
})