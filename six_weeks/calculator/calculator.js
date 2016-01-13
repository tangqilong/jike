var num=0;  //放置输入的值
var result=0;   //保留输入的值
var numshow="0";    //输出的值
var operate=0; //判断输入状态
var calcul=0; //判断计算状态
var quit=0; //防止按键的重复

//输入数字
var num0 = document.getElementById("num0");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
num0.onclick = function inpOutput(){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(0);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num1.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(1);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num2.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(2);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num3.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(3);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num4.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(4);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num5.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(5);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num6.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(6);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num7.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(7);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num8.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(8);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}
num9.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "") : "";
    str=str + String(9);
    document.getElementById("text").value=str;
    operate=0;
    quit=0;
}

//AC键
var ac = document.getElementById("ac");
ac.onclick = function (){
    num=0;
    result=0;
    numshow="0";
    document.getElementById("text").value="0";
}

//小数点
var doc = document.getElementById("doc");
doc.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? ((operate==0) ? str : "0") : "0";
    for(i=0; i<=str.length;i++){
        if(str.substr(i,1)==".") return false;
    }
    str=str + ".";
    document.getElementById("text").value=str;
    operate=0;
}

//退格
var del = document.getElementById("del");
del.onclick = function (){
    var str=document.getElementById("text").value+"";
    str=(str!="0") ? str : "";
    str=str.substr(0,str.length-1);
    str=(str!="") ? str : "0";
    document.getElementById("text").value=str;
}

//加法
var plus = document.getElementById("plus");
plus.onclick = function (){
    calculate(); //调用计算函数
    operate=1; //更改输入状态
    calcul=1; //更改计算状态为加
}
//减法
var minus = document.getElementById("minus");
minus.onclick = function (){
    calculate();
    operate=1;
    calcul=2;
}
//乘法
var times = document.getElementById("times");
times.onclick = function (){
    calculate();
    operate=1;
    calcul=3;
}
//除法
var divide = document.getElementById("divide");
divide.onclick = function (){
    calculate();
    operate=1;
    calcul=4;
}
//等于
var equal = document.getElementById("equal");
equal.onclick = function (){
    calculate();
    operate=1;
    num=0;
    result=0;
    numshow="0";
}

function calculate(){
    numshow=Number(document.getElementById("text").value);
    if(num!=0 && quit!=1){ //判断前一个运算数是否为零以及防重复按键的状态
        switch(calcul){ //判断要输入状态
            case 1:result=num+numshow;break; //计算"+"
            case 2:result=num-numshow;break; //计算"-"
            case 3:result=num*numshow;break;
            case 4:if(numshow!=0){result=num/numshow;}else{document.getElementById("note").innerHTML="被除数不能为零！"; setTimeout(clearnote,4000)} break;
            case 5:result=num%numshow;break;
        }
        quit=1; //避免重复按键
    }
    else{
        result=numshow;
    }
    numshow=String(result);
    document.getElementById("text").value=numshow;
    num=result; //存储当前值
}