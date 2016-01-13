//颜色按钮
var yellow = document.getElementById("yellow"); //黄色按钮
var red = document.getElementById("red");   //红色按钮
var grey = document.getElementById("grey");     //灰色按钮
var pink = document.getElementById("pink");    //粉色按钮
var orange = document.getElementById("orange");  //橘色按钮
//需要改变颜色的元素
var font_color = document.getElementsByClassName("menu-color-green");   //字体颜色
var nav_first = document.getElementsByClassName("first");   //li标签
console.log(nav_first);
var nav_font = document.getElementById("nav-font"); //li标签字体颜色
var js_bg = document.getElementsByClassName("js-bg");   //导航条背景颜色

yellow.onclick = function color_yellow(){
    for(i = 0;i<font_color.length;i++){
        font_color[i].style.color = "#a4a400";
    }
    for(i = 0;i<js_bg.length;i++){
        js_bg[i].style.color = "#a4a400";
    }
    nav_first[0].style.backgroundColor = "#a4a400";
    nav_font.style.color = "white";
    localStorage.setItem("color","#a4a400");
}

red.onclick = function color_red(){
    for(i = 0;i<font_color.length;i++){
        font_color[i].style.color = "red";
    }
    for(i = 0;i<js_bg.length;i++){
        js_bg[i].style.color = "red";
    }
    nav_first[0].style.backgroundColor = "red";
    nav_font.style.color = "white";
    localStorage.setItem("color","red");
}

grey.onclick = function color_grey(){
    for(i = 0;i<font_color.length;i++){
        font_color[i].style.color = "grey";
    }
    for(i = 0;i<js_bg.length;i++){
        js_bg[i].style.color = "grey";
    }
    nav_first[0].style.backgroundColor = "grey";
    nav_font.style.color = "white";
    localStorage.setItem("color","grey");
}

pink.onclick = function color_pink(){
    for(i = 0;i<font_color.length;i++){
        font_color[i].style.color = "#c8959d";
    }
    for(i = 0;i<js_bg.length;i++){
        js_bg[i].style.color = "#c8959d";
    }
    nav_first[0].style.backgroundColor = "#c8959d";
    nav_font.style.color = "white";
    localStorage.setItem("color","#c8959d");
}

orange.onclick = function color_orange(){
    for(i = 0;i<font_color.length;i++){
        font_color[i].style.color = "orange";
    }
    for(i = 0;i<js_bg.length;i++){
        js_bg[i].style.color = "orange";
    }
    nav_first[0].style.backgroundColor = "orange";
    nav_font.style.color = "white";
    localStorage.setItem("color","orange");
}

var fun = function (){
    for(i = 0;i<font_color.length;i++){
        font_color[i].style.color = localStorage.getItem("color");
    }
    for(i = 0;i<js_bg.length;i++){
        js_bg[i].style.color = localStorage.getItem("color");
    }
    nav_first[0].style.backgroundColor = localStorage.getItem("color");
    nav_font.style.color = "white";
}();