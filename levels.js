const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')
const settingsSchema = require('./schemas/settings-schema')
const config = require('./config')
const Discord = require('discord.js')

module.exports = async (client) => {
  try {


  
 



  client.on('message', async (message) => {
    if(message.guild === null){
      return
    }


    

    const { guild } = message

    const isEnabled = await config.getEnabledLevels(guild.id)

    if(isEnabled === 0) return


    if(message.author.bot){
        return
    }

    const member = message.author


    addXP(guild.id, member.id, 23, message)
  })




const getNeededXP = (level) => level * level * 100

const addXP = async (guildId, userId, xpToAdd, message) => {
 
      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            xp: xpToAdd,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      let { xp, level } = result
      const needed = getNeededXP(level)

      if (xp >= needed) {
        ++level
        xp -= needed


        let replies = ["I knew you could do it !!","Good job !!","Keep going !!","I am impressed !!","Wonderful !!"];
         let result = replies[Math.floor(Math.random()*(replies.length))]


        const levelembed= new Discord.MessageEmbed()
        .setColor("#90EE90")
        .setTitle('Level up!')
        .setThumbnail(client.user.displayAvatarURL())
        .setImage("https://cdn.discordapp.com/attachments/790081005720829973/817151078776176670/tumblr_27e3e5d7f27e3c184e2b093f7b56beaf_9c7a1b0e_1280.gif")
        .setDescription(`You are now level ${level}! ${result}`)
        .setFooter("Gif credit to @adminleonsrestingplace on Tumblr!")
       message.reply({
         embeds: [levelembed]
       })

      //  let lev5 = message.guild.roles.cache.get("883253022854098975");
      //   let lev10 = message.guild.roles.cache.get("883255627219083294");



      //   if(level > 4){
      //     message.member.roles.add(lev5);
      //   }
      //   if(level > 9){
      //     message.member.roles.add(lev10);
      //   }

        await profileSchema.updateOne(
          {
            guildId,
            userId,
          },
          {
            level,
            xp,
          }
        )
      }
    
    

    }
  

module.exports.addXP = addXP
  

  
  
  
  
}
catch (error) {
    console.log(error)
}

}