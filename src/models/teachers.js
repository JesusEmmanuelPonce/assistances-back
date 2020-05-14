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
    status:{
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('Teachers', teachers);