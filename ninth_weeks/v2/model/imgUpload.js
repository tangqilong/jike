var fs = require('fs');

//图片上传函数模块导出
module.exports = function(obj) {
	if (obj.name) {
		var size = parseInt(obj.size / (1024 * 1024));
		var type = '.' + obj.type.split('/')[1];
		var strAll = ".jpeg.png.gif.bmp";
		var d = new Date();
		var newImgName = d.toLocaleDateString() + " " + parseInt(d.getTime() / 1000) + type;
		if (size > 1) {
			return {
				'error': '1',
				'error_info': '大小超过1m'
			};
		} else if (strAll.indexOf(type) < 0) {
			return {
				'error': '2',
				'error_info': '格式不正确！'
			};
		} else {
			fs.rename(obj.path, './public/image/front/newslist/' + newImgName, function(err) {
				if (err) throw err;
			});
			return {
				'error': '',
				news_img: newImgName
			};
		}
	} else {
		return { //name为空时
			'error': '3',
			'error_info': '没有图片传入哦'
		};
	}
};