let totalSlidesp = document.querySelectorAll('.item15').length;
let currentSlidep = 0;

document.querySelector('.width15').style.width = `calc(100vw * ${totalSlidesp})`;
document.querySelector('.controls15').style.height =
`${document.querySelector('.slider15').clientHeight}px`;

function goPrev15() {
    currentSlidep--;
    if (currentSlidep < 0) {
        currentSlidep = totalSlidesp -1;
    }
    updateMargin15();
}

function goNext15() {
    currentSlidep++;
    if (currentSlidep > (totalSlidesp - 1)) {
        currentSlidep = 0;
    }
    updateMargin15();
}

function updateMargin15() {
    let newMargin = (currentSlidep * document.body.clientWidth);
    document.querySelector('.width15').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext15, 6000);