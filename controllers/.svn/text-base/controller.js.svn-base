var url = require("url");
var formidable = require("formidable");
var Food = require("../model/foodListTable.js");
http = require('http'),
util = require('util'),
fs = require('fs'),
path = require('path');


var Comment = require("../model/Comment.js");
var formidable = require("formidable");
var foodListTable = require("../model/foodListTable.js");

var Food = require("../model/foodListTable.js");
var recommendList = require("../model/recommend.js");

var User = require("../model/user.js");
var catagory = require("../model/catagory.js");


  var arr = []
exports.showHome = function(req,res){
    res.render("home",{login:req.session.login,username:req.session.username});
}


//exports.showHome = function (req, res) {
//  res.render("home", { username: req.session.username });
//}


exports.showCenter = function (req, res) {
    res.render("center");
}

exports.showRecommend = function (req, res) {
    res.render("recommend",{login:req.session.login,username: req.session.username,phone : req.session.phone, email:req.session.email });
}



exports.getBestSale = function (req, res) {
    recommendList.find({}, function (err, result) {
        if (err) {
            console.log("failure");
        }
        console.log(result);
        res.send(result);
    })
}
exports.showBestSale = function (req, res) {
    res.render("bestSale");
}

exports.showCatagory = function (req, res) {
    res.render("catagory");
}
exports.getCatagory = function (req, res) {
    catagory.find({}, function (err, result) {
        console.log("1232");
        if (err) {
            console.log("failure");
        }
        console.log(result);
        // res.render(result);
    })
}

exports.showDetail = function (req, res) {

    res.render("detail");
}


exports.showHistoryOrder = function (req, res) {
    res.render("historyOrder");
}

exports.showJiesuan = function (req, res) {

    res.render("jiesuan");
}

exports.showManage = function (req, res) {
    res.render("manage", { username: req.session.username});
}

exports.showHead = function (req, res) {
    res.render("head",{login:req.session.login,username:req.session.username});
}

exports.showFooter = function (req, res) {
    res.render("footer");
}

exports.showProductManage = function (req, res) {
    res.render("productManage");
}

exports.showOrderManage = function (req, res) {
    res.render("orderManage");
}

exports.showNone = function (req, res) {
    res.render("none");
}




//这是添加评论的方法
exports.saveRecommend = function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		console.log("接收来自ajax的数据:"+ JSON.stringify(fields));
		Comment.insertComment(fields,function(result){
			console.log("数据处理完毕，得到code="+ result);
			res.json({"code": result});
		})
	})
}


exports.showGljTestOne = function(req,res){
	res.render("gljTestOne");
}



 exports.showSide = function(req,res){
    res.render("side",{arr:arr});
   
}


//根据_id获取每一条数据

exports.showData = function (req, res) {


//  console.log(url.parse(req.url, true).query.id)
    var id = url.parse(req.url, true).query.id;
  

    recommendList.find({ _id: id }, function (err, result) {
    	
        //         console.log(result);
        for(var i=0;i<result.length;i++){
            arr.push(result[i]);
        }
//      console.log(arr);
       	res.send(arr);

    });
}

exports.showCart = function (req, res) {
//	res.render({"cart",{arr:arr}},{"head",{login:req.session.login,username:req.session.username}});
	res.render("cart",{arr:arr});
//	res.render("head",{login:req.session.login,username:req.session.username});
}




exports.showGljTestTwo = function (req, res) {

    		res.render("gljTestTwo",{arr:arr});

}
//删除购物车物品
exports.deleteData = function (req, res) {
    
//  console.log(url.parse(req.url, true).query.id)
    var id = url.parse(req.url, true).query.id;

    recommendList.find({ _id: id }, function (err, result) {
    	arr.splice( arr.indexOf( result ), 1 ); 
    	
     	res.send(arr);
//   	 console.log(arr);
    })
    
   
   }
//结算后清空购物车
exports.clearCart = function(req,res){
	arr = [];
//	console.log(arr);
	res.send(arr);
}






//获取所有菜单数据
exports.showProductManageSave = function (req, res) {

    console.log('9090');
    Food.find({}, function (err, result) {
        // console.log(result);
        res.send(result);
    });

}
//修改菜单
exports.showChangeFood = function(req,res){
    var form = new formidable.IncomingForm();

    //设置上传文件的目录
    form.uploadDir = './public/images/food';
    //解析文件的上传信息
    form.parse(req,function(err,fields,files){
        console.log('接收来自ajax的数据：'+JSON.stringify(fields));

        //获取上传文件的后缀名
        var extname = path.extname(files.Fimage.name);

        var realImagesPath = files.Fimage.path + extname;

        fs.rename(files.Fimage.path,realImagesPath,function(err){
            console.log('图片保存在'+JSON.stringify(realImagesPath));
            realImagesPath = realImagesPath.replace('public\\','');
            console.log(realImagesPath);
            fields.Fimage = realImagesPath;

            if(fields.Fid){
            Food.find({Fid:fields.Fid},function(err,data){
                var food = data[0];
                food.Fname = fields.Fname;
                food.Fcategory = fields.Fcategory;
                food.Fprice = fields.Fprice;
                food.Fimage = fields.Fimage;
                food.Fdata = fields.Fdata;
                //做持久化
                Food.insertFood(food,function(result){
                    console.log('数据处理完成，得到code='+ result);
                })
            })
            console.log("找到");
        }
        })
    })
}


