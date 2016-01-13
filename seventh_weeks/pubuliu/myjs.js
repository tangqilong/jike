$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var dataImg = {
            "data":
                [
                    {"src":"1.jpg"},
                    {"src":"2.jpg"},
                    {"src":"3.jpg"},
                    {"src":"4.jpg"},
                    {"src":"5.jpg"},
                    {"src":"6.jpg"},
                    {"src":"7.jpg"},
                    {"src":"8.jpg"},
                    {"src":"9.jpg"},
                    {"src":"10.jpg"}
                ]
        };
        window.onscroll = function(){
            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("img-box").appendTo($(".img-con-box"));
                    var content = $("<div>").addClass("img").appendTo(box);
                    //console.log("./tupian/neirongtupian/"+$(value).attr("src"));
                    $("<img>").attr("src","./tupian/neirongtupian/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };
    });
});

function scrollside(){
    var windowHeight = $(window).height();
    var documentHight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return windowHeight + scrollHeight >= documentHight;
}

function imgLocation(){
    var box = $(".img-box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(".img-con-box").width()/boxWidth);
    var boxArr = [];
    box.each(function(index,value){
        var boxHeight = box.eq(index).height();
        if(index<num){
            boxArr[index] = boxHeight;
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);
            //console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight,boxArr);
            //console.log(minboxIndex);
            //console.log($(value));
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    })
}
