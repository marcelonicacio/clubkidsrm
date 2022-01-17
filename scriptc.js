let totalSlidesc = document.querySelectorAll('.item4').length;
let currentSlidec = 0;

document.querySelector('.width4').style.width = `calc(100vw * ${totalSlidesc})`;
document.querySelector('.controls4').style.height =
`${document.querySelector('.slider4').clientHeight}px`;

function goPrev4() {
    currentSlidec--;
    if (currentSlidec < 0) {
        currentSlidec = totalSlidesc -1;
    }
    updateMargin4();
}

function goNext4() {
    currentSlidec++;
    if (currentSlidec > (totalSlidesc - 1)) {
        currentSlidec = 0;
    }
    updateMargin4();
}

function updateMargin4() {
    let newMargin = (currentSlidec * document.body.clientWidth);
    document.querySelector('.width4').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext4, 6000);