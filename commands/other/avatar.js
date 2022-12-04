const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')
const { Client, CommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription(`Sends someone's avatar!`)
        .addUserOption(option =>
            option.setName('person')
                .setDescription('Person to get avatar from.')
                .setRequired(true)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });

            const target = interaction.options.getUser('person')

            const exampleEmbed = new Discord.MessageEmbed()
                .setColor()
                .setImage(`${target.displayAvatarURL({dynamic: true})}`)
                .setDescription('This is what I found :)')
                .setTimestamp()
                .setFooter('Alter Ego');

            interaction.editReply({
                embeds: [exampleEmbed]
            })





        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}