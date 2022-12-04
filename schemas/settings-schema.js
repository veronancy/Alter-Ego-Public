const mongoose = require('mongoose')


const reqString = {
    type: String,
    required: true,
}

const settingsSchema = mongoose.Schema({
    guildId: reqString,
    level: {
        type: Number,
        default: 0,
    },
    antispam: {
        type: Number,
        default: 0,
    },
    enabled: {
        type: Number,
        default: 0,
    },})
    

module.exports = mongoose.model('settings', settingsSchema)
