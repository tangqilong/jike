var orm = require('orm');
var opts = require('../conf/setting');
var db = orm.connect(opts, function(err, db) {
	if (err) throw err;
	return db;
});

var model = {};

model.list = db.define('bd_list', {
	news_title: String,
	news_content: String,
	news_img: String,
	news_type_id: Number,
	news_label_id: Number,
	news_time: String
}, {
	methods: {
		news_timeNow: function() {
			var d = new Date();
			d.setTime(this.news_time);
			return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
		}
	}
});

model.type = db.define('bd_type', {
	news_type_name: String
});

model.label = db.define('bd_label', {
	news_label_name: String
});

model.list.hasOne('news_type', model.type, {
	autoFetch: true
});
model.list.hasOne('news_label', model.label, {
	autoFetch: true
});

model.user = db.define('bd_user', {
	username: String,
	password: String,
	status:String
});

module.exports = model;