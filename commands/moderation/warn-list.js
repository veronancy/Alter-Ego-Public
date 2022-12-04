const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn-list')
        .setDescription('Lists all warnings for someone!')
        .addUserOption(option =>
            option.setName('person')
                .setDescription('Person to check warnings for.')
                .setRequired(true)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });
            

            const mongo = require('../../mongo')
            const warnSchema = require('../../schemas/warn-schema')

            const warn = interaction.options.getString('warning')
            const person = interaction.options.getMember('person')
            const personName = interaction.options.getUser('person')
            const guildId = interaction.guild.id
            const userId = person.id
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
                        .setTitle(`Warnings for ${personName.tag}`)
                        .setThumbnail(person.displayAvatarURL())
                        .setDescription(`${reply}`)
                        .setTimestamp()
                        .setFooter('Alter Ego');

                    interaction.editReply({
                        embeds: [exampleEmbed]
                    })
                } finally {
                }
            })



}
        catch (error) {
    console.log(error)
}
        // })
    }
}