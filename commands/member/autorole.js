const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autorole')
        .setDescription('Set a role to be auto-applied when someone joins.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('set')
                .setDescription('Sets a role to be applied when someone joins.')
                .addRoleOption(option =>
                    option.setName('role')
                        .setDescription('Role to be applied.')
                        .setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('reset')
                .setDescription('Turns off the autorole, can be reapplied via doing /autorole set')
        ),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });

            const config = require('../../config')
            const guildId = interaction.guild.id

            const permission = interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)
            if (!permission) {
                interaction.editReply("You do not have permission to do this. Only people with the **MANAGE_MESSAGES** permissions do!")
                return
            }

            if (interaction.options.getSubcommand() === "set") {
                interaction.editReply("Setting role.. if this message doesn't change then I don't have permission to MANAGE_ROLES!")
                const ifExist = interaction.options.getRole('role')
                await config.setAutorole(guildId, ifExist)
                interaction.editReply(`Successfully set role! **Make sure that the ALTER EGO role is the highest role.**`)
            } else {
                await config.setAutorole(guildId, "default")

            }


        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}