(function($) {
    $(document).ready(function() {
        mainVisSlide();
    });

    function mainVisSlide(){
        var $slideTarget = jQuery('.petition-slide');
        var slide = new opSlide( $slideTarget );
        var controlobj = {};
        controlobj.nextbtn = $slideTarget.find('.next');
        controlobj.prevbtn = $slideTarget.find('.prev');
        controlobj.indi = $slideTarget.find('.op-indibox');
        controlobj.pager = $slideTarget.find('.op-pager');
        controlobj.play = $slideTarget.find('.op-play');
        controlobj.stop = $slideTarget.find('.op-stop');
        controlobj.speed = 2;
        controlobj.auto = true;
        slide.init( controlobj );
    }
})(jQuery);

/* main slide s */
(function($) {
    $(document).ready(function() {
        mainVisSlide
        /*mainBanSlide();*/
    });

    function mainVisSlide(){
        var $slideTarget = jQuery('.petition-slide');
        var slide = new opSlide( $slideTarget );
        var controlobj = {};
        controlobj.nextbtn = $slideTarget.find('.next');
        controlobj.prevbtn = $slideTarget.find('.prev');
        controlobj.indi = $slideTarget.find('.slide-indibox');
        controlobj.pager = $slideTarget.find('.op-pager');
        controlobj.play = $slideTarget.find('.op-play');
        controlobj.stop = $slideTarget.find('.op-stop');
        controlobj.speed = 2;
        controlobj.auto = true;
        slide.init( controlobj );
    }
})(jQuery);
/* main slide e */


/* main info slide script */
function mainBanSlide(){
    var $slideTarget = jQuery('.bsslidejs');
    var slide = new bsSlide( $slideTarget );
    function loadslide() {
        var controlobj = {};
        controlobj.nextbtn = $slideTarget.find('.bas-next');
        controlobj.prevbtn = $slideTarget.find('.bas-prev');
        controlobj.stopbtn = $slideTarget.find('.bs-stop');
        controlobj.playbtn = $slideTarget.find('.bs-play');
        controlobj.indi = $slideTarget.find('.slide-indibox');
        controlobj.pager = $slideTarget.find('.bs-pager');
        controlobj.speed = 1.2;
        controlobj.viewLen = [1, 1, 1];
        controlobj.totmove = false;
        controlobj.autoMove = true;

        slide.init( controlobj );
    }
    loadslide();
}
/* //main info slide script */