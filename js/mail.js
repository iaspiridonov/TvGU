

/* Ajax send form with file */

$.ajaxSetup({
    url: "/ajax-handler/", // путь к php-обработчику
    type: 'POST', // метод передачи данных
    dataType: 'json', // тип ожидаемых данных в ответе
    beforeSend: function(){ // Функция вызывается перед отправкой запроса
      console.debug('Запрос отправлен. Ждите ответа.');
      // тут можно, к примеру, начинать показ прелоадера, в общем, на ваше усмотрение
    },
    error: function(req, text, error){ // отслеживание ошибок во время выполнения ajax-запроса
      console.error('Упс! Ошибочка: ' + text + ' | ' + error);
    },
    complete: function(){ // функция вызывается по окончании запроса
      console.debug('Запрос полностью завершен!');
      // тут завершаем показ прелоадера, если вы его показывали
    }
  });

$(function () {
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();
        var $that = $(this),
            formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)
        $.ajax({
            contentType: false, // важно - убираем форматирование данных по умолчанию
            processData: false, // важно - убираем преобразование строк по умолчанию
            data: formData,
            success: function (json) {
                if (json) {
                    $('.js-overlay__modal').fadeIn(400,
                        function () {
                            $('.modal-submit')
                                .css('display', 'block')
                                .animate({ opacity: 1, top: '50%' }, 200);
                        });

                    $('.modal').css('display', 'none')

                    $(".contact-form").trigger("reset");
                    
                }
            }
        });
    });
});

/* END Ajax send form */