let totalSlides = document.querySelectorAll('.item1').length;
let currentSlide = 0;

document.querySelector('.width1').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height =
`${document.querySelector('.slider1').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides -1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.width1').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext, 6000);