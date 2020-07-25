let windowOffsetTop = 0;

function blockScroll(state = true) {
    let targetBlock = document.querySelector('body');

    if (state) {
        windowOffsetTop = window.pageYOffset;

        targetBlock.style.position = 'fixed';
        targetBlock.style.overflow = 'scroll';
        targetBlock.style.top = -windowOffsetTop + 'px';
        targetBlock.style.right = '0';
        targetBlock.style.bottom = '0';
        targetBlock.style.left = '0';
    } else {
        targetBlock.style.position = null;
        targetBlock.style.overflow = null;
        targetBlock.style.top = null;
        targetBlock.style.right = null;
        targetBlock.style.bottom = null;
        targetBlock.style.left = null;

        window.scrollTo(0, windowOffsetTop);
    }
}
