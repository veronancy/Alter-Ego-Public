module.exports = {
    name: "goodbyeset",
    description: "Customizes the goodbye menu!",
    category: "mod",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            if (!message.member.permissions.has('MANAGE_MESSAGES')) {
                message.reply("You do not have permission to use this")
                return
            }
            var Attachment = message.attachments.first() ? message.attachments.first().url : null
            const target = message.author
            const guildId = message.guild.id
            const config = require('../../config')


            const Discord = require('discord.js')

            var arguments;
            arguments = args.toString();
            arguments = arguments.split(",,").join(";")
            arguments = arguments.split(",").join(" ")
            arguments = arguments.split(";").join(",")
            arguments = arguments.split('|');

            const name = arguments[0]
            const desc = arguments[1]
            var image;
            if (!Attachment) {
                image = ""
            } else {
                 image = message.attachments.first().url


            }

            if(!desc.includes("USER_HERE")){
                message.reply("If you want to have the new member mentioned in your description, please put USER_HERE as a placeholder.")
            }

            const newText = desc.replace("USER_HERE", `<@${target.id}>`);

            await config.setImage2(guildId, image)
            await config.setText2(guildId, desc)
            await config.setTitle2(guildId, name)
            await config.setGoodbyeChannel(guildId, message.channel.id)
            await config.setEnable(guildId, 0)

            const exampleEmbed = new Discord.MessageEmbed()
                .setColor()
                .setTitle(`${name}`)
                .setImage(image)
                .setDescription(`${newText}`)
                .setTimestamp()
                .setFooter('Alter Ego');

                message.reply({
                    content: `Successfully set your custom goodbye embed in <#${message.channel.id}>! This is what it will look like:`,
                    embeds: [exampleEmbed]
                })











        }


        catch (error) {
            console.log(error)
        }
    }

};