const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Warn a member.')
        .addUserOption(option =>
            option.setName('person')
                .setDescription('Person to warn.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('warning')
                .setDescription('The warning to give.')
                .setRequired(true)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });
            const permission = interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)
            if (!permission) {
                interaction.editReply("You need MANAGE_MESSAGES permissions to do this.")
                return
            }

            const mongo = require('../../mongo')
            const warnSchema = require('../../schemas/warn-schema')

            const warn = interaction.options.getString('warning')
            const person = interaction.options.getMember('person')
            const personName = interaction.options.getUser('person')
            const guildId = interaction.guild.id
            const userId = person.id

            const warning = {
                author: interaction.member.user.tag,
                timestamp: new Date().getTime(),
                warn,
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

                    interaction.editReply(`${person} has been warned with reason: **${warn}**!`)
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