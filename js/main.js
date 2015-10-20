/**
 * Created by Sasa RA on 10/20/15.
 */
var $topSection = $(".topSection");
var $centerSection = $(".centerSection");
var $bottomSection = $(".bottomSection");

var $leftSection = $(".leftSection");
var $middleSection = $(".middleSection");
var $rightSection = $(".rightSection");

var $leftTop = $(".leftTopSection");
var $leftCenter = $(".leftCenterSection");
var $leftBottom = $(".leftBottomSection");

var $middleTop = $(".middleTopSection");
var $middleCenter = $(".middleCenterSection");
var $middleBottom = $(".middleBottomSection");

var $rightTop = $(".rightTopSection");
var $rightCenter = $(".rightCenterSection");
var $rightBottom = $(".rightBottomSection");

//Set the pixel dimensions below...

var hoverMain = 350;
var hoverOther = 125;

var clickMain = 480;
var clickOther = 60;

var dblclickMain = 600;
var dblclickOther = 0;

var deActivate = 200;

//Set the Animation Time and Easing below...

var sTime = 0.5;
var sEase = ("Bounce" + "." + "easeOut");

var animating = false;


/*
 Some different Easings.

 Bounce.easeOut
 Power3.easeOut
 Circ.easeOut
 Elastic.easeOut.config(1, 0.3)
 <script src="myScript.js"></script><script src="myScript.js"></script>
 */

