$(document).ready(function(){
    menuHover();
    menuShow();
    labelShow();
    colorRed();
    contentMenu();
    qqIcon();
    imgHide();
    searchClick();
    dianji();
});

//子菜单hover效果
function menuHover(){
    var main = $(".main");
    main.each(function(index){
        var main = $(".main").eq(index);
        //console.log(main);
        var mainHeight = main.height();
        //console.log(mainHeight);
        main.hover(function(){
            $(this).find(".menu-show").css({
                "display":"block",
                "margin-top":"-44"-0-(mainHeight+1)*index
            });
        },function(){
            $(this).find(".menu-show").css("display","none");
        })
    })
}

//菜单显示
function menuShow(){
    var ul = $(".pager .pager-menu  .pager-menu-left ul").eq(0);
    //console.log(ul);
    ul.hover(function(){
        $(this).find(".hide").css("display","block");
    },function(){
        $(this).find(".hide").css("display","none");
    })
}

//介绍课程标签效果

function labelShow(){
    var label = $(".nav-ul-li-ul li");
    //console.log(label);
    label.each(function(index){
        var label = $(".nav-ul-li-ul li").eq(index);
        //console.log(label);
        label.hover(function(){
            label.addClass("z-index");
            label.css("height","255");
            label.find(".p").slideDown(500);
            label.find(".centent-em1").slideDown(500);
            label.find(".centent-em2").slideDown(500);
            label.find(".img1").slideDown(500);
        },function(){
            label.removeClass("z-index");
            label.css("height","185");
            label.find(".p").slideUp(500);
            label.find(".centent-em1").slideUp(500);
            label.find(".centent-em2").slideUp(500);
            label.find(".img1").slideUp(500);
        })
    });
}

//内容菜单hover效果

function contentMenu(){
    var nav_li = $(".centent .centent-box .centent-nav .nav-ul .nav-li");
    var nav_li_ul = $(".nav-ul-li-ul");
    nav_li.each(function(index){
        var nav_li = $(".centent .centent-box .centent-nav .nav-ul .nav-li").eq(index);
        //console.log(nav_li);
        nav_li.hover(function(){
            $(this).find(".nav-ul-li-ul").addClass("block");
            $(this).siblings().find(".nav-ul-li-ul").removeClass("block");
            //console.log($(this).siblings().find(".nav-ul-li-ul"));
        })
    });
}

//轮播
function colorRed(){
    var red = $(".pager-menu-middle .pager-menu-middle-icon .pager-menu-middle-icon-red li");
    var img_li = $(".pager-menu-middle .pager-menu-middle-img ul li");
    var left = $(".pager-menu-middle-icon-left");
    var right = $(".pager-menu-middle-icon-right");
    var _index = 0;
    red.hover(function(){
        var _index = $(this).index();
        //console.log(_index);
        $(this).addClass("red").siblings().removeClass("red");
        img_li.eq(_index).fadeIn().siblings().fadeOut();
    });
    left.click(function(){
        _index--;
        if(_index < 0){
            _index = 3;
        }
        anima();
    });
    right.click(function(){
        _index++;
        if(_index > 3){
            _index = 0;
        }
        anima();
    });
    function anima(){
        red.eq(_index).addClass("red").siblings().removeClass("red");
        img_li.eq(_index).fadeIn().siblings().fadeOut();
    }
}

//微信图标
function qqIcon(){
    var qq = $(".qq-icon").eq(0);
    var img = qq.find("img");
    qq.hover(function(){
        img.css("display","block");
    },function(){
        img.css("display","none");
    })
}

//右侧悬浮栏隐藏
function imgHide(){
    var del = $(".del");
    //console.log(del);
    del.each(function(index){
        var del = $(".del").eq(index);
        //console.log(del);
        del.click(function(){
            $(this).css("display","none");
            $(this).siblings().css("display","none");
        })
    })
}

//搜索栏点击事件
function searchClick(){
    var search = $(".search-text");
    //var body = $(document);
    //console.log(body);
    //console.log(search);
    search.click(function(){
        search.siblings(".search-btn").addClass("click");
        search.siblings(".search-link").fadeOut();
    });
    search.blur(function(){
        search.siblings(".search-btn").removeClass("click");
        search.siblings(".search-link").fadeIn();
    });
}

//轮播

function dianji(){
    var left = $(".icon-left");
    var right = $(".icon-right");
    var cooper = $(".cooperation-img").find("a");
    var _index = 0;
    //console.log(cooper);
    left.click(function(){
        var incre = _index++;
        //var caonima = i++;
       if(incre > 4){
            _index = 0;
        }
        cooper.find("img").each(function(index){
            var parse = parseInt(incre+index+1);
            if(index > 5){
                index = 0;
            }
            if(parse > 5){
                parse = parseInt((5 - index - incre)*-1);
            }
            $(this).attr("src","tupian/lunbo"+ parse +".jpg");

        });
        //console.log(incre);
    });
    right.click(function(){

    });
}