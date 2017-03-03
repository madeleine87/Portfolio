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



    function checkSize() {
        if ($(".education_and_skills").find("p, ul").css("display") == "none") {
            $("#cv-list-1").find("#1").on('click', function () {
                $("#cv-list-1").find("#2, #3, #4").toggleClass("h4_visible");
                $("#cv-list-1").find("p:eq(0)").css("display", "block");
            });
            $("#cv-list-1").find("#2").on('click', function () {
                $("#cv-list-1").find("#1, #3, #4").toggleClass("h4_visible");
                $("#cv-list-1").find("p:eq(1)").css("display", "block");
            });
            $("#cv-list-1").find("#3").on('click', function () {
                $("#cv-list-1").find("#1, #2, #4").toggleClass("h4_visible");
                $("#cv-list-1").find("p:eq(2)").css("display", "block");
            });
            $("#cv-list-1").find("#4").on('click', function () {
                $("#cv-list-1").find("#1, #2, #3").toggleClass("h4_visible");
                $("#cv-list-1").find("ul").css("display", "block");
            });
        }
    }

    checkSize();
    //    $(window).resize(checkSize);

});