var APP = {
    init : function() {
        APP.loadScripts();
    },
    loadScripts : function() {
        $.getScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.0/TweenMax.min.js");
        $.getScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TimelineMax.min.js", APP.loadPage);
    },
    loadPage : function() {
        $topSection.hover(APP.hoverTop, APP.deactivateAll);
        $centerSection.hover(APP.hoverCenter, APP.deactivateAll);
        $bottomSection.hover(APP.hoverBottom, APP.deactivateAll);

        $leftSection.hover(APP.hoverLeft, APP.deactivateAll);
        $middleSection.hover(APP.hoverMiddle, APP.deactivateAll);
        $rightSection.hover(APP.hoverRight, APP.deactivateAll);

        $topSection.click(APP.clickTop);
        $centerSection.click(APP.clickCenter);
        $bottomSection.click(APP.clickBottom);

        $leftSection.click(APP.clickLeft);
        $middleSection.click(APP.clickMiddle);
        $rightSection.click(APP.clickRight);

        $topSection.dblclick(APP.dblclickTop);
        $centerSection.dblclick(APP.dblclickCenter);
        $bottomSection.dblclick(APP.dblclickBottom);

        $leftSection.dblclick(APP.dblclickLeft);
        $middleSection.dblclick(APP.dblclickMiddle);
        $rightSection.dblclick(APP.dblclickRight);

    },
    hoverTop : function() {
        TweenMax.to($topSection,sTime,{height:hoverMain,ease:sEase});
        TweenMax.to($centerSection,sTime,{height:hoverOther,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:hoverOther,ease:sEase});
    },
    hoverCenter : function() {
        TweenMax.to($topSection,sTime,{height:hoverOther,ease:sEase});
        TweenMax.to($centerSection,sTime,{height:hoverMain,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:hoverOther,ease:sEase});
    },
    hoverBottom : function() {
        TweenMax.to($topSection,sTime,{height:hoverOther,ease:sEase});
        TweenMax.to($centerSection,sTime,{height:hoverOther,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:hoverMain,ease:sEase});
    },
    hoverLeft : function() {
        TweenMax.to($leftSection,sTime,{width:hoverMain,ease:sEase});
        TweenMax.to($middleSection,sTime,{width:hoverOther,ease:sEase});
        TweenMax.to($rightSection,sTime,{width:hoverOther,ease:sEase});
    },
    hoverMiddle : function() {
        TweenMax.to($leftSection,sTime,{width:hoverOther,ease:sEase});
        TweenMax.to($middleSection,sTime,{width:hoverMain,ease:sEase});
        TweenMax.to($rightSection,sTime,{width:hoverOther,ease:sEase});
    },
    hoverRight : function() {
        TweenMax.to($leftSection,sTime,{width:hoverOther,ease:sEase});
        TweenMax.to($middleSection,sTime,{width:hoverOther,ease:sEase});
        TweenMax.to($rightSection,sTime,{width:hoverMain,ease:sEase});
    },
    clickTop : function() {
        TweenMax.to($topSection,sTime,{height:clickMain, ease:sEase});
        TweenMax.to($centerSection,sTime,{height:clickOther,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:clickOther,ease:sEase});
    },
    clickCenter : function() {
        TweenMax.to($topSection,sTime,{height:clickOther, ease:sEase});
        TweenMax.to($centerSection,sTime,{height:clickMain,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:clickOther,ease:sEase});
    },
    clickBottom : function() {
        TweenMax.to($topSection,sTime,{height:clickOther, ease:sEase});
        TweenMax.to($centerSection,sTime,{height:clickOther,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:clickMain,ease:sEase});
    },
    clickLeft : function() {
        TweenMax.to($leftSection,sTime,{width:clickMain, ease:sEase});
        TweenMax.to($middleSection,sTime,{width:clickOther,ease:sEase});
        TweenMax.to($rightSection,sTime,{width:clickOther,ease:sEase});
    },
    clickMiddle : function() {
        TweenMax.to($middleSection,sTime,{width:clickMain,ease:sEase});
        TweenMax.to($leftSection,sTime,{width:clickOther,ease:sEase});
        TweenMax.to($rightSection,sTime,{width:clickOther,ease:sEase});
    },
    clickRight : function() {
        TweenMax.to($rightSection,sTime,{width:clickMain,ease:sEase});
        TweenMax.to($leftSection,sTime,{width:clickOther,ease:sEase});
        TweenMax.to($middleSection,sTime,{width:clickOther,ease:sEase});
    },
    dblclickTop : function() {
        TweenMax.to($topSection,sTime,{height:dblclickMain, ease:sEase});
        TweenMax.to($centerSection,sTime,{height:dblclickOther,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:dblclickOther,ease:sEase});

    },
    dblclickCenter : function() {
        TweenMax.to($topSection,sTime,{height:dblclickOther, ease:sEase});
        TweenMax.to($centerSection,sTime,{height:dblclickMain,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:dblclickOther,ease:sEase});
    },
    dblclickBottom : function() {
        TweenMax.to($topSection,sTime,{height:dblclickOther, ease:sEase});
        TweenMax.to($centerSection,sTime,{height:dblclickOther,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:dblclickMain,ease:sEase});
    },
    dblclickLeft : function() {
        TweenMax.to($leftSection,sTime,{width:dblclickMain, ease:sEase});
        TweenMax.to($middleSection,sTime,{width:dblclickOther,ease:sEase});
        TweenMax.to($rightSection,sTime,{width:dblclickOther,ease:sEase});

    },
    dblclickMiddle : function() {
        TweenMax.to($middleSection,sTime,{width:dblclickMain,ease:sEase});
        TweenMax.to($leftSection,sTime,{width:dblclickOther,ease:sEase});
        TweenMax.to($rightSection,sTime,{width:dblclickOther,ease:sEase});
    },
    dblclickRight : function() {
        TweenMax.to($rightSection,sTime,{width:dblclickMain,ease:sEase});
        TweenMax.to($leftSection,sTime,{width:dblclickOther,ease:sEase});
        TweenMax.to($middleSection,sTime,{width:dblclickOther,ease:sEase});
    },
    deactivateAll : function() {
        TweenMax.to($topSection,sTime,{height:deActivate,ease:sEase});
        TweenMax.to($centerSection,sTime,{height:deActivate,ease:sEase});
        TweenMax.to($bottomSection,sTime,{height:deActivate,ease:sEase});

        TweenMax.to($leftSection,sTime,{width:deActivate,ease:sEase});
        TweenMax.to($middleSection,sTime,{width:deActivate,ease:sEase});
        TweenMax.to($rightSection,sTime,{width:deActivate,ease:sEase});
    }
};

$(document).ready(function() {
    APP.init();
});