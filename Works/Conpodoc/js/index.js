$(function() {
    // 页面标语初始化显示
    $(".y_biaoyu_dis").animate({
            paddingTop: 0,
            opacity: 1,
        },
        1000
    );

    // 滚动显示
    Rollingtransla()

    function Rollingtransla() {
        var mbiao = $(".y_tezhen_top").offset().top;

        $(document).on("scroll ", function() {

            if ($(this).scrollTop() >= mbiao - 400) {
                $(".y_tezhen_top li").stop(true).animate({
                        opacity: 1,
                        top: 0,
                    },
                    500
                );
                $(".y_tezhen_botton li").stop(true).animate({
                        opacity: 1,
                        bottom: 0,
                    },
                    500
                );
            } else if ($(this).scrollTop() <= mbiao) {
                $(".y_tezhen_top li").css({
                    opacity: 0,
                    top: -20 + "px",
                });
                $(".y_tezhen_botton li").css({
                    opacity: 0,
                    bottom: -20 + "px",
                });
            }

            $(".animated").each(function(index, element) {
                if ($(element).offset().top <= $(document).scrollTop() + window.innerHeight) {
                    $(element).stop(true).animate({
                            opacity: 1,
                            top: 0,
                        },
                        500
                    );
                } else {
                    $(element).stop(true).animate({
                            opacity: 0,
                            top: -10 + "px",
                        },
                        500
                    );
                }
            });
        });
    }



});