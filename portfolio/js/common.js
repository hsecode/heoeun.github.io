$(function(){
    //navigation
    $(window).on('load resize', function(){
        var displayWidth = $(window).width();

        if (displayWidth < 768) {
            $('.header_wrap .button_nav').click(function(){
                $('.header_wrap .nav_wrap').toggleClass('mob_active');
                $(this).toggleClass('close');
                $('html, body').toggleClass('scroll_hidden');
            });
            $('.navigation > li > a').click(function(){
                $('.header_wrap .nav_wrap').toggleClass('mob_active');
                $('.header_wrap .button_nav').toggleClass('close');
                $('html, body').toggleClass('scroll_hidden');
            });
        } else {
            $('.header_wrap .button_nav').off('click');
            $('html, body').removeClass('scroll_hidden');
            $(window).resize(function(){
                $('html, body').removeClass('scroll_hidden');
            });
        }

        return false;
    });

    //header fixed
    $(function(){
        var fixArea = $(".about_wrap").offset().top;
        $(window).scroll(function(){
            var window = $(this).scrollTop();

            if(fixArea <= window) {
                $(".header_wrap").addClass("fixed");
            } else {
                $(".header_wrap").removeClass("fixed");
            }
        });

        $(window).resize(function(){
            $(".header_wrap").removeClass("fixed");
        });
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

//useragent
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) == null ? false : true;
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if(isMobile.any()){
    $('.mob_caution').css('display','block');
} else {
    $('.mob_caution').css('display','none');
}

//최근 수정된 날짜 출력
let updateDate = document.lastModified;
let textTag = document.querySelector('.last_modified');


function getFormatDate(updateDate){
    let year = updateDate.getFullYear();
    let month = updateDate.getMonth() + 1;
    let day = updateDate.getDate();
    let hour = updateDate.getHours();
    let minutes = updateDate.getMinutes();
    let seconds = updateDate.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    seconds = seconds >= 10 ? seconds : '0' + seconds;

    return year + '-' + month + '-' + day + '&nbsp;' + hour + ':' + minutes + ':' + seconds;
}
let changeDate = getFormatDate(new Date(updateDate));
textTag.innerHTML = changeDate;