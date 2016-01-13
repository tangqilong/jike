
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var orm=require('orm');
var multiparty=require('connect-multiparty');



var homeRouter = require('./routes/homeRouter');    //前台路由模块
var adminRouter = require('./routes/adminRouter');   //后台路由模块


var app = express();


//模板渲染
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//body parser解析
app.use(multiparty());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//静态资源
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRouter);
app.use('/', homeRouter);

module.exports = app;
