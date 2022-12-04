const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Ask Alter Ego anything!')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('Question to ask!')
                .setRequired(true)),


    async execute(interaction, client) {
        try {
            await interaction.deferReply({
                fetchReply: true
            });
            const number = Math.floor(Math.random() * 11) + 1

            const message = interaction.options.getString('question').toLowerCase()

            if (message.includes("hello")) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nHello!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441960667414568/Alter_Ego_Sprite_Danganronpa_1_28229.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
                return
            }
            if (message.includes("good morning")) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nGood morning!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441960667414568/Alter_Ego_Sprite_Danganronpa_1_28229.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
                return
            }
            if (message.includes("how are you")) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nI'm doing okay!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441960403189790/Alter_Ego_Sprite_Danganronpa_1_28129.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
                return
            }
            if (message.includes("jumpscare")) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nJUMPSCARE WARNING NEXT TIME!!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441962043170826/Alter_Ego_Sprite_Danganronpa_1_28829.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
                return
            }
            if (message.includes("kys")) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nSTFU you mouthbreather.`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441961787293696/Alter_Ego_Sprite_Danganronpa_1_28729.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
                return
            }

            if (number === 0) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nNo!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441962043170826/Alter_Ego_Sprite_Danganronpa_1_28829.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 1) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nYes!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441960667414568/Alter_Ego_Sprite_Danganronpa_1_28229.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 2) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nI'm not too sure...`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441960403189790/Alter_Ego_Sprite_Danganronpa_1_28129.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 3) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nUh..`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441960864575568/Alter_Ego_Sprite_Danganronpa_1_28329.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 4) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nI'll consider it!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441961359482940/Alter_Ego_Sprite_Danganronpa_1_28529.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 5) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nThat is.. interesting.`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441961112014888/Alter_Ego_Sprite_Danganronpa_1_28429.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 6) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nI'm sorry!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441961581793280/Alter_Ego_Sprite_Danganronpa_1_28629.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 7) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nHuh...`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441961359482940/Alter_Ego_Sprite_Danganronpa_1_28529.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 8) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nI think so...`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441961359482940/Alter_Ego_Sprite_Danganronpa_1_28529.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 9) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nAAAAHHH!!!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441962043170826/Alter_Ego_Sprite_Danganronpa_1_28829.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 10) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nHey!`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441961787293696/Alter_Ego_Sprite_Danganronpa_1_28729.png`)
                interaction.editReply({
                    embeds: [exampleEmbed]
                })
            }
            if (number === 11) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setDescription(`> ${message}\nI uhh.. don't quite understand.`)
                    .setImage(`https://media.discordapp.net/attachments/811178974012899408/952441962043170826/Alter_Ego_Sprite_Danganronpa_1_28829.png`)
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