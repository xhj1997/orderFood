var mongoose = require("mongoose");

var RecommendSchema =  new mongoose.Schema({
	Fid:Number,
	Fname:String,
	Fprice:Number,
	Fnumber:Number,
	Fcategory:String,
	Fimage:String,	
})

//静态方法，增加食物
RecommendSchema.statics.insertRecommend = function(json,callback){
	var recommend = new recommend(json);
	recommend.save(function(err){
		if(err){
			callback(-2);
			return;
		}
		callback(-1);
	})
}

//类
var recommend = mongoose.model('recommend',RecommendSchema);

module.exports = recommend;