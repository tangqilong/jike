//路由模块引入
var express = require('express');
var adminRouter = express.Router();

var model = require('../model/db');
var imgUpload = require('../model/imgUpload');




//后台主页路由
adminRouter.get('/', function(req, res, next) {
	model.user.find({status: 1}, function(err, data) {
		if (err) throw err;
		if (data.length > 0) {
			model.list.find(['news_time', 'Z'], function(err, listAll) {
				if (err) throw err;
				res.status(200);
				res.render('./admin/index.ejs', {listAll, name:data[0].username})
			})
		}else{
			res.redirect('/admin/login');
		}
	})
});


//登录页面路由
adminRouter.get('/login', function(req, res, next) {
	res.status(200);
	res.render('./admin/login.ejs');
});

//判断用户是否存在
adminRouter.get('/userAjax/:userid', function(req, res, next) {
	model.user.count({username: req.params.userid}, function(err, num) {
		if (err) throw err;
		if (num > 0) {
			res.send('1')
		} else {
			res.send('0');
		}
	})
});


adminRouter.post('/userLogin', function(req, res, next) {
	model.user.find(req.body, function(err, data) {
		if (data.length > 0) {
			data[0].save({status:1},function(err){if (err) throw err;console.log('login status to 1')});
			res.redirect('/admin');
		} else {
			res.render('./admin/error.ejs', {
				error: '登录名称或者密码不正确！请重新登录',
				time: 2
			});
		}
	})
});


adminRouter.get('/logout', function(req, res, next) {
    model.user.find({status:1},function(err,data){
    	data[0].save({status:0},function(err){if (err) throw err;console.log('logout status to 0')});
    });
	
	res.redirect('/admin/login');
});


//编辑记录路由
adminRouter.get('/edit/:id', function(req, res, next) {
	model.list.find({
		id: req.params.id
	}, function(err, data) {
		res.status(200);
		res.json(data);
	})
});


//更新记录路由
adminRouter.post('/update', function(req, res, next) {
	var tmpimg = imgUpload(req.files.news_img);

	if (tmpimg.error == 1) {
		res.send('<script>parent.ajaxEdit(1);</script>');
	} else if (tmpimg.error == 2) {
		res.send('<script>parent.ajaxEdit(2);</script>');
	} else if (tmpimg.error == 3) {
		model.list.get(req.body.id, function(err, data) {
			if (err) throw err;
			req.body.news_img = data.news_img;
		})
	} else {
		req.body.news_img = tmpimg.news_img;
	}

	model.list.get(req.body.id, function(err, data) {
		if (err) throw err;
		req.body.news_time = new Date().getTime();
		data.save(req.body, function(err) {
			if (err) throw err;
			res.send('<script>parent.ajaxEdit(4);</script>');
		})
	})

});


//删除记录路由
adminRouter.get('/del/:id', function(req, res, next) {
	model.list.find({
		id: req.params.id
	}).remove(function(err) {
		if (err) throw err;
		res.status(200);
		res.send('ok');
	})
});


//添加记录路由
adminRouter.post('/add', function(req, res, next) {
	var tmpimg = imgUpload(req.files.news_img);
	if (tmpimg.error == 1) {
		res.send('<script>parent.ajaxAdd(1);</script>');
	} else if (tmpimg.error == 2) {
		res.send('<script>parent.ajaxAdd(2);</script>');
	} else if (tmpimg.error == 3) {
		res.send('<script>parent.ajaxAdd(3);</script>');
	} else {
		req.body.news_time = new Date().getTime();
		req.body.news_img = tmpimg.news_img; //
		model.list.create(req.body, function(err, data) {
			res.send('<script>parent.ajaxAdd(4);</script>');
		})
	}
});

module.exports = adminRouter;