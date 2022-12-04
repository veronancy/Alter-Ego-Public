const mongoose = require('mongoose')


const reqString = {
    type: String,
    required: true,
}

const confessSchema = mongoose.Schema({
    guildId: reqString,
    channelId: reqString,
    confessions: Array,

})

module.exports = mongoose.model('confessions-custom', confessSchema)