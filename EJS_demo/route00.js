
var http = require('http');

var url = require('url');

var ejs = require('ejs');
// npm install ejs --save  

http.createServer(function(req,res){

    //設置 http head
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    //獲取路徑名稱
    var pathname = url.parse(req.url).pathname;

    if(pathname=='/login'){

        // res.end("login");

        var msg = "login msg.";
        var list = [111,222,333];

        ejs.renderFile(
            'views/login.ejs',
            { //傳遞參數
                msg:msg,  
                list:list
            },
            function(err,data){
                res.end(data);
            }
        )
    }
    else{
        // res.end("other");
        ejs.renderFile('views/index.ejs',{},function(err,data){
            res.end(data);
        })
    }


}).listen(8001);