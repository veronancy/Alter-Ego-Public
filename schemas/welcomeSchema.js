const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: false,
}

const welcomeSchema = mongoose.Schema({
  // welcome
  title: reqString,
  text: reqString,
  image: reqString,
  // goodbye
  title2: reqString,
  text2: reqString,
  image2: reqString,
  // both
  guildId: reqString,
  channel: reqString,
  goodbyechannel: reqString,

  role: reqString,
  toggle: {
    type: Number,
    required: false,
    default: 0,
  },
  toggleGoodbye: {
    type: Number,
    required: false,
    default: 0,
  }
})

module.exports = mongoose.model('welcome', welcomeSchema)