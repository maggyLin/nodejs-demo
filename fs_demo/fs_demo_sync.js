var fs = require('fs');

// 單獨處理各別檔案時 ,注意 同步 與 異步 處理

// for(var i=0;i<3;i++){

//     console.log('i :>> ', i);

//     setTimeout(function(){
//         //異步處理
//         console.log('set i :>> ', i);
//     },1000)
// }


fs.readdir('test',function(err,files){
    if(err){
        console.log('err :>> ', err);
    }else{

        // console.log('files :>> ', files);

        //各別處理每個資料夾或檔案 , 判斷是否為目錄
        for(var i=0;i<files.length;i++){
            console.log('files[i] :>> ', files[i]);

            // fs.stat("test/"+files[i],function(e,stats){

            //     //stat 是異步處理 files[i] 為undefined,要注意
            //     console.log(' in stat files[i] :>> ', files[i]);

            //     if(e){
            //         console.log('err :>> ', e);
            //     }
            //     else{
            //         console.log('stats.isDirectory()  :>> ', stats.isDirectory()); //是否為 目錄
            //     }
            // })

            //使用同步處理
            var sta_sync = fs.statSync("test/"+files[i]);
            console.log('sta_sync.isDirectory()  :>> ', sta_sync.isDirectory()); //是否為 目錄
           
        }

    }
})