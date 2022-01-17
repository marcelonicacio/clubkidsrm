let totalSlidess = document.querySelectorAll('.item2').length;
let currentSlidee = 0;

document.querySelector('.width2').style.width = `calc(100vw * ${totalSlidess})`;
document.querySelector('.controls2').style.height =
`${document.querySelector('.slider2').clientHeight}px`;

function goPrev2() {
    currentSlidee--;
    if (currentSlidee < 0) {
        currentSlidee = totalSlidess -1;
    }
    updateMargin2();
}

function goNext2() {
    currentSlidee++;
    if (currentSlidee > (totalSlidess - 1)) {
        currentSlidee = 0;
    }
    updateMargin2();
}

function updateMargin2() {
    let newMargin = (currentSlidee * document.body.clientWidth);
    document.querySelector('.width2').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext2, 6000);