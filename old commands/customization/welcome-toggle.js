const config = require('../../config')

module.exports = {
    name: "welcometoggle",
    description: "Configure the Welcome screen!",
    category: "mod",
    cooldown: "3s",
    slash: false,
    callback: async ({ message, args, client }) => {
        try {
            const { member, mentions } = message
            if (!message.member.permissions.has('MANAGE_MESSAGES')) {
                message.reply("You do not have permission to use this")
                return
            }




            const guildId = message.guild.id

            const obama = await config.getEnable(guildId)

            if (obama === 0) {
                await config.setEnable(guildId, 1)
                 message.reply("Successfully disabled Welcome!")
                 return
            }
            if (obama === 1) {
                await config.setEnable(guildId, 0)
                 message.reply("Successfully turned on Welcome!")
                 return
            }



        }




        catch (error) {
            console.log(error)
        }
    }
}