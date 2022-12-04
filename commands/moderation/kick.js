const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a member!')
        .addUserOption(option =>
            option.setName('person')
                .setDescription('Person to kick.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for the kick.')
                .setRequired(false)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });
            const permission = interaction.member.permissions.has(Discord.Permissions.FLAGS.KICK_MEMBERS)
            if(!permission){
                interaction.editReply("Successfully kic- wait... you don't have permission.")
                return
            }

            const reason = interaction.options.getString('reason')
            const person = interaction.options.getMember('person')
            const personName = interaction.options.getUser('person')

            
            try {
            if(reason === null){
                interaction.editReply(`Successfully kicked ${personName.tag} with no reason provided!`)
                person.kick().catch(err => {
                    interaction.editReply("Unable to kick this person.")
                })

            } else {
                interaction.editReply(`Successfully kicked ${personName.tag} with reason: ${reason} !`)
                person.kick({
                    reason: reason
                }).catch(err => {
                    interaction.editReply("Unable to kick this person.")
                })

            }
        } catch (error) {
            interaction.editReply("Unable to kick.")
            
            return
        }



        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}