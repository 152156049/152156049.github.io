jQuery(document).ready(function($) {
    // 初始化隐藏
    var $timeline_block = $('.cd-timeline-block');
    $timeline_block.each(function() {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });
    // 滚动到指定位置添加动画效果
    $(window).on('scroll', function() {
        $timeline_block.each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});
$(function() {


    $('.back-to-top a').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);

    })

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

    // 介绍折叠卡
    $('.y_hive').css("display", "none")
    $('.y_but_panel').on('click', 'span', function() {
        $(this).parent().siblings().stop().slideToggle().
        parent('.panel').siblings().find('.panel-body').slideUp()

    })
});