var mongoose = require('mongoose');

//设置字段
var UserSchema = new mongoose.Schema({
	username:String,
	phone:String,
	password  : String,
	email:String	
})

UserSchema.statics.insertUser = function(json,callback){
		
	var user = new User(json);
	user.save(function(err){
		if(err){
			callback(-2);  //服务器错误
			return;
		}
		//发回1这个状态
		callback(1);
	});

}

//类
var User = mongoose.model("User",UserSchema);

//暴露
module.exports = User;