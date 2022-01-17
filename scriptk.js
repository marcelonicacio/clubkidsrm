let totalSlidesk = document.querySelectorAll('.item10').length;
let currentSlidek = 0;

document.querySelector('.width10').style.width = `calc(100vw * ${totalSlidesk})`;
document.querySelector('.controls10').style.height =
`${document.querySelector('.slider10').clientHeight}px`;

function goPrev10() {
    currentSlidek--;
    if (currentSlidek < 0) {
        currentSlidek = totalSlidesk -1;
    }
    updateMargin10();
}

function goNext10() {
    currentSlidek++;
    if (currentSlidek > (totalSlidesk - 1)) {
        currentSlidek = 0;
    }
    updateMargin10();
}

function updateMargin10() {
    let newMargin = (currentSlidek * document.body.clientWidth);
    document.querySelector('.width10').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext10, 6000);