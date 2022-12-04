module.exports = {
    name: "ban",
    description: "Bans a member. Moderator only.",
    category: "mod",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            if (message.member.permissions.has('BAN_MEMBERS')){
                
           
            const Discord = require('discord.js')
            const GuildMember = Discord.GuildMember
            const target = message.mentions.members.first()

            if (!target) {
                message.reply({
                    content: "Please tag someone to ban!"
                })
                return
            }

            if (!target.bannable) {
                message.reply({
                    content: "I cannot ban this person!"
                })
                return
            }
            args.shift()
            const reason = args.join(' ')

            if (!reason === "") {
                target.ban(`${reason}`)
            } else {
                target.ban()
            }


            message.reply({
                content: `Successfully banned <@${target.id}> from the server!`
            })


        } else {
            message.reply("You do not have permission to ban anyone!")
                return
        }

        }


        catch (error) {
            console.log(error)
        }
    }

};