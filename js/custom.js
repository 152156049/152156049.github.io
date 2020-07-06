$(function() {
    $('.navbar-right li').on('click', function() {
        var index = $(this).index() + 1
        $('html,body').animate({
            scrollTop: $('.y_Weiz').eq(index).offset().top
        }, 500);

    })
    $('.back-to-top a').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);

    })
});
jQuery(document).ready(function($) {
    var $timeline_block = $('.cd-timeline-block');
    $timeline_block.each(function() {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });
    $(window).on('scroll', function() {
        $timeline_block.each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});

$(".navbar-collapse").css({
    maxHeight: $(window).height() - $(".navbar-header").height() + "px"
});

$('#open').on("click", function(e) {
    $('#main-menu').stop().slideToggle()
})
$(document).on("click", function(e) {
    if ($(e.target).closest("#main-menu").length == 0 && $(e.target).closest("#open").length == 0) {
        $('#main-menu').stop().slideUp()

    }
})