//文件處理 fs
//https://www.runoob.com/nodejs/nodejs-fs.html

// fs.access 是否存在,是否可以讀寫
// fs.stat  判断文件的相关属性(文件/目录) 
// fs.mkdir  创建目录    
// fs.writeFile  创建写入文件    
// fs.appendFile 增加文件內容   
// fs.readFile 读取文件    
// fs.readdir读取目录    
// fs.rename 重命名 (也可以複製到其他路徑)   
// fs.rmdir  删除目录    
// fs.unlink删除文件    
// fs.createReadStream 从文件流中读取数据
// fs.createWriteStream  写入文件



var fs = require('fs');

fs.access("test",function(err){
    if(err){
        console.log('err :>> ', err);
        return false;
    } 

    console.log('fs accass ');

});

// fs.stat('test.js',function(err,stats){
    
//     if(err){
//         console.log('err :>> ', err);
//         return false;
//     }

//     console.log('stats.isFile()  :>> ', stats.isFile());  //是否為 文件
//     console.log('stats.isDirectory()  :>> ', stats.isDirectory()); //是否為 目錄
    
// });


// fs.readFile("test.js",function(err,data){
//     if(err){
//         console.log('err :>> ', err);
//         return false;
//     } 

//     //直接印出為2進位編碼
//     console.log('data :>> ', data);

//     //使用 toString 轉換
//     console.log('data.toString :>> ', data.toString());

// });


