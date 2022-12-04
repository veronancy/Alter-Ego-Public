const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a member!')
        .addUserOption(option =>
            option.setName('person')
                .setDescription('Person to ban.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for the ban.')
                .setRequired(false)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });
            const permission = interaction.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)
            if(!permission){
                interaction.editReply("Successfully ban- wait... you don't have permission.")
                return
            }

            const reason = interaction.options.getString('reason')
            const person = interaction.options.getMember('person')
            const personName = interaction.options.getUser('person')

            
            try {
            if(reason === null){
                interaction.editReply(`Successfully banned ${personName.tag} with no reason provided!`)
                person.ban().catch(err => {
                    interaction.editReply("Unable to ban this person.")
                })

            } else {
                interaction.editReply(`Successfully banned ${personName.tag} with reason: ${reason} !`)
                person.ban({
                    reason: reason
                }).catch(err => {
                    interaction.editReply("Unable to ban this person.")
                })

            }
        } catch (error) {
            interaction.editReply("Unable to ban.")
            
            return
        }



        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}