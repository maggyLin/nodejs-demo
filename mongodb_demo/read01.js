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
    mydb.collection('user').find().limit(2).toArray(function(err,res){
        if (err) throw err;
        console.log(res);
        db.close()
    })





});

