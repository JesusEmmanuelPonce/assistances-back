const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teachers = new Schema({
    names:{
        type: String,
        trim: true
    },
    last_names:{
        type: String,
        trim: true
    },
    code:{
        type: String,
        trim: true,
        unique: true
    },
    status:{
        type: Boolean
    }
})

module.exports = mongoose.model('Teachers', teachers);