/* :: gnb s ::  */

(function ($) {
    $(document).on("ready", init);

    function init() {
        var cachedWidth = $(window).width();
        var $wrapper, $gnb;
        var $mobBtn, $mobCloseBtn;

        function gnbInit() {
            $wrapper = $(".wrapper");
            $gnb = $(".gnbwrap");
            $mobBtn = $('.header-menu-btn');
            $mobCloseBtn = $('.mob-gnb-close-btn');


            mobGnbAllFn();

            $(window).on("resize", function(){
                var newWidth = $(window).width();

                if(newWidth !== cachedWidth){
                    removeStyleFn($wrapper);
                    removeStyleFn($gnb);
                    removeStyleFn($mobBtn);

                    cachedWidth = newWidth;
                }
            });
        }
        function mobGnbAllFn() {
            $mobBtn.on({
                click : function (){
                    if (CCS.IS_VIEWTYPE == "tablet" || CCS.IS_VIEWTYPE == "mobile") {

                        var $this = $(this);
                        $this.toggleClass('active');
                        if($this.hasClass("active")) {
                            $this.addClass('active');
                            $gnb.addClass('active');
                            $wrapper.addClass('active');
                        } else {
                            $this.removeClass('active');
                            $gnb.removeClass('active');
                            $wrapper.removeClass('active');

                        }
                    }
                }
            });

            $mobCloseBtn.on({
                click : function (){

                    if (CCS.IS_VIEWTYPE == "tablet" || CCS.IS_VIEWTYPE =="mobile") {
                        removeStyleFn($gnb);
                        removeStyleFn($wrapper);
                    }
                }
            });



        }
        gnbInit();
    }
    function removeStyleFn($target) {
        $target.removeClass("active").removeAttr("style");
    }
})(jQuery);
/* :: gnb e ::  */
/* :: GNB s :: */
(function($) {
    $(document).on("ready", init);

    function init() {

        var $gnb, $dep1, $dep2;
        var $mobopen;
        var $body, $wrapper;
        var $depcon, $mobprevent;
        var cachedWidth = $(window).width();

        function gnbinit() {
            $body = $("body");
            $wrapper = $(".wrapper");
            $gnb = $(".gnbwrap");
            $dep1 = $(".dep1");
            $dep2 = $(".dep2");

            $mobopen = $(".header-menu-btn");



            $depcon = $(".depscon");
            $mobprevent = $depcon.siblings("a");

            $mobprevent.addClass("mobprevent");
            viewSettingFn();

            $(window).on("resize", function() {
                var newWidth = $(window).width(); // 모바일 스크롤시 gnb 닫히는 현상 fix
                if(newWidth !== cachedWidth){
                    viewSettingFn();
                    cachedWidth = newWidth;
                }

            });
            totalFn();
        }

        function viewSettingFn() { // 디바이스 체크
            SetViewSize();

            removeStyleFn($gnb);
            removeStyleFn($dep1);
            removeStyleFn($dep2);
            removeStyleFn($mobopen);
            removeStyleFn($wrapper);


            if (CCS.IS_VIEWTYPE == "mobile") {
                $body.removeClass("tablet web");
                $body.addClass("mobile");
            } else if (CCS.IS_VIEWTYPE == "tablet") {
                $body.removeClass("mobile web");
                $body.addClass("tablet");
            } else{
                $body.removeClass("mobile tablet");
                $body.addClass("web");
            }
        }

        function removeStyleFn($removeitems) { // 리사이즈할 때 스타일, 클래스 제거
            $removeitems.removeClass("active gnbopen").attr("style", "");
        }

        function totalFn() { // 모든 이벤트 모임
            $mobopen.find(">a").on("click", mobMenuOpenFn);
            $dep1.find(">a").on("click", mobDep2OpenFn);

            $dep1.find(">a").on("mouseenter focusin", webGnbOpenFn);
            $dep1.on("mouseleave", webGnbCloseFn);
            $dep2.find(">li:last-child > a").on("keydown", function(e) {
                if(e.keyCode == 9 && !e.shiftKey) {
                    $dep2.stop().slideUp("fast");
                }
            });
            $dep1.find(">a").on("keydown", function(e) {
                if(e.keyCode == 9 && e.shiftKey) {
                    $dep2.stop().slideUp("fast");
                }
            });
        }


        /* 테블릿, 모바일 gnb 스크립트 */
        function mobMenuOpenFn() {
            if ($body.hasClass("mobile") || $body.hasClass("tablet")) {
                var $this = $(this);
                $this.parent().toggleClass("active");
                if ($this.parent().hasClass("active")) {
                    /*$gnb.find(".dep1:first-child").addClass("active");
                     $gnb.find(".dep1:first-child .dep2").css("display", "block");*/
                    $gnb.stop().slideDown().addClass("active");
                    $wrapper.addClass("gnbopen");
                    removeStyleFn($(".breadcrumb-btn"));
                    removeStyleFn($(".breadcrumb-list"));
                } else {
                    $gnb.stop().slideUp().removeClass("active");
                    $dep1.removeClass("active");
                    $dep2.stop().slideUp();
                    $wrapper.removeClass("gnbopen");
                }
            }
        }

        function mobDep2OpenFn(e) {
            if ($body.hasClass("mobile") || $body.hasClass("tablet")) {
                var $this = $(this),
                    $items = $this.parent(),
                    $thisDep2 = $items.find(".dep2");
                dep1Fn($items);
                dep2Fn($items, $thisDep2);
                if($this.hasClass("mobprevent")) {
                    e.preventDefault();
                }
            }
        }

        function dep1Fn($items) {
            $items.toggleClass("active");
            if($items.hasClass("active")) {
                $dep1.removeClass("active");
                $items.toggleClass("active");
            }
        }

        function dep2Fn($items, $thisDep2) {
            if($items.hasClass("active")) {
                $dep2.stop().slideUp();
                $thisDep2.stop().slideDown();
            } else {
                $thisDep2.stop().slideUp();
            }
        }
        /* //테블릿, 모바일 gnb 스크립트 */


        /* 웹 gnb 스크립트 */
        function webGnbOpenFn() {
            if ($body.hasClass("web")) {
                var $this = $(this),
                    $thisDep2 = $this.siblings($dep2);
                /*$thisDep2.stop().slideDown();*/
                $thisDep2.css("display", "block");
            }

        }
        function webGnbCloseFn() {
            if ($body.hasClass("web")) {
                var $this = $(this),
                    $thisDep2 = $this.find($dep2);
                /*$thisDep2.stop().slideUp("fast");*/
                $thisDep2.css("display", "none");
            }
        }
        /* //웹 gnb 스크립트 */


        /*웹 전체메뉴 스크립트*/
        function onAllOpenFn() { // 전체메뉴 열림
            if ($body.hasClass("web")) {
                var $this = $(this);
                $this.removeClass("active");
                $allmenuclose.addClass("active");
                $allmenu.addClass("active");
            }
        }

        function onAllCloseFn() { // 전체메뉴 닫힘
            if ($body.hasClass("web")) {
                var $this = $(this);
                $this.removeClass("active");
                $allmenuopen.addClass("active");
                $allmenu.removeClass("active");
            }
        }
        /*//웹 전체메뉴 스크립트*/

        gnbinit();
    }
})(jQuery);
/* :: GNB e :: */





