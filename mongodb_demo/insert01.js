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
    // mydb.collection('user').insertOne(
    //     {
    //         "name":"demon1",
    //         "age":25
    //     },
    //     function(err,result){
    //         if(err){
    //             console.log(' insert err :>> ', err);
    //             return;
    //         }

    //         console.log('insert success');
    //         db.close();

    //     }
    // )

    //premise 寫法  -------------------------------------------
    // mydb.collection('user').insertOne({ "name": "demon2", "age": 45 })
    // .then(
    //     res => {
    //         console.log('insert success');db.close();
    //     },
    //     err => console.error(`Something went wrong: ${err}`),
    // );


    // 多筆資料  -------------------------------------------
    var myobj =  [
        { name: 'kk', sex: 'woman'},
        { name: 'JJ',  sex: 'man'},
        { name: 'OO', sex: 'woman'}
    ];

    mydb.collection('user').insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("insert data count: " + res.insertedCount);
        db.close();
    });



    

});

