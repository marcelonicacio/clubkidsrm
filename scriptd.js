let totalSlidesd = document.querySelectorAll('.item5').length;
let currentSlided = 0;

document.querySelector('.width5').style.width = `calc(100vw * ${totalSlidesd})`;
document.querySelector('.controls5').style.height =
`${document.querySelector('.slider5').clientHeight}px`;

function goPrev5() {
    currentSlided--;
    if (currentSlided < 0) {
        currentSlided = totalSlidesd -1;
    }
    updateMargin5();
}

function goNext5() {
    currentSlided++;
    if (currentSlided > (totalSlidesd - 1)) {
        currentSlided = 0;
    }
    updateMargin5();
}

function updateMargin5() {
    let newMargin = (currentSlided * document.body.clientWidth);
    document.querySelector('.width5').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext5, 6000);