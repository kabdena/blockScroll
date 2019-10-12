// Scroll block function
let windowOffsetTop = 0;

function blockScroll( state ) {
	let b = $('body');

	if ( state == true ) {
		windowOffsetTop = $(window).scrollTop();

		b.css({
			position: 'fixed',
			top: -windowOffsetTop + 'px',
			right: 0,
			bottom: 0,
			left: 0,
			overflowY: 'scroll'
		});
	} else {
		b.removeAttr('style');

		window.scrollTo(0, windowOffsetTop);
	}
}
