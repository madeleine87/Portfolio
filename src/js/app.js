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


    var hamburger = $('.fa-bars');
    var menu = $('.menu');
    var mainDiv = $('.main');
    var hamburgerWrap = $('.toggle_menu');
    
    hamburger.on('click', function () {
        hamburgerWrap.toggleClass('show');
        mainDiv.toggleClass('move');
        menu.toggleClass('visible');
    });

    var closeBtn = $('.fa-times-circle-o');
    var menu = $('.menu');
    
    closeBtn.on('click', function () {
        menu.removeClass('visible');
        mainDiv.removeClass('move');
        hamburgerWrap.removeClass('show');
    });

});