$(document).ready(function () {
	var swiperMainLikns = new Swiper(".js-swiper--main-links", {
		slidesPerView: 5,
		spaceBetween: 48,
		scrollbar: {
		  el: ".swiper-scrollbar--main-links",
		  hide: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			440: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
			1600: {
			  slidesPerView: 5,
			  spaceBetween: 48,
			},
		},
	});

	var swiperMainLikns = new Swiper(".js-swiper--usefull-links", {
		slidesPerView: 5,
		spaceBetween: 48,
		scrollbar: {
		  el: ".swiper-scrollbar--usefull-links",
		  hide: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			440: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
			1600: {
			  slidesPerView: 5,
			  spaceBetween: 48,
			},
		},
	});
	
	$('.news').masonry({
		itemSelector: '.news__item'
	  });

	  
	let header = $('.header');
	let navItem = $('.nav-menu__item');
	let navDropWrapper = $('.nav-menu__drop-wrapper')
	
	navItem.click(function() {
		navDrop = $('#js-nav-drop');
		navTitle = $(this).find('.nav-menu__link').text();
		$('.nav-menu__drop-title').html('');
		navDrop.find('.nav-menu__drop').html('');
		
		if ($(this).hasClass('nav-menu__item--active')) {
			navItem.removeClass('nav-menu__item--active');
			$(this).removeClass('nav-menu__item--active');
			header.removeClass('header--active');
			navDropWrapper.removeClass('nav-menu__drop-wrapper--active');
			$('.nav-menu__drop-title').html('');
			navDrop.find('.nav-menu__drop').html('');

		} else {
			navItem.removeClass('nav-menu__item--active');
			$(this).addClass('nav-menu__item--active');
			header.addClass('header--active');
			navDropWrapper.addClass('nav-menu__drop-wrapper--active');

			$('.nav-menu__drop-title').text(navTitle);
			navDropItems = $(this).find('.nav-menu__drop-item').clone();
			$.each(navDropItems, function(index, val) {
				navDrop.find('.nav-menu__drop').append(val);
			});
			
		}
	});	
	
	$(document).click(function (e) {
		let header = $('.header');
		let navDropWrapper = $('.nav-menu__drop-wrapper')
		let navItem = $('.nav-menu__item');
		if ( !header.is(e.target) && header.has(e.target).length === 0) {
			header.removeClass('header--active');
			let navDropWrapper = $('.nav-menu__drop-wrapper--active');
			$('.nav-menu__drop-title').html('');
			$('#js-nav-drop').find('.nav-menu__drop').html('');	
			navItem.removeClass('nav-menu__item--active');
			navDropWrapper.removeClass('nav-menu__drop-wrapper--active');			
		};
	});
		
	menu = new Mmenu("#js-main-menu", {
		"navbars": [
			{
				"position": "bottom",
				"content": [
					"<div class='header__phone header__phone--mmenu'><a href='tel:+748220000000'>+7 4822 000 00 00</a><span>Приемная</span></div>"
				]
			},
			{
				"position": "bottom",
				"content": [
					"<a href='#'><img src='/img/icon/rus.svg' class='mr-2' alt='RUS'>ENG</a>"
				]
			}
		],
		extensions: [
			"pagedim-black",
		],
		navbar: {
			title: "<img src='/img/logo_with_text.svg' alt='logo'>"
		}
	},
	{
		offCanvas: {
			clone: true
		}
	});

});