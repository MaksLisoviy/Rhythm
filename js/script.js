"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}



const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body')
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	})
}
