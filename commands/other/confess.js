const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('confess')
        .setDescription('Anonymously confess to the local confession channel!')
        .addStringOption(option =>
            option.setName('confession')
                .setDescription('Confession to send.')
                .setRequired(true)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });
            



        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}