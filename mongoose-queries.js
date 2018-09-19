const {ObjectID} = require("mongodb");


const {mongoose} = require("./server/db/mongoose");
const {Todo} = require("./server/models/todo");
const {Users} = require('./server/models/user');
// var id = '5ba158cf55262721140e7a3a';


// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

Users.find().then((user) =>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(user);
}, (e) =>{
    console.log(e);
});
