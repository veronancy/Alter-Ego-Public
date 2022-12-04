const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('confession-channel')
        .setDescription('Anonymously confess to the local confession channel!')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('Channel to become the Confession channel.')
                .setRequired(true)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });

            const channel = interaction.options.getChannel('channel')


            const guildData = await rrModel.findOne({ guildId: interaction.guild.id })

            const newRole = {
                num: 1,

            }

            if (guildData) {
                const roleData = guildData.roles.find((x) => x.roleId === role.id)

                if (roleData) {
                    roleData = newRole;
                } else {
                    guildData.roles = [...guildData.roles, newRole]
                }

                await guildData.save()
            } else {
                await rrModel.create({
                    guildId: interaction.guild.id,
                    roles: newRole
                })
            }







        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}