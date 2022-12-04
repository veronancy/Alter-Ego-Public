module.exports = {
    name: "server",
    description: "Learn about a server!",
    category: "utility",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const Discord = require('discord.js')
            let owner = await message.guild.fetchOwner()



            const exampleEmbed = new Discord.MessageEmbed()
                .setColor()
                .setTitle(`All about ${message.guild.name}!!`)
                .setThumbnail(`${message.guild.iconURL()}`)
                .setDescription('This is what I found :)')
                .setTimestamp()
                .addFields(
                    { name: 'Server Owner', value: `${owner}`, inline: false },
                    { name: 'Server Creation Date', value: `${new Date(message.guild.createdTimestamp).toLocaleDateString()}`, inline: false },
                    { name: 'Emoji Amount', value: `${message.guild.emojis.cache.size}`, inline: false },
                    { name: 'Total Member Amount', value: `${message.guild.memberCount} Members`, inline: false },

                )
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