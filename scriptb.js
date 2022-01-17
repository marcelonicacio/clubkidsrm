let totalSlidesb = document.querySelectorAll('.item3').length;
let currentSlideb = 0;

document.querySelector('.width3').style.width = `calc(100vw * ${totalSlidesb})`;
document.querySelector('.controls3').style.height =
`${document.querySelector('.slider3').clientHeight}px`;

function goPrev3() {
    currentSlideb--;
    if (currentSlideb < 0) {
        currentSlideb = totalSlidesb -1;
    }
    updateMargin3();
}

function goNext3() {
    currentSlideb++;
    if (currentSlideb > (totalSlidesb - 1)) {
        currentSlideb = 0;
    }
    updateMargin3();
}

function updateMargin3() {
    let newMargin = (currentSlideb * document.body.clientWidth);
    document.querySelector('.width3').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext3, 6000);