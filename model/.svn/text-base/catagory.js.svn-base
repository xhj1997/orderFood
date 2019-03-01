var mongoose = require("mongoose");

var CatagorySchema =  new mongoose.Schema({
	team:String,
    tEnalish:String,
    list:[
        {
            tname:String,
            teng:String,
            tnum:Number,
            tprice:Number,
            timage:String
        },
    ],
});
//静态方法，增加食物
CatagorySchema.statics.insertCatagory = function(json,callback){
    var catagory = new catagory(json);
    console.log(123);
    console.log(catagory);
	catagory.save(function(err){
		if(err){
			callback(-2);
			return;
		}
        callback(-1);
	})
}

//类
var catagory = mongoose.model('catagory',CatagorySchema);
module.exports = catagory;
