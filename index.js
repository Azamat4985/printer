document.addEventListener('DOMContentLoaded', () => {
	let isExpandedInfo = false;

	const infoBox = document.querySelector('.about__info')
	const expandInfoBtn = document.getElementById('expandInfoBtn');


	expandInfoBtn.addEventListener('click', () => {
		if(!isExpandedInfo) {
			infoBox.style.height = '100%';
			expandInfoBtn.textContent = 'Shrink';
			isExpandedInfo = true;
		} else {
			infoBox.style.height = '10em';
			expandInfoBtn.textContent = 'Expand';
			isExpandedInfo = false;
		}
	})

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  });
})