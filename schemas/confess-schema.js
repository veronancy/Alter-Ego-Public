const mongoose = require('mongoose')


const reqString = {
    type: String,
    required: true,
}

const confessSchema = mongoose.Schema({
    num: reqString,
   confession: {
        type: [Object],
        required: true,
      },
})

module.exports = mongoose.model('confessions', confessSchema)