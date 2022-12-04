const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('goodbye')
        .setDescription("Commands related to the Goodbye channel.")
        .addSubcommand(subcommand =>
            subcommand
                .setName('set')
                .setDescription('Sets up a custom Goodbye message for leaving members!')
                .addStringOption(option =>
                    option.setName('title')
                        .setDescription('Title of the message embed.')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('description')
                        .setDescription(`Description of the message embed. You can put USER_HERE as a placeholder for the member's name.`)
                        .setRequired(true))
                .addAttachmentOption((option) => option
                    .setRequired(true)
                    .setName("image")
                    .setDescription("Image to be used inside of the message embed.")),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('toggle')
                .setDescription('Toggle on/off the Goodbye channel.')
        ),

    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });

            const Discord = require('discord.js')
            const config = require('../../config')

            const permission = interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)
            if (!permission) {
                interaction.editReply("You do not have permission to do this. Only people with the **MANAGE_MESSAGES** permissions do!")
                return
            }

            if (interaction.options.getSubcommand() === "set") {
                const target = interaction.user
                const guildId = interaction.guild.id


                const name = interaction.options.getString('title')
                const desc = interaction.options.getString('description')
                const imag = interaction.options.getAttachment('image')
                const image = imag.url

                if (!desc.includes("USER_HERE")) {
                    interaction.editReply("If you want to have the new member mentioned in your description, please put USER_HERE as a placeholder.")
                }

                const newText = desc.replace("USER_HERE", `<@${target.id}>`)

                await config.setImage2(guildId, image)
                await config.setText2(guildId, desc)
                await config.setTitle2(guildId, name)
                await config.setGoodbyeChannel(guildId, interaction.channel.id)
                await config.setEnable(guildId, 0)

                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle(`${name}`)
                    .setImage(image)
                    .setDescription(`${newText}`)
                    .setTimestamp()
                    .setFooter('Alter Ego');

                interaction.editReply({
                    content: `Successfully set your custom goodbye embed in <#${interaction.channel.id}>! This is what it will look like:`,
                    embeds: [exampleEmbed]
                })
            } else {
                const guildId = interaction.guild.id

                const obama = await config.getEnableGoodbye(guildId)

                if (obama === 0) {
                    await config.setEnableGoodbye(guildId, 1)
                    interaction.editReply("Successfully disabled Welcome!")
                    return
                }
                if (obama === 1) {
                    await config.setEnableGoodbye(guildId, 0)
                    interaction.editReply("Successfully turned on Welcome!")
                    return
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }

};