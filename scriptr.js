let totalSlidest = document.querySelectorAll('.item17').length;
let currentSlidet = 0;

document.querySelector('.width17').style.width = `calc(100vw * ${totalSlidest})`;
document.querySelector('.controls17').style.height =
`${document.querySelector('.slider17').clientHeight}px`;

function goPrev17() {
    currentSlidet--;
    if (currentSlidet < 0) {
        currentSlidet = totalSlidest -1;
    }
    updateMargin17();
}

function goNext17() {
    currentSlidet++;
    if (currentSlidet > (totalSlidest - 1)) {
        currentSlidet = 0;
    }
    updateMargin17();
}

function updateMargin17() {
    let newMargin = (currentSlidet * document.body.clientWidth);
    document.querySelector('.width17').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext17, 6000);