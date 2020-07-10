$(function() {
    $("#move_top").on('click', function() {

        $("body,html").stop().animate({
            scrollTop: 0
        });
    })
})