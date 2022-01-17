let totalSlidesh = document.querySelectorAll('.item8').length;
let currentSlideh = 0;

document.querySelector('.width8').style.width = `calc(100vw * ${totalSlidesh})`;
document.querySelector('.controls8').style.height =
`${document.querySelector('.slider8').clientHeight}px`;

function goPrev8() {
    currentSlideh--;
    if (currentSlideh < 0) {
        currentSlideh = totalSlidesh -1;
    }
    updateMargin8();
}

function goNext8() {
    currentSlideh++;
    if (currentSlideh > (totalSlidesh - 1)) {
        currentSlideh = 0;
    }
    updateMargin8();
}

function updateMargin8() {
    let newMargin = (currentSlideh * document.body.clientWidth);
    document.querySelector('.width8').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext8, 6000);