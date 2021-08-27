//install mongo db -> npm install mongodb --save
//https://docs.mongodb.com/drivers/node/v4.1/fundamentals/promises/

var mongo_db = require('mongodb').MongoClient;
var conn_url = "mongodb://127.0.0.1:27017/mytest";

mongo_db.connect(conn_url, function (err, db) {
    if (err) {
        throw err;
    }

    // console.log('connect suc !!');

    //use db
    const mydb = db.db('mytest');

    // 單筆 callback 寫法  ------------------------------------
    // var whereStr = { name: "ab" };
    // mydb.collection('user').deleteOne(whereStr, function(err, res) {
    //     if (err) throw err;
    //     if( res.deletedCount !==1 ) console.log("no data !");
    //     console.log("delete success");
    //     db.close();
    // });

    //premise 寫法  -------------------------------------------
    // mydb.collection('user')
    //     .deleteOne({ name: "ab" })
    //     .then(
    //         res => {

    //             // var aa = JSON.stringify(res);
    //             // console.log('aa :>> ', aa);

    //             if(res.deletedCount !==1 ){
    //                 console.log("no data !");
    //             }

    //             console.log("delete success");
    //             db.close();
    //         },
    //         err => console.error(`Something went wrong: ${err}`)
    //     )


    //  多筆資料  -------------------------------------------
    mydb.collection('user').deleteMany({ name: "kk" }, function (err, res) {
        if (err) throw err;

        if( res.deletedCount <1 ) console.log("no data !");
        console.log("delete success , detele counts: "+res.deletedCount);
        db.close();
    })






});

