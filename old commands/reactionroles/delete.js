const Discord = require('discord.js')
const Schema = require('../../schemas/reactionroles')

module.exports = {
    name: "deleteroles",
    aliases: ["delete"],

    description: "Adds to reaction role!",
    category: "reaction",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const { member, mentions } = message


            if (!message.member.permissions.has('MANAGE_MESSAGES')) {
              message.reply("You do not have permission to use this")
              return
          }

                

                
    
                Schema.findOneAndDelete({Guild: message.guild.id}, async(err, data) => {
                    message.reply("Successfully deleted all reaction roles!")
                    
                    
                })
            


            

}


catch (error) {
    console.log(error)
}
    }
	
	};