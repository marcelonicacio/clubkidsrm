let totalSlidesl = document.querySelectorAll('.item11').length;
let currentSlidel = 0;

document.querySelector('.width11').style.width = `calc(100vw * ${totalSlidesl})`;
document.querySelector('.controls11').style.height =
`${document.querySelector('.slider11').clientHeight}px`;

function goPrev11() {
    currentSlidel--;
    if (currentSlidel < 0) {
        currentSlidel = totalSlidesl -1;
    }
    updateMargin11();
}

function goNext11() {
    currentSlidel++;
    if (currentSlidel > (totalSlidesl - 1)) {
        currentSlidel = 0;
    }
    updateMargin11();
}

function updateMargin11() {
    let newMargin = (currentSlidel * document.body.clientWidth);
    document.querySelector('.width11').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext11, 6000);