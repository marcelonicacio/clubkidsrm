let totalSlideso = document.querySelectorAll('.item14').length;
let currentSlideo = 0;

document.querySelector('.width14').style.width = `calc(100vw * ${totalSlideso})`;
document.querySelector('.controls14').style.height =
`${document.querySelector('.slider14').clientHeight}px`;

function goPrev14() {
    currentSlideo--;
    if (currentSlideo < 0) {
        currentSlideo = totalSlideso -1;
    }
    updateMargin14();
}

function goNext14() {
    currentSlideo++;
    if (currentSlideo > (totalSlideso - 1)) {
        currentSlideo = 0;
    }
    updateMargin14();
}

function updateMargin14() {
    let newMargin = (currentSlideo * document.body.clientWidth);
    document.querySelector('.width14').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext14, 6000);