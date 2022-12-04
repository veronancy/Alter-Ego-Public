const mongo = require(`../../mongo`)
const profileSchema = require(`../../schemas/profile-schema`)

module.exports = {
  name: "rank",
  aliases: ['level'],
  description: "Shows your current level!",
  category: "levels",
  cooldown: "3s",
  slash: false,


  callback: async ({ message, args, client }) => {
    try {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const results = await profileSchema.findOne({
        guildId,
        userId,
      })

      const [level, xp] = await Promise.all([
       results.level,
       results.xp,
    ]);




    const Discord = require('discord.js');


        const profileEmbed = new Discord.MessageEmbed()
        
		.setColor("#90EE90")
        .setTitle(`Server Level`)
        .setThumbnail(target.avatarURL())
        .addFields(
          { name: 'Level', value: `Level ${level}`, inline: false },
          { name: 'XP', value: `${xp} XP`, inline: false },
          { name: 'XP Required', value: `${level * level * 100} XP`, inline: false },





        )
        .setTimestamp()
        message.channel.send({ embeds: [profileEmbed]})



        // let lev5 = message.guild.roles.cache.get("883253022854098975");
        // let lev10 = message.guild.roles.cache.get("883255627219083294");



        // if(level > 4){
        //   message.member.roles.add(lev5);
        // }
        // if(level > 9){
        //   message.member.roles.add(lev10);
        // }





  

      

    }
    catch (error) {
      console.log(error)
      }
    }
   

      


  
}
