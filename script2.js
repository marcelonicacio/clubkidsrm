let totalSlides = document.querySelectorAll('.item2').length;
let currentSlide = 0;

document.querySelector('.width2').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.controls2').style.height =
`${document.querySelector('.slider2').clientHeight}px`;

function goPrev2() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides -1;
    }
    updateMargin();
}

function goNext2() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.width2').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext, 6000);