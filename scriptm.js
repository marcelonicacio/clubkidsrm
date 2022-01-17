let totalSlidesm = document.querySelectorAll('.item12').length;
let currentSlidem = 0;

document.querySelector('.width12').style.width = `calc(100vw * ${totalSlidesm})`;
document.querySelector('.controls12').style.height =
`${document.querySelector('.slider12').clientHeight}px`;

function goPrev12() {
    currentSlidem--;
    if (currentSlidem < 0) {
        currentSlidem = totalSlidesm -1;
    }
    updateMargin12();
}

function goNext12() {
    currentSlidem++;
    if (currentSlidem > (totalSlidesm - 1)) {
        currentSlidem = 0;
    }
    updateMargin12();
}

function updateMargin12() {
    let newMargin = (currentSlidem * document.body.clientWidth);
    document.querySelector('.width12').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext12, 6000);