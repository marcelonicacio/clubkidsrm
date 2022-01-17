let totalSlidesg = document.querySelectorAll('.item7').length;
let currentSlideg = 0;

document.querySelector('.width7').style.width = `calc(100vw * ${totalSlidesg})`;
document.querySelector('.controls7').style.height =
`${document.querySelector('.slider7').clientHeight}px`;

function goPrev7() {
    currentSlideg--;
    if (currentSlideg < 0) {
        currentSlideg = totalSlidesg -1;
    }
    updateMargin7();
}

function goNext7() {
    currentSlideg++;
    if (currentSlideg > (totalSlidesg - 1)) {
        currentSlideg = 0;
    }
    updateMargin7();
}

function updateMargin7() {
    let newMargin = (currentSlideg * document.body.clientWidth);
    document.querySelector('.width7').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext7, 6000);