const marquees = [...document.querySelectorAll('.marquee')];

marquees.forEach((marquee) => {
    marquee.innerHTML = marquee.innerHTML + '&nbsp;'.repeat(0);
    marquee.i = 0;
    marquee.step = 3;
    marquee.width = marquee.clientWidth + 1;
    marquee.style.position = '';
    marquee.innerHTML = `${marquee.innerHTML}&nbsp;`.repeat(100);

    // marquee.addEventListener('mouseenter', () => (marquee.step = 0), false);
    // marquee.addEventListener('mouseleave', () => (marquee.step = 3), false);
});

requestAnimationFrame(move);

function move() {
    marquees.forEach((marquee) => {
        marquee.style.marginLeft = `-${marquee.i}px`;
        marquee.i = marquee.i < marquee.width +105 ? marquee.i + marquee.step : 1;
    });

    requestAnimationFrame(move);
}