var http = require('http');
var url  = require('url'); //使用url 獲取url訊息

//http 創建服務
http.createServer(function(req,res){

    //設置 http head
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write('Hello World!');

    //使用parse解析url
    console.log('req.url :>> ', url.parse(req.url,true));

    //結束響應
    res.end();

}).listen(8001); 



//使用 supervisor(需另外install) 取代 node ,可以監看js是否有改變,自動重新更新,修改檔案後不用重啟node
//EX: node app.js -> supervisor app.js