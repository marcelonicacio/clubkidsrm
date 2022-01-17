let totalSlidesn = document.querySelectorAll('.item13').length;
let currentSliden = 0;

document.querySelector('.width13').style.width = `calc(100vw * ${totalSlidesn})`;
document.querySelector('.controls13').style.height =
`${document.querySelector('.slider13').clientHeight}px`;

function goPrev13() {
    currentSliden--;
    if (currentSliden < 0) {
        currentSliden = totalSlidesn -1;
    }
    updateMargin13();
}

function goNext13() {
    currentSliden++;
    if (currentSliden > (totalSlidesn - 1)) {
        currentSliden = 0;
    }
    updateMargin13();
}

function updateMargin13() {
    let newMargin = (currentSliden * document.body.clientWidth);
    document.querySelector('.width13').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext13, 6000);