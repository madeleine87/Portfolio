$(function () {

    var button = $('.btn').find('a');

    button.on('click', function () {
        var target = $($(this).attr('href'));
        console.log(target);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });








});