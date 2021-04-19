$('.js-call').click( function(event){ 
    event.preventDefault(); 
    $('.js-overlay__modal').fadeIn(400, 
         function(){ 
            $('.js-modal-call') 
                .css('display', 'block') 
                .animate({opacity: 1, top: '50%'}, 200); 
    });
});

$('.js-price').click( function(event){ 
    event.preventDefault(); 
    $('.js-overlay__modal').fadeIn(400, 
         function(){ 
            $('.js-modal-price') 
                .css('display', 'block') 
                .animate({opacity: 1, top: '50%'}, 200); 
    });
});

$('.modal__close, .js-overlay__modal, .js-overlay').click( function(){ 
    $('.js-modal-call, .js-modal-submit, .js-modal-price')
        .animate({opacity: 0, top: '45%'}, 200,  
            function(){
                $(this).css('display', 'none'); 
                $('.js-overlay__modal, .js-overlay').fadeOut(400);
            }
        );
});

function showMessage() {
    $('.js-overlay__modal').fadeIn(400, 
         function(){ 
            $('.js-modal-call') 
                .css('display', 'block') 
                .animate({opacity: 1, top: '50%'}, 200); 
    });
}