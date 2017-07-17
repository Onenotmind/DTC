function getBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    var btypeInfo = (ua.match(/firefox|chrome|safari|opera/g) || "other")[0];
    if ((ua.match(/msie|trident/g) || [] )[0]) {
        btypeInfo = "msie";
    }
    var pc = "";
    var prefix = "";
    var plat = "";
    //濡傛灉娌℃湁瑙︽懜浜嬩欢 鍒ゅ畾涓篜C
    var isTocuh = ("ontouchstart" in window) || (ua.indexOf("touch") !== -1) || (ua.indexOf("mobile") !== -1);
    if (isTocuh) {
        if (ua.indexOf("ipad") !== -1) {
            pc = "pad";
        } else if (ua.indexOf("mobile") !== -1) {
            pc = "mobile";
        } else if (ua.indexOf("android") !== -1) {
            pc = "androidPad";
        } else {
            pc = "pc";
        }
    } else {
        pc = "pc";
    }
    switch (btypeInfo) {
        case "chrome":
        case "safari":
        case "mobile":
            prefix = "webkit";
            break;
        case "msie":
            prefix = "ms";
            break;
        case "firefox":
            prefix = "Moz";
            break;
        case "opera":
            prefix = "O";
            break;
        default:
            prefix = "webkit";
            break
    }
    plat = (ua.indexOf("android") > 0) ? "android" : navigator.platform.toLowerCase();
    return {
        version: (ua.match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],     //鐗堟湰
        plat: plat,                   //绯荤粺
        type: btypeInfo,              //娴忚鍣�
        pc: pc,
        prefix: prefix,                //鍓嶇紑
        isMobile: (pc == "pc") ? false : true              //鏄惁鏄Щ鍔ㄧ
    };
}
$(function () {
    var param = {
        onLeave: function (index, nextIndex) {
            var $header = $("#dhgHeader");
            if (nextIndex === 2) {
                $header.addClass("gary");
                $header.find(".logo").attr("src","./front/images/leftlogo2.png");
            } else {
                $header.removeClass("gary");
                $header.find(".logo").attr("src","./front/images/leftlogo2.png");
            }
        }
    };
   $(".nav-news").on("click", function( e ) {
    $('#mainContent').fullpage.moveTo(6,0);
   });
   $(".nav-main").on("click", function( e ) {
    $('#mainContent').fullpage.moveTo(1,0);
   });
     $('.language_text').click(function(){
        if($('#language_gather').css('display')=='none'){
        $('#language_gather').show();
    }else {
        $('#language_gather').hide();
    }
    });
    $('.down_icon').click(function(){
        if($('#language_gather').css('display')=='none'){
        $('#language_gather').show();
    }else {
        $('#language_gather').hide();
    }
    });
    $('.content2').click(function(){
        if($('.nav-main').find('span').text() == 'Home'){
            window.location.href='./newsDetail_en.html?news=1';
        }else {
        window.location.href='./newsDetail.html?news=1';
    }
    });
    $('.content1').click(function(){
        if($('.nav-main').find('span').text() == 'Home'){
            window.location.href='./newsDetail_en.html?news=2';
        }else {
        window.location.href='./newsDetail.html?news=2';
    }
    });
    if(!getBrowser().isMobile){
        $('#mainContent').fullpage(param);
        $(window).resize(function() {
            setAutoPageHeight();
        });
        setAutoPageHeight();
    }else{
        $('html').css("overflow","auto");
        $('body').css("overflow","auto");
    }
});
function setAutoPageHeight(){
    var height = $(window).height();
    if(height <= 820){
        $(".section .fp-tableCell").css("padding-top",".71rem");
    }else {
        $(".section .fp-tableCell").css("padding-top","0");
    }
}