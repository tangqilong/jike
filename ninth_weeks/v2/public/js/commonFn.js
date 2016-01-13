//cookie设置函数封装  传入键名 键值 和过期天数
function setCookie(name, value, iDay) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = name + '=' + value + ';expires=' + oDate; //设置cookie
}

//读取cookie函数 传入键名
function getCookie(name) {
	var cookieArr = document.cookie.split("; ");
	for (var i = 0; i < cookieArr.length; i++) {
		var tmpArr = cookieArr[i].split("=");
		if (tmpArr[0] == name) {
			return tmpArr[1];
		}
	}
	return "";
}

//选项卡切换函数封装
function tabSwitch(cName, eventType, fnCallback) {
	var tabIndex;
	var tag = document.querySelector(cName).children[0].tagName;
	var tabEles = $(cName + ">" + tag);
	var arglen = arguments.length;
	tabEles.each(function(index, value) {
		$(this).on(eventType, function() {
			tabEles.removeClass('active');
			$(this).addClass('active');
			if (arglen == 3) {
				fnCallback(index);
			}
		})
	})
}