$(function() {
    $("#move_top").on('click', function() {

        $("body,html").stop().animate({
            scrollTop: 0
        });
    })

    $(".y_Weiz").each(function(index, ele) {
        $(ele).click(function() {
            $('html').animate({
                scrollTop: $('.y_Weiz_i').eq(index).offset().top - 30
            }, 500);
            console.log($('.y_Weiz_i').eq(0).offset().top);

        })

    })



})