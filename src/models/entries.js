const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
    teacher: {
        type: Schema.ObjectId,
        ref: 'Teachers'
    },
    day: {
        type: String
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    hour:{
        type: String
    }
})

module.exports = mongoose.model('Entries', entriesSchema);

