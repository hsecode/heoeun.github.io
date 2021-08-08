/* :: reply area s :: */
(function($) {
    $(document).ready(function() {
        $(".reply-write .agreebtn-box .reply-guide.reply0").click(function(){
            $(".reply-txt-area.area0").toggleClass("active");
            $(".reply-write .reply-guide.reply0").toggleClass("active");
        });
        $(".reply-write .agreebtn-box .reply-guide.reply1").click(function(){
            $(".reply-txt-area.area1").toggleClass("active");
            $(".reply-write .reply-guide.reply1").toggleClass("active");
        });
    });
})(jQuery);
/* :: reply area e :: */

/* main slide s */
(function($) {
    $(document).ready(function() {
        mainBanSlide();
    });

    /* :: info banner slide s :: */
    function mainBanSlide(){
        var $slideTarget = jQuery('.bannerslidejs');
        var slide = new bsSlide( $slideTarget );
        function loadslide() {
            var controlobj = {};
            controlobj.nextbtn = $slideTarget.find('.bas-next');
            controlobj.prevbtn = $slideTarget.find('.bas-prev');
            controlobj.stopbtn = $slideTarget.find('.bs-stop');
            controlobj.playbtn = $slideTarget.find('.bs-play');
            controlobj.speed = 1.2;
            controlobj.viewLen = [1, 1, 1];
            controlobj.totmove = false;
            controlobj.autoMove = false;

            slide.init( controlobj );
        }
        loadslide();
    }
    /* :: info banner slide e :: */
})(jQuery);


/* main slide e */