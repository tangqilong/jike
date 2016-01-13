$(document).ready(function() {
    dtClick();
    navClick();
    imgClick();
});

function dtClick() {
    var dt = $(".container .menu dl dt");
    //console.log(dt);
    dt.each(function(index) {
        var dt = $(".container .menu dl dt").eq(index);
        dt.click(function() {
            $(this).siblings(".box-click").slideToggle(500);
        });
    });
}

function navClick() {
    var navLi = $(".nav-box ul li");
    var box = $(".box-con .box");
    //console.log(navLi);
    //console.log(box);
    navLi.click(function() {
        var _index = $(this).index();
        box.eq(_index).addClass("block").siblings(".box").removeClass("block");
        //console.log(box.eq(_index));
        //console.log(_index);
    });
}

function imgClick() {
    var jsLi = $(".js ul li");
    //console.log(jsLi);
    jsLi.each(function(index) {
        var jaLi = $(".js ul li").eq(index);
        jaLi.click(function() {
            $(this).find("img").addClass("block");
            $(this).siblings().find("img").removeClass("block");
        });
    });
}