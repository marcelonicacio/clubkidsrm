let totalSlidesj = document.querySelectorAll('.item9').length;
let currentSlidej = 0;

document.querySelector('.width9').style.width = `calc(100vw * ${totalSlidesj})`;
document.querySelector('.controls9').style.height =
`${document.querySelector('.slider9').clientHeight}px`;

function goPrev9() {
    currentSlidej--;
    if (currentSlidej < 0) {
        currentSlidej = totalSlidesj -1;
    }
    updateMargin9();
}

function goNext9() {
    currentSlidej++;
    if (currentSlidej > (totalSlidesj - 1)) {
        currentSlidej = 0;
    }
    updateMargin9();
}

function updateMargin9() {
    let newMargin = (currentSlidej * document.body.clientWidth);
    document.querySelector('.width9').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext9, 6000);