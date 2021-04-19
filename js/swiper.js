document.addEventListener(
	"DOMContentLoaded", () => {
		var homepageSlider = new Swiper('.swiper-promo', {
			// Optional parameters
			loop: true,
			autoHeight: true,
		
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
);

var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 3,
	loop: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true
  });
  var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	thumbs: {
	  swiper: galleryThumbs,
	},
	breakpoints: {
		1200: {
			navigation: {
				nextEl: '.swiper-next-xl',
				prevEl: '.swiper-prev-xl',
			},
		},
		320: {
			navigation: {
				nextEl: '.swiper-next-xs',
				prevEl: '.swiper-prev-xs',
			},
		}
	  }
  });