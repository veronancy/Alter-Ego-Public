module.exports = {
    name: "warn",
    description: "Warns a member. Moderator only.",
    category: "mod",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {

            if (message.member.permissions.has('KICK_MEMBERS')){
                
           
            const mongo = require('../../mongo')
            const warnSchema = require('../../schemas/warn-schema')
            const target = message.mentions.users.first()
            if (!target) {
                message.reply('Who do you want to warn?')
                return
            }




            args.shift()

            const guildId = message.guild.id
            const userId = target.id
            const reason = args.join(' ')

            const warning = {
                author: message.member.user.tag,
                timestamp: new Date().getTime(),
                reason,
            }

            await mongo().then(async (mongoose) => {
                try {
                    await warnSchema.findOneAndUpdate(
                        {
                            guildId,
                            userId,
                        },
                        {
                            guildId,
                            userId,
                            $push: {
                                warnings: warning,
                            },
                        },
                        {
                            upsert: true,
                        }
                    )
                    message.reply(`${target} has been warned!`)
                } finally {
                }
            })




        } else {
            message.reply("You do not have permission to warn anyone!")
                return
        }
    }


        catch (error) {
            console.log(error)
        }
    }

};