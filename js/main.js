$(document).ready(function () {
	var swiperMainLikns = new Swiper(".js-swiper--main-links, .js-swiper--usefull-links", {
		slidesPerView: 5,
		spaceBetween: 48,
		scrollbar: {
		  el: ".swiper-scrollbar",
		  hide: true,
		},
	});
	
	$('.news').masonry({
		// options...
		itemSelector: '.news__item'
	  });

	  
	let header = $('.header');
	let navItem = $('.nav__item');
	let navDropWrapper = $('.nav__drop-wrapper')
	
	navItem.click(function() {
		navDrop = $('#js-nav-drop');
		navTitle = $(this).find('.nav__link').text();
		$('.nav__drop-title').html('');
		navDrop.find('.nav__drop').html('');
		
		if ($(this).hasClass('nav__item--active')) {
			navItem.removeClass('nav__item--active');
			$(this).removeClass('nav__item--active');
			header.removeClass('header--active');
			navDropWrapper.removeClass('nav__drop-wrapper--active');
			$('.nav__drop-title').html('');
			navDrop.find('.nav__drop').html('');

		} else {
			navItem.removeClass('nav__item--active');
			$(this).addClass('nav__item--active');
			header.addClass('header--active');
			navDropWrapper.addClass('nav__drop-wrapper--active');

			$('.nav__drop-title').text(navTitle);
			navDropItems = $(this).find('.nav__drop-item').clone();
			$.each(navDropItems, function(index, val) {
				navDrop.find('.nav__drop').append(val);
			});
			
		}
	});		
});

