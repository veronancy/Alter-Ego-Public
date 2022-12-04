module.exports = {
    name: "avatar",
    description: "Steal someone's icon!",
    category: "utility",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const Discord = require('discord.js')

            const target = message.mentions.users.first() || message.author

            const exampleEmbed = new Discord.MessageEmbed()
                .setColor()
                .setImage(`${target.displayAvatarURL({dynamic: true})}`)
                .setDescription('This is what I found :)')
                .setTimestamp()
                .setFooter('Alter Ego');

            message.reply({
                embeds: [exampleEmbed]
            })




        }


        catch (error) {
            console.log(error)
        }
    }

};