let totalSlidesq = document.querySelectorAll('.item16').length;
let currentSlideq = 0;

document.querySelector('.width16').style.width = `calc(100vw * ${totalSlidesq})`;
document.querySelector('.controls16').style.height =
`${document.querySelector('.slider16').clientHeight}px`;

function goPrev16() {
    currentSlideq--;
    if (currentSlideq < 0) {
        currentSlideq = totalSlidesq -1;
    }
    updateMargin16();
}

function goNext16() {
    currentSlideq++;
    if (currentSlideq > (totalSlidesq - 1)) {
        currentSlideq = 0;
    }
    updateMargin16();
}

function updateMargin16() {
    let newMargin = (currentSlideq * document.body.clientWidth);
    document.querySelector('.width16').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext16, 6000);