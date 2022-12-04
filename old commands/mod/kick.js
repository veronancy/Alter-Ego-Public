module.exports = {
    name: "kick",
    description: "Kicks a member. Moderator only.",
    category: "mod",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const Discord = require('discord.js')
            const GuildMember = Discord.GuildMember
            const target = message.mentions.members.first()

            if (message.member.permissions.has('KICK_MEMBERS')){
                 
            

            if (!target) {
                message.reply({
                    content: "Please tag someone to kick!"
                })
                return
            }

            if (!target.kickable) {
                message.reply({
                    content: "I cannot kick this person!"
                })
                return
            }
            args.shift()
            const reason = args.join(' ')

            if (!reason === "") {
                target.kick(reason)
            } else {
                target.kick()
            }


            message.reply({
                content: `Successfully kicked <@${target.id}> from the server!`
            })


        } else {
            message.reply("You do not have permission to kick anyone!")
                 return
        }

        }


        catch (error) {
            console.log(error)
        }
    }

};