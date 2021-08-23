var fs = require('fs');


// fs.readFile 異步 , file 會undefined
// function getFile(){

//     fs.readFile('test.txt',function(err,data){

//         if(err) console.log('err :>> ', err);
//         else  return data.toString();

//     })
    
// }

// var file = getFile();
// console.log('file :>> ', file);  //印出undefined,還沒抓取到data


//使用callback,等待異步資料完成後回傳
function getFile(callback){

    fs.readFile('test.txt',function(err,data){

        if(err) console.log('err :>> ', err);
        else return callback(data.toString());

    })
    
}

getFile(function (data){
    console.log('data :>> ', data);
});