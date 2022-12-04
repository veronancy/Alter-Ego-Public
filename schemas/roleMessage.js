const mongoose = require('mongoose')


const reqString = {
    type: String,
    required: true,
}

const roleMessageSchema = mongoose.Schema({
    guildId: reqString,
    channelId: reqString,
    messageId: reqString,
    
    })
    

module.exports = mongoose.model('roleMessage', roleMessageSchema)
