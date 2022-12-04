module.exports = {
    name: "lw",
    aliases: ['warnings', 'list-warnings'],
    description: "Lists a user's warnings.",
    category: "mod",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const mongo = require('../../mongo')
            const Discord = require('discord.js')
            const warnSchema = require('../../schemas/warn-schema')
            const target = message.mentions.members.first() || message.member
            if (!target) {
                message.reply('Which user?')
                return
            }

            const guildId = message.guild.id
            const userId = target.id

            await mongo().then(async (mongoose) => {
                try {
                    const results = await warnSchema.findOne({
                        guildId,
                        userId,
                    })
                    let reply = ``

                    


                    for (const warning of results.warnings) {
                        const { author, timestamp, reason } = warning

                        reply += `${new Date(
                            timestamp
                        ).toLocaleDateString()} - "${reason}"\n`
                    }

                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor()
                        .setTitle(`Warnings for ${target.displayName}`)
                        .setThumbnail(target.displayAvatarURL())
                        .setDescription(`${reply}`)
                        .setTimestamp()
                        .setFooter('Alter Ego');

                    message.reply({
                        embeds: [exampleEmbed]
                    })
                } finally {
                }
            })





        }


        catch (error) {
            console.log(error)
        }
    }

};