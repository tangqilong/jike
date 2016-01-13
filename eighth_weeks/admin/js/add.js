/**
 * Created by Administrator on 2015/11/22.
 */
$(document).ready(function(){
    menuClick();
    ulClick();
});

function menuClick(){
    var span = $(".left-menu div span");
    //console.log(span);
    span.each(function(){
        $(this).eq(0).click(function(){
            $(this).siblings("ul").slideToggle();
        });
    });
}

function ulClick(){
    var have = $(".have");
    //console.log(have);
    have.click(function(){
        var _index = $(this).index();
        var right_box = $(".right-box");
        console.log(_index);
        right_box.eq(_index).addClass("none").siblings().removeClass("none");
    });
}