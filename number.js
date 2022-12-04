const mongo = require('./mongo')
const numSchema = require('./schemas/numSchema')
const numSchema2 = require('./schemas/numSchema2')

const numCache = {} // { 'guildId-userId': coins }
const numCache2 = {}






module.exports = (client) => {}

module.exports.addNumber = async (userId, num) => {
  //module.exports.addCoins = async (guildId, userId, coins) => {
 

      const result = await numSchema.findOneAndUpdate(
        {
         // guildId,
          userId,
        },
        {
          //guildId,
          userId,
          $inc: {
            num,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )


      numCache[`${userId}`] = result.num
      //coinsCache[`${guildId}-${userId}`] = result.coins

      return result.num
    
}




module.exports.getNumber = async (userId) => {
  const cachedValue = numCache[`${userId}`]
 // module.exports.getCoins = async (guildId, userId) => {
 //   const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }


      const result = await numSchema.findOne({
       // guildId,
        userId,
      })


      let num = 1
      if (result) {
        num = result.num
      } else {
        await new numSchema({
          //guildId,
          userId,
          num,
        }).save()
      }
     // coinsCache[`${guildId}-${userId}`] = coins

      numCache[`${userId}`] = num

      return num
    
}

module.exports.addNumber2 = async (userId, num) => {
  //module.exports.addCoins = async (guildId, userId, coins) => {
 

      const result = await numSchema2.findOneAndUpdate(
        {
         // guildId,
          userId,
        },
        {
          //guildId,
          userId,
          $inc: {
            num,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )


      numCache2[`${userId}`] = result.num
      //coinsCache[`${guildId}-${userId}`] = result.coins

      return result.num
    
}




module.exports.getNumber2 = async (userId) => {
  const cachedValue = numCache2[`${userId}`]
 // module.exports.getCoins = async (guildId, userId) => {
 //   const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }


      const result = await numSchema2.findOne({
       // guildId,
        userId,
      })


      let num = 1
      if (result) {
        num = result.num
      } else {
        await new numSchema2({
          //guildId,
          userId,
          num,
        }).save()
      }
     // coinsCache[`${guildId}-${userId}`] = coins

      numCache2[`${userId}`] = num

      return num
    
}