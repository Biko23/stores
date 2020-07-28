const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userRegSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true
    
    },
    lastName:{
        type: String,
        trim: true
    },
    gender:{
        type: String,
        trim: true
    },
    country:{
        type: String,
        trim: true
    },
    city:{
        type: String,
        trim: true
    },
    designation:{
        type: String,
        trim: true
    },
    nin:{
        type: String,
        trim: true
    },
    eid:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true
    },
    confirmPassword:{
        type: String,
        trim: true
    }
});
userRegSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userRegSchema);