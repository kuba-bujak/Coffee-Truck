
// Menu

const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
	toggle.classList.toggle('open');
	menu.classList.toggle('display');
})

$('.navigation a').on('click', function(e) {
	if(this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;
		const scrollToPosition = $(hash).offset().top - 80;
		console.log(scrollToPosition);

		$('html, body').animate({
			scrollTop: scrollToPosition
		}, 800);
	}
});

