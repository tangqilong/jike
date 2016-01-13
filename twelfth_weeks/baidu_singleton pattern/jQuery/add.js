/**
 * Created by Administrator on 2015/11/13.
 */
$(document).ready(function(){
    _weatherHover();
    nav_body();
    videoHover();
    nav_click();
    product();
    con();
});

//天气预报
function _weatherHover(){
    var tar = $(".weather-forecast dl .detailed ul li");
    //console.log(tar);
    tar.each(function(){
        var tar = $(this).eq(0);
        //console.log(tar);
        //console.log(tar.find("p"));
        tar.hover(function(){
            $(this).find("span").css("color","#0079f4");
            $(this).find("p").css("color","#0079f4");
        },function(){
            $(this).find("span").css("color","#666");
            $(this).find("p").css("color","#666");
        });
    });

    var weather = $(".weather");
    //console.log(weather);
    weather.hover(function(){
        $(this).find(".weather-forecast").fadeToggle();
    });
}

//主要内容导航
function nav_body(){
    var care = $(".care");
    //console.log(care);
    care.hover(function(){
        $(this).css("background-color","transparent");
        $(this).find(".care-icon").css("background",'url("images/card_setts_e10ab978.png") no-repeat -17px 0');
    },function(){
        $(this).css("background-color","#a8a8a8");
        $(this).find(".care-icon").css("background",'url("images/card_setts_e10ab978.png") no-repeat -146px 0');
    });

    var nav =$(".nav");
    nav.each(function(index){
        var nav = $(this).eq(index).find("span");
        nav.hover(function(){
            $(this).addClass("bgcolor").siblings().removeClass("bgcolor");
        },function(){
            $(this).removeClass("bgcolor");
        });
    });

    var icon = $(".icon-box");
    icon.hover(function(){
        $(this).find(".icon").css("background",'url("images/card_setts_e10ab978.png") no-repeat -120px -74px');
    },function(){
        $(this).find(".icon").css("background",'url("images/card_setts_e10ab978.png") no-repeat -120px -50px');
    });
}

//视频

function videoHover(){
    var video = $(".body-con .video-body ul li");
    //console.log(video);
    video.each(function(){
        var video = $(this).eq(0);
        video.hover(function(){
            $(this).find(".img-icon").css("display","none");
            $(this).find(".operation").css("display","block");
        },function(){
            $(this).find(".img-icon").css("display","block");
            $(this).find(".operation").css("display","none");
        });
    });
}

//菜单点击

function nav_click(){
    var nav_click = $(".nav");
    nav_click.each(function(){
        var nav_click = $(this).find("span");
        //console.log(nav_click);
        nav_click.click(function(){
            var _index = $(this).index();
            $(this).addClass("span-1").siblings().removeClass("span-1");
            //console.log(_index);
            $(".div").eq(_index).removeClass("none").siblings().addClass("none");
        });
    });
}

//更多产品

function product(){
    var product = $(".product");
    //console.log(product);
    product.eq(0).hover(function(){
        $(this).css({
            "background-color":"#fff",
            "color":"#333",
            "border-bottom":"1px solid #f2f2f2"
        });
        $(this).find(".drop-down").css("display","block");
    },function(){
        $(this).css({
            "background-color":"#398bfb",
            "color":"#fff",
            "border-bottom":"none"
        });
        $(this).find(".drop-down").css("display","none");
    });
}

//用户

function con(){
    var con = $(".con");
    con.each(function(){
        var con = $(this).eq(0);
        con.hover(function(){
            $(this).find(".box").css("display","block");
        },function(){
            $(this).find(".box").css("display","none");
        });
    });
}