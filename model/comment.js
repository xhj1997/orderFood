var mongoose = require ('mongoose');

//设置字段
var CommentSchema = new mongoose.Schema({
	userid:Number,
	username:String,
	message:String,
	date:Date
})

CommentSchema.statics.insertComment = function(json,callback){
		
	var comment = new Comment(json);
	comment.save(function(err){
		if(err){
			callback(-2);  //服务器错误
			return;
		}
		//发回1这个状态
		callback(1);
	});

}

//类
var Comment = mongoose.model("Comment",CommentSchema);

//暴露
module.exports = Comment;

