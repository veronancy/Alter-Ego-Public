const mongoose = require('mongoose')


const reqString = {
    type: String,
    required: true,
}

const afkSchema = mongoose.Schema({
    guildId: reqString,
    userId: reqString,
    reason: {
        type: String,
    },

})

module.exports = mongoose.model('AFK', afkSchema)
