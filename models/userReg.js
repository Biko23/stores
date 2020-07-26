const mongoose = require('mongoose');

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
});
module.exports = mongoose.model('users', userRegSchema);