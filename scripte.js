let totalSlidesf = document.querySelectorAll('.item6').length;
let currentSlidef = 0;

document.querySelector('.width6').style.width = `calc(100vw * ${totalSlidesf})`;
document.querySelector('.controls6').style.height =
`${document.querySelector('.slider6').clientHeight}px`;

function goPrev6() {
    currentSlidef--;
    if (currentSlidef < 0) {
        currentSlidef = totalSlidesf -1;
    }
    updateMargin6();
}

function goNext6() {
    currentSlidef++;
    if (currentSlidef > (totalSlidesf - 1)) {
        currentSlidef = 0;
    }
    updateMargin6();
}

function updateMargin6() {
    let newMargin = (currentSlidef * document.body.clientWidth);
    document.querySelector('.width6').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext6, 6000);