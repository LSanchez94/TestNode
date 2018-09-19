var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
    name: {
        type: String,
        required : true,
        trim: true,
        minlength: 1
    },

    age :{
        type: Number
    }, 
    location : {
        type: String
    }
});

module.exports = {Users};