/* :: scroll up s :: */
(function ($) {
    $(document).ready(function () {
        var $doc_h;

        $('.cont-up-btn').on('click', function () {
            $('html, body').stop().animate({
                scrollTop: '0'
            }, 300);
        });

        $(window).on('resize', function() {
            $doc_h = $(document).outerHeight();
        });
    });
})(jQuery);
/* :: scroll up e :: */

/* :: faq s :: */
(function($) {
    $(document).ready(function(){
        $(".faq-box .answer").hide();
        $(".faq-box .question").click(function(){
            $(this).next().slideToggle(300);
            $(".faq-box .question").not(this).next().slideUp(300); /* 클릭 시 다음 질문 닫기 */
            $(this).toggleClass("active");
            return false;
        });
        $(".faq-box .question").eq(0).trigger("click");
    });
})(jQuery);
/* :: faq e :: */

/* :: dotdotdot s :: */
$(document).ready(function() {
    $(".petition-box .tit-box .tit").dotdotdot({
        wrapper  : 'div',
        ellipsis: '... ',
        wrap  : 'word',
        after  : null,
        watch  : true,
        height  : null,
        tolerance: 0
    });

    $(".petition-box .tit-box .con").dotdotdot({
        wrapper  : 'div',
        ellipsis: '... ',
        wrap  : 'word',
        after  : null,
        watch  : true,
        height  : null,
        tolerance: 0
    });
});
/* :: dotdotdot e :: */

/* :: calendar s :: */

/* :: calendar e :: */