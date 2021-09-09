const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    company : {
        type : String,
        required: true
    },
    reason : {
        type : String,
        required: true
    },
    gender : String,
    status : String
});

const WorkDiscriminationdb = mongoose.model('WorkDiscriminationdb', schema);

module.exports = WorkDiscriminationdb;