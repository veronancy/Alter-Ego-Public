const mongoose = require('mongoose')
//const { mongoPath } = require('./botsettings.json')
const mongoPath = "mongodb+srv://chihiroiscis:piratefo@alter-ego.tipsf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//piratefo

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    return mongoose
}