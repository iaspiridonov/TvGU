$(document).ready(function () {

    $('.catalog-modal__rubric').hover(function () {
        $('.catalog-modal__rubric').removeClass('catalog-modal__rubric--active');
        $(this).addClass('catalog-modal__rubric--active');
            
        }, function () {
            // out
        }
    );

    $('#catalog').hover( function(){ 

        $('.js-overlay').fadeIn(400);

        }, function () {
            $('.js-overlay').fadeOut(400);
        }
    );

});