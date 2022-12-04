const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('steal-emoji')
        .setDescription('Take a emoji from another server, and add it to this one!')
        .addStringOption(option =>
            option.setName('emoji')
                .setDescription('Emoji to steal!')
                .setRequired(true)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });

            const permission = interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)
            if (!permission) {
                interaction.editReply("You do not have permission to do this. Only people with the **MANAGE_MESSAGES** permissions do!")
                return
            }


            const arg = interaction.options.getString('emoji')

            const args = arg.slice().trim().split(' ');


            interaction.editReply("Attempting to steal a emoji. If message doesn't update, then you didn't enter any emojis!")

            for (const rawEmoji of args) {
                const parsedEmoji = Discord.Util.parseEmoji(rawEmoji);

                if (parsedEmoji.id) {
                    const extension = parsedEmoji.animated ? ".gif" : ".png";
                    const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor()
                        .setTitle(`Added the ${parsedEmoji.name} emoji!`)
                        .setImage(`${url}`)
                        .setTimestamp()
                        .setFooter('Alter Ego');
                    interaction.guild.emojis.create(url, parsedEmoji.name)
                        .then((emoji) => interaction.editReply({
                            content: `Success!`,
                            embeds: [exampleEmbed]
                        }));

                }
            }




        }
        catch (error) {
            console.log(error)
        }
        // })
    }
}