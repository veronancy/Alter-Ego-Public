const Discord = require('discord.js')

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName)
            if (!command) return;

            try {
                await command.execute(interaction, client)
            } catch (error) {
                console.error(error)
                await interaction.reply({
                    content: 'Something went wrong while executing this command.',
                    ephemeral: true
                })
            }
        }

        // Reaction Handling

        if(interaction.isSelectMenu()) {
            if(interaction.customId !== 'reaction-roles') return

            await interaction.deferReply({
                ephemeral: true
            })

            const roleId = interaction.values[0];

            const role = interaction.guild.roles.cache.get(roleId)
            const memberRoles = interaction.member.roles;

            const hasRole = interaction.member.roles.cache.has(roleId)
            

            if(hasRole){
                try {
                memberRoles.remove(roleId)
                interaction.followUp(`**${role.name}** has been removed from you.`)
            } catch (error) {
                console.error(error)
                await interaction.followUp({
                    content: 'A error occured! Make sure that my role, Alter Ego, is ABOVE all roles. I also **cannot** add roles created when bots join a server.',
                    ephemeral: true
                })
            
            }
            }

            if(!hasRole){
                try {
                    memberRoles.add(roleId)
                    interaction.followUp(`**${role.name}** has been added.`)
                } catch (error) {
                    console.error(error)
                    await interaction.followUp({
                        content: 'A error occured! Make sure that my role, Alter Ego, is ABOVE all roles. I also **cannot** add roles created when bots join a server.',
                        ephemeral: true
                    })
                
                }
               
            }
        

        }

    },
}