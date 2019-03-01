var mongoose = require("mongoose");

var foodSchema =  new mongoose.Schema({
	Fid:Number,
	Fname:String,
	Fprice:Number,
	Fnumber:Number,
	Fcategory:String,
	Fimage:String,	
})

//静态方法，增加食物
foodSchema.statics.insertFood = function(json,callback){
	var food = new Food(json);
	food.save(function(err){
		if(err){
			callback(-2);
			return;
		}
		callback(-1);
	})
}


//类
var Food = mongoose.model('Food',foodSchema);

module.exports = Food;
