const Discord = require('discord.js')
const Schema = require('../../schemas/reactionroles')

module.exports = {
    name: "add",
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

                const role = message.mentions.roles.first();
    
                let [, emoji] = args

    
                if(!emoji){
                    message.reply('Please specify a emoji!\nExample: a!add @roleToAdd <emoji>')
                    return

                } 
                if(!role){
                    message.reply('Please specify a role!\nExample: a!add @roleToAdd <emoji>')
                    return

                } 

                const parsedEmoji = Discord.Util.parseEmoji(emoji);

                
    
                Schema.findOne({Guild: message.guild.id}, async(err, data) => {
                    if(data){
                        data.Roles[parsedEmoji.name] = [
                            role.id,
                            {
                                id: parsedEmoji.id,
                                raw: emoji
                            }
                        ]
                        await Schema.findOneAndUpdate({ Guild: message.guild.id}, data);

                    } else {
                        new Schema({
                            Guild: message.guild.id,
                            Message: 0,
                            Roles: {
                                [parsedEmoji.name]: [
                                    role.id,
                                    {
                                        id: parsedEmoji.id,
                                        raw: emoji
                                    }
                                ]
                            }
                        }).save();
                    }
                    message.reply("Added role!")


                
    
                })
            


          
            }



catch (error) {
    console.log(error)
}
    }
	
	};