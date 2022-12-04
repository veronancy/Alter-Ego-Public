const config = require('../../config')

module.exports = {
    name: "autorole",
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


            if(!args[0]){
                message.reply("Please put the **EXACT** name of your role! \nEx: a!autorole member")
                return 
            }

            const text = args.join(" ")

            const ifExist = message.guild.roles.cache.find(r => r.name == text)
            if(ifExist === undefined){
                return message.reply("This is not a valid role, please tell spell the name of the role EXACTLY how you named it.")
            }
            const guildId = message.guild.id

            // console.log(ifExist)

            

            await config.setAutorole(guildId, ifExist)

            message.reply(`Success! Make sure that this role is BELOW the "Alter Ego" role that came when I was added to the server!`)
            message.channel.send("https://media.discordapp.net/attachments/790081005720829973/952718600085598278/unknown.png")
    
}
    

        
        
catch (error) {
    console.log(error)
}
    }
}