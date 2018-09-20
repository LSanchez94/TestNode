const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


var data = {
    id: 10
}


var token = jwt.sign(data, 'codify');
console.log(token);

var decoded = jwt.verify(token, 'codify')
console.log(decoded);

// var message = 'I am user 3';
// var hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);

// var data = {
//     id : 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'codify2').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'codify2').toString();

// if(resultHash === token.hash){
//     console.log('user ok');
// } else{
//     console.log('hacking');
// }