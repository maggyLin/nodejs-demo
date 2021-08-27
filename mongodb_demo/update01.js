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
    var whereStr = { "name": "kk" };
    var updateStr = { $set: { "age": 30 }};
    mydb.collection('user').updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("update success");
        db.close();
    });

    //premise 寫法  -------------------------------------------
    // mydb.collection('user')
    //     .updateOne({ name: "kk" }, { $set: { age: 40 } })
    //     .then(
    //         res => {
    //             console.log("update success");
    //             db.close();
    //         },
    //         err => console.error(`Something went wrong: ${err}`)
    //     )



    //  多筆資料  -------------------------------------------
    // mydb.collection('user')
    //     .updateMany({ name: "kk" }, { $set: { age: 40 } })
    //     .then(
    //         res => {
    //             console.log(`Updated ${res.matchedCount} documents`);
    //             // var aa = JSON.stringify(res);
    //             // console.log('aa :>> ', aa);
    //             db.close();
    //         },
    //         err => console.error(`Something went wrong: ${err}`)
    //     )





});

