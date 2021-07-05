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


// Mmenu.configs.offCanvas.page.selector = "#js-page";

// document.addEventListener(
// 	"DOMContentLoaded", () => {
// 		new Mmenu( "#js-main-menu", {
// 				extensions: [
// 					"pagedim-black",
// 				],
// 				navbar: {
// 					title: "<img src='/site/templates/static/img/logo.png'>",
// 				}
// 			},
// 			{
// 				offCanvas: {
// 					clone: true
// 				}
// 			}
// 		);
// 	}
// );

// document.addEventListener(
// 	"DOMContentLoaded", () => {
// 		menu = new Mmenu( "#js-contacts-menu", {
// 				extensions: [
// 					"pagedim-black",
// 					"popup"
// 				],
// 				navbar: {
// 					add: false
// 				},
// 				"autoHeight": true
// 			},
// 			{
// 				offCanvas: {
// 					clone: true
// 				}
// 			}
// 		);
// 		api = menu.API;
// 	}
// );