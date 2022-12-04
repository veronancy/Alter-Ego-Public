const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')
const rrModel = require('../../schemas/buttonRoles')
const { Client, CommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('About related commands.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Sends information about a user.')
                .addUserOption(option =>
                    option.setName('person')
                        .setDescription('Person to research.')
                        .setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Sends information about the current server.')
        ),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });


            if (interaction.options.getSubcommand() === "user") {
                const target = interaction.options.getUser('person')
                const member = interaction.options.getMember('person')



                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle(`All about ${target.tag}!!`)
                    .setThumbnail(`${target.displayAvatarURL({ dynamic: true })}`)
                    .setDescription('This is what I found :)')
                    .setTimestamp()
                    .addFields(
                        { name: 'Display Name', value: member.nickname || target.tag, inline: false },
                        { name: 'Role Count', value: `${member.roles.cache.size - 1}`, inline: false },
                        { name: 'Joined Server', value: `${new Date(member.joinedTimestamp).toLocaleDateString()}`, inline: false },
                        { name: 'Joined Discord', value: `${new Date(target.createdTimestamp).toLocaleDateString()}`, inline: false },

                    )
                    .setFooter('Alter Ego');

                interaction.editReply({
                    embeds: [exampleEmbed]
                })

            }
            if (interaction.options.getSubcommand() === "server") {
                let owner = await interaction.guild.fetchOwner()



                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle(`All about ${interaction.guild.name}!!`)
                    .setThumbnail(`${interaction.guild.iconURL()}`)
                    .setDescription('This is what I found :)')
                    .setTimestamp()
                    .addFields(
                        { name: 'Server Owner', value: `${owner}`, inline: false },
                        { name: 'Server Creation Date', value: `${new Date(interaction.guild.createdTimestamp).toLocaleDateString()}`, inline: false },
                        { name: 'Emoji Amount', value: `${interaction.guild.emojis.cache.size}`, inline: false },
                        { name: 'Total Member Amount', value: `${interaction.guild.memberCount} Members`, inline: false },

                    )
                    .setFooter('Alter Ego');

                interaction.editReply({
                    embeds: [exampleEmbed]
                })


            }



        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}