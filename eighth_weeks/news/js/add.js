$(document).ready(function(){
    nav_click();
    menu_anima();
    play_1();
    play_2();
});

//热点定时器
function menu_anima(){
    var news_menu = $(".news-menu");
    //console.log(news_menu);
    var num = 0;
    setInterval(function(){
        num++;
        if(num == 11){
            num = 0;
        }
        auto();
        //console.log(num*-40);
    },2000);
    function auto(){
        news_menu.each(function(){
            $(this).eq(0).animate({
                "marginTop":num*-40+"px"
            },500);
        });
    }
}

//轮播定时器
function play_1(){
    var play_rec = $(".recommend .play .sort li");
    var li_rec = $(".recommend .img-box li");
    var num = 0;
    setInterval(function(){
        num++;
        rec();
    },5000);


    function rec(){
        if(num > 3){
            num = 0;
        }
        console.log(num);
        play_rec.eq(num).addClass("col").siblings().removeClass("col");
        li_rec.eq(num).fadeIn(1500).siblings().fadeOut(1500);
    }

}

function play_2(){
    var play_loc = $(".local .play .sort li");
    var li_loc = $(".local .img-box li");
    var play_gos = $(".gossip .play .sort li");
    var li_gos = $(".gossip .img-box li");
    var num = 0;
    setInterval(function(){
        num++;
        many_loc();
    },5000);


    function many_loc(){
        if(num > 2){
            num = 0;
        }
        //console.log(num);
        play_loc.eq(num).addClass("col").siblings().removeClass("col");
        li_loc.eq(num).fadeIn(1500).siblings().fadeOut(1500);
        play_gos.eq(num).addClass("col").siblings().removeClass("col");
        li_gos.eq(num).fadeIn(1500).siblings().fadeOut(1500);
    }
}

//标签切换click
function nav_click(){
    var li = $(".container article nav ul li");
    //console.log(li);
    li.click(function(){
        var _index = $(this).index();
        var div = $(".body-con .js-dom");
        //console.log(div);
        //console.log(_index);
        $(this).find("span").addClass("cur");
        $(this).siblings().find("span").removeClass("cur");
        div.eq(_index).addClass("block").siblings().removeClass("block");
    });
}