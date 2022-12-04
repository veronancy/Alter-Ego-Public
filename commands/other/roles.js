const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')
const rrModel = require('../../schemas/buttonRoles')
const { Client, CommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('Role related commands.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Add a new role to the role menu.')
                .addRoleOption(option =>
                    option.setName('role')
                        .setDescription('Role to be added.')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('description')
                        .setDescription('Description of the role. (Optional)')
                        .setRequired(false))
                .addStringOption(option =>
                    option.setName('emoji')
                        .setDescription('Emoji to display with role. (Optional)')
                        .setRequired(false)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Removes a role from the role menu.')
                .addRoleOption(option =>
                    option.setName('role')
                        .setDescription('Role to be removed.')
                        .setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('menu')
                .setDescription('Sends the role menu.')
        ),


    async execute(interaction, client) {
        try {
            


            if (interaction.options.getSubcommand() === "add") {
                await interaction.deferReply({
                    fetchReply: true
                });
    
                const permission = interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)
                if (!permission) {
                    interaction.editReply("You do not have permission to do this. Only people with the **MANAGE_MESSAGES** permissions do!")
                    return
                }
                const role = interaction.options.getRole('role')
            const roleDescription = interaction.options.getString('description') || null;
            const roleEmoji = interaction.options.getString('emoji') || null;

            if(role.position >= interaction.guild.me.roles.highest.position) return interaction.editReply("I cannot assign a role that is higher or equal than my highest role.")


            const guildData = await rrModel.findOne({guildId: interaction.guild.id})

            const newRole = {
                roleId: role.id,
                roleDescription: roleDescription,
                roleEmoji: roleEmoji,
                roleName: role.name
            }

            if(guildData){
                const roleData = guildData.roles.find((x) => x.roleId === role.id)

                if(roleData) {
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

            await interaction.editReply(`Successfully added the **${role.name}** role to the role menu!`)
        }
        if (interaction.options.getSubcommand() === "remove") {
            await interaction.deferReply({
                fetchReply: true
            });

            const permission = interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)
            if (!permission) {
                interaction.editReply("You do not have permission to do this. Only people with the **MANAGE_MESSAGES** permissions do!")
                return
            }
            const role = interaction.options.getRole('role')

            const guildData = await rrModel.findOne({
                guildId: interaction.guild.id
            })

            if(!guildData) return interaction.editReply("There are no roles in this server's role menu.")

            const guildRoles = guildData.roles;

            const findRole = guildRoles.find(x => x.roleId === role.id);

            if(!findRole) return interaction.editReply("That role is not inside of the server's role menu.")
            

            const filteredRoles = guildRoles.filter(x => x.roleId !== role.id)
            guildData.roles = filteredRoles

            await guildData.save()

            await interaction.editReply(`Successfully removed **${role.name}** from the role menu.`)
            
        }
        if (interaction.options.getSubcommand() === "menu") {
            await interaction.deferReply({
                ephemeral: true,
                fetchReply: true
            });


            const guildData = await rrModel.findOne({
                guildId: interaction.guild.id
            })
            console.log(guildData)

            if(!guildData?.roles) return interaction.editReply("There are no roles in this server's role menu.")


            const options = guildData.roles.map((x) => {
                console.log("you got the phone" + x.roleId, x.roleDescription, x.roleEmoji)
                const role = interaction.guild.roles.cache.get(x.roleId);

                return {
                    label: role.name,
                    value: role.id,
                    description: x.roleDescription || "No description given.",
                    emoji: x.roleEmoji
                }
            })

            const panelEmbed = new Discord.MessageEmbed()
            .setTitle(`Role Menu`)
            .setDescription(`Please use the drop-down menu below to select a role!`)
            .setColor('GREEN')


            const randomNum = Math.random()

            const reactionRolesID = `${interaction.guild.id}${interaction.user.id}-reactionroles-${randomNum}`

            const components = [
                new Discord.MessageActionRow().addComponents(
                    new Discord.MessageSelectMenu()
                    .setCustomId('reaction-roles')
                    .setMaxValues(1)
                    .addOptions(options)
                )

            ]

            interaction.editReply("Success.")

            interaction.channel.send({
                embeds: [panelEmbed],
                components: components
            })

           
            
        }


        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}