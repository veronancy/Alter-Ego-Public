module.exports = {
    name: "about",
    description: "Learn about a user!",
    category: "utility",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const Discord = require('discord.js')

            const target = message.mentions.users.first() || message.author
            const member = message.guild.members.cache.get(target.id)
           


                const exampleEmbed = new Discord.MessageEmbed()
                .setColor()
                .setTitle(`All about ${target.tag}!!`)
                .setThumbnail(`${target.displayAvatarURL({dynamic: true})}`)
                .setDescription('This is what I found :)')
                .setTimestamp()
                .addFields(
                    { name: 'Display Name', value: member.nickname || target.tag, inline: false },
                    { name: 'Role Count', value: `${member.roles.cache.size -1}`, inline: false },
                    { name: 'Joined Server', value: `${new Date(member.joinedTimestamp).toLocaleDateString()}`, inline: false },
                    { name: 'Joined Discord', value: `${new Date(target.createdTimestamp).toLocaleDateString()}`, inline: false },

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