//添加菜单
exports.showAddFood = function(req,res){
    res.setHeader("content-type","text/html;charset=utf-8");
    if(req.url == '/addFood' && req.method.toLowerCase() == 'post'){
        var form = new formidable.IncomingForm();

        //设置上传文件的目录
        form.uploadDir = './public/images/food';

        //解析文件的上传信息
        form.parse(req,function(err,fields,files){

            //获取上传文件的后缀名
            var extname = path.extname(files.Fimage.name);

            var realImagesPath = files.Fimage.path + extname;

            fs.rename(files.Fimage.path , realImagesPath , function(err){

                console.log("图片保存在" + JSON.stringify(realImagesPath));
               
                realImagesPath = realImagesPath.replace('public\\','');
                console.log(realImagesPath);
                fields.Fimage = realImagesPath;
                
                // console.log('接受到来自ajax的数据:'+JSON.stringify(fields));
                //做持久化
                Food.insertFood(fields,function(result){
                    console.log("数据处理完成，得到code=" + result);
                    // res.json({"code" : result});
                });

            });   
        })
        return;
    }

}


//删除菜单
exports.showDeleteFood = function(req,res){
    var form = new formidable.IncomingForm();
    //解析文件上传的信息
    form.parse(req,function(err,fields,files){
        console.log('接收来自ajax的数据：'+ fields);
        console.log(fields.id);
        function del() {
          // 删除数据的条件
          var wherestr = {'Fid': fields.id};
          Food.remove(wherestr, function(err, res) {
            if (err) {
              console.log('err');
            } else {
              console.log('res');
            }
          });
        }
        // 调用函数
        del();

    })
}

//发现食物
/*exports.showFindFood = function(req,res){
    var form = new formidable.IncomingForm();

    //解析文件上传的信息
    form.parse(req,function(err,fields,files){
        console.log('接收来自ajax的数据：'+JSON.stringify(fields));
        Food.find({Fname:fields.value},function(err,data){
        	var data = data[0];
        	res.send(data);
        	console.log(data);
        })

    })
}
*/

//注册页面
exports.showRegister = function (req, res) {
    res.render("register", {
        "login": req.session.login == "1" ? true : false,
        "username": req.session.login == "1" ? req.session.username : "",
        
    });
};

//注册业务
exports.doRegister = function (req, res) {
    //得到用户填写的东西
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log('接受到来自ajax的数据：' + JSON.stringify(fields));
        //得到表单之后做的事情

        //        console.log(fields.username);
        //查询数据库中是不是有这个人
        User.find({ username: fields.username }, function (err, data) {
            console.log(data)
            if (data.length != 0) {
//              res.send("-1"); //被占用
                return;
            }
            //           console.log(fields)
            var user = new User(fields);
            user.save(function (err) {
                if (err) {
                    res.json({ "code": -1 });
                } else {
                    //没有相同的人，就可以执行接下来的代码了：
                    //现在可以证明，用户名没有被占用
                    req.session.login = "1";
                    req.session.username = fields.username;
                    req.session.password = fields.password;
                    req.session.phone = fields.phone;
                    req.session.email = fields.email;
                    res.json({ "code": 1 });
                }
            });

        });

    })
}
//  });
//};


//显示登陆页面
exports.showLogin = function (req, res) {
    res.render("login", {
        "login": req.session.login == "1" ? true : false,
        "username": req.session.login == "1" ? req.session.username : "",
        
    });
};


//登陆页面的执行
exports.doLogin = function (req, res) {
    //得到用户表单
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //得到表单之后做的事情
        var username = fields.username;
        var password = fields.password;
        //查询数据库，看看有没有个这个人
        User.find({ username: username }, function (err, result) {
            if (err) {
                res.send("-5");
                return;
            }
            //没有这个人
            if (result.length == 0) {
                res.send("-1"); //用户名不存在
                return;
            }
            //有的话，进一步看看这个人的密码是否匹配
            if (password == result[0].password) {
                req.session.login = "1";
                req.session.username = username;
                req.session.password = password;
                res.send("1");  //登陆成功
                return;
            } else {
                res.send("-2");  //密码错误
                return;
            }
        });



    });
};



exports.doHLogin = function (req, res) {
    //得到用户表单
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //后台数据写死
        var husername = fields.husername;
        var hphone = fields.hphone;
        (function (err, result) {
            if (husername != 'zz123') {
                res.send("-1"); //用户名不存在
                return;
            }
            if (hphone != '18815611575') {
                res.send("-2");  //密码错误
                return;
            }
            else {
                res.send("1")
                return;
            }
        })();
    })

}