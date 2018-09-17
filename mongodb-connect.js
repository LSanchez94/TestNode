// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err,client) => {
    if(err){
        return console.log("Unable to connect to Database");
    }
    console.log("Conected to Database");
    // const db = client.db("TodoApp")

    // db.collection("Users").find({_id: new ObjectID("5b9ff9e18675eb17c4a8c37b")}).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) =>{
    //     console.log("Unable to fetch todos", err);
    // });


    const db = client.db("TodoApp")

    db.collection("Users").find().count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) =>{
        console.log("Unable to fetch todos", err);
    });

    client.close();
});