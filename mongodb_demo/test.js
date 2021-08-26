
var http = require('http');
var url = require('url');
var ejs = require('ejs');

http.createServer(function(req,res){

    //設置 http head
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    //獲取路徑名稱
    var pathname = url.parse(req.url).pathname;

    //獲取請求方法
    var method = req.method.toLocaleLowerCase(); //get or post

    if(pathname=='/login'){

        var msg = "login msg.";

        ejs.renderFile(
            'views/login.ejs',
            { //傳遞參數
                msg:msg,  
            },
            function(err,data){
                if(err) console.log('err :>> ', err);
                res.end(data);
            }
        )
    }
    else if(pathname=='/dologin' && method=="get"){
        
        //獲取 url 參數
        var para = url.parse(req.url,true).query;
        console.log('para :>> ', para);
        res.end("dologin get parameter");
        
    }
    else if(pathname=='/dologin' && method=="post"){
        
        // 定义了一个post变量，用于暂存请求体的信息
        var post = '';   

        // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', function(chunk){    
            post += chunk;
        });

        req.on('end', function(){    
            console.log('post :>> ', post);
            res.end("dologin post parameter : "+post);

        });

    }
    else{

        ejs.renderFile('views/index.ejs',{},function(err,data){
            if(err) console.log('err :>> ', err);
            res.end(data);
        })
    }


}).listen(8001);