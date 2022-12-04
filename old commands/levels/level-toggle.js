const config = require('../../config')

module.exports = {
    name: "leveltoggle",
     aliases: ['levelstoggle'],
    description: "Configure the Welcome screen!",
    category: "levels",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            if (!message.member.permissions.has('MANAGE_MESSAGES')) {
                message.reply("You do not have permission to use this")
                return
            }


            

            console.log("command ran")
            const guildId = message.guild.id

            const obama = await config.getEnabledLevels(guildId)

            console.log(obama)
            if(obama === 0){
                await config.setEnabledLevels(guildId, 1)
                 message.reply("Successfully turned on Levels!")
                 console.log("command ran 2")

            }
            if(obama === 1){
                await config.setEnabledLevels(guildId, 0)
                 message.reply("Successfully disabled Levels!")
                 console.log("command ran 3")

            }
            if(obama === undefined){
                await config.setEnabledLevels(guildId, 1)
                 message.reply("Successfully turned on Levels!")
                 console.log("command ran 4")
            }

            

        
    }

        
        
catch (error) {
    console.log(error)
}
    }
}