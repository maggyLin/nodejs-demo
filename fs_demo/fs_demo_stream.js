//https://www.runoob.com/nodejs/nodejs-stream.html

var fs = require("fs");


// 讀取資料 ----------------------------------------------

// 創建可讀流
// var readerStream = fs.createReadStream("test.txt");

// // 設置編碼爲 utf8。
// readerStream.setEncoding("UTF8");

// var inputdata = ""; //讀取資料

// // 讀取資料
// readerStream.on("data", function (chunk) {
//     inputdata += chunk;
// });

// readerStream.on("end", function () {
//     console.log(inputdata);
//     console.log('結束接收');
// });

// readerStream.on("error", function (err) {
//     console.log(err.stack);
// });


// 寫入資料 ----------------------------------------------

// 創建一個可以寫入的流
// var writerStream = fs.createWriteStream("test.txt");

// // 使用 utf8 編碼寫入數據
// writerStream.write("輸出的資料 ", "UTF8");

// writerStream.write("aaa"+'\r\n', "UTF8");

// // writerStream.write("\r\n", "UTF8");

// // 標記文件末尾
// writerStream.end();

// // 處理流事件 --> data, end, and error
// writerStream.on("finish", function() {
//   console.log("寫入完成。");
// });

// writerStream.on("error", function(err) {
//   console.log(err.stack);
// });

// //增加內容
// var txt = "     line aaaaaaaaaavvvvvvvvvvvvcccccc";
// fs.appendFile("test.txt",txt,function(err){
//     if(err) console.log('append err :>> ', err);
// })


// pipe 寫入資料 ----------------------------------------------

//將 test.txt 資料寫入到 test2.txt
// 創建可讀流
var readerStream = fs.createReadStream("test.txt");

// 創建一個可以寫入的流
var writerStream = fs.createWriteStream("test2.txt");

readerStream.pipe(writerStream);

console.log('完成 pipe');