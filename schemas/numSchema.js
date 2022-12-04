const mongoose = require('mongoose')


const reqString = {
    type: String,
    required: true,
}

const numSchema = mongoose.Schema({
    userId: reqString,
    num: {
        type: Number,
        default: 1,
    },
    
})

module.exports = mongoose.model('num', numSchema)