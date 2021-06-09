$(function(){
    $(window).on('load resize', function(){
        var displayWidth = $(window).width();

        if (displayWidth < 768) {
            $('.header_wrap .button_nav').click(function(){
                $('.header_wrap .nav_wrap').toggleClass('mob_active');
                $(this).toggleClass('close');
                $('html, body').toggleClass('scroll_hidden');
            });
            $('.navigation > li > a').click(function(){
                $('.header_wrap .nav_wrap').toggleClass('mob_active')
                $('.header_wrap .button_nav').toggleClass('close');;
                $('html, body').toggleClass('scroll_hidden');
            });
        } else {
            $('.header_wrap .button_nav').off('click');
            $('html, body').removeClass('scroll_hidden');
        }
        return false;
    });

    //career tab
    $('.career_tab .button_tab').click(function(){
        $('.career_tab li').removeClass('active');
        $(this).parent().addClass('active');

        var idx = $('.career_tab .button_tab').index(this);
        $('.career_box .career_item').removeClass('active');
        $('.career_box .career_item').eq(idx).addClass('active');
    });

    //menu scroll
    jQuery(document).ready(function($) {
        $(".menubtn").click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        });
    });


    //works popup
    $('.works_item .button_more').click(function(){
        $(this).parent().parent().siblings('.popup_area').toggleClass('active');
        $('body').toggleClass('scroll_hidden');

        $('.popup_area .button_close').click(function(){
            $(this).parent().parent().removeClass('active');
            $('body').removeClass('scroll_hidden');
        });
    });

});


//scroll up
(function ($) {
    $(document).ready(function () {
        var $docHeight;

        $('.button_up').on('click', function () {
            $('html, body').stop().animate({
                scrollTop: '0'
            }, 300);
        });

        $(window).on('resize', function() {
            $docHeight = $(document).outerHeight();
        });
    });
})(jQuery);

