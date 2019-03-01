var express = require('express');
var app = express();
var formidable = require("formidable");
var controller = require('./controllers/controller.js');
var mongoose = require('mongoose');
var session = require('express-session');

//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


// 连接每个人做的表的连接
//mongoose.connect('mongodb://localhost/recommend');
mongoose.connect('mongodb://192.168.24.120:27017/FoodOrder');
mongoose.connection.on('connected', function () {    
    console.log('连接成功' );  
}); 
mongoose.connection.on('error',function (err) {    
    console.log('连接异常' ); 
});    
mongoose.connection.on('disconnected', function () {    
    console.log('连接断开');  
}); 


app.set("view engine", "ejs");

app.get('/', controller.showHome); //首页路由
app.get('/side', controller.showSide); //首页路由
app.get('/login', controller.showLogin);        //登录
app.get('/register', controller.showRegister);  //注册
app.get('/recommend', controller.showRecommend);   //店家推荐 

app.post('/recommend/save', controller.saveRecommend);   

app.get('/catagory', controller.showCatagory);      //食品分类
app.get('/catagory/get', controller.getCatagory);      //食品分类
app.get('/detail', controller.showDetail);      //食品详情
app.get('/cart', controller.showCart);          //购物车
app.get('/historyOrder', controller.showHistoryOrder);   // 历史订单   
app.get('/jiesuan', controller.showJiesuan);        //结算页面
app.get('/manage', controller.showManage);      //网站管理
app.get('/head', controller.showHead);          //页面公共头部
app.get('/footer', controller.showFooter);      //页面公共尾部
app.get('/center', controller.showCenter);      //页面公共尾部
app.get('/productManage', controller.showProductManage);    //产品管理
app.get('/orderManage', controller.showOrderManage);        //订单管理
app.get('/bestSale',controller.showBestSale);               //热卖推荐
app.get('/bestSale/get',controller.getBestSale);            

app.get('/gljTestOne',controller.showGljTestOne);
app.get('/gljTestTwo',controller.showGljTestTwo);
app.post("/doregister",controller.doRegister)//执行注册，Ajax服务
app.post("/dologin",controller.doLogin);        //执行登录，Ajax服务
app.post("/dohlogin",controller.doHLogin);        //执行后台登录，Ajax服务

//获取每一条数据
app.get('/showData', controller.showData); 
//删除购物车数据
app.get('/deleteData', controller.deleteData); 




//获取食物
app.get('/productManage/save', controller.showProductManageSave); 

//添加食物
app.post('/addFood',controller.showAddFood);
//修改
app.post('/changeFood',controller.showChangeFood);

/*//发现食物
app.post('/findFood',controller.showFindFood);*/



//删除
app.post('/deleteFood',controller.showDeleteFood);

app.use(express.static("public"));
app.get('*', controller.showNone);  //404路由


app.listen(3000);
console.log("欢迎网上订餐 ~ ");