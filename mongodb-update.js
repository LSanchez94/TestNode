const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err,client) => {
    if(err){
        return console.log("Unable to connect to Database");
    }
    console.log("Conected to Database");

    const db = client.db("TodoApp")

    db.collection("Users").findOneAndUpdate({
        name: "Carlos Sánchez"
    },{
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});