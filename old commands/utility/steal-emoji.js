module.exports = {
    name: "steal",
    description: "Steals a emoji from another guild.",
    category: "utility",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const Discord = require('discord.js')

            if(!args.length){
                message.reply("You need to give me a emoji to steal!")
                return
            } else {

            if (!message.member.permissions.has('MANAGE_MESSAGES')){
                 message.reply("You do not have permission to do this!")
                 return
            }
        }

        for (const rawEmoji of args){
            const parsedEmoji = Discord.Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id){
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`
                const exampleEmbed = new Discord.MessageEmbed()
                        .setColor()
                        .setTitle(`Added the ${parsedEmoji.name} emoji!`)
                        .setImage(`${url}`)
                        .setTimestamp()
                        .setFooter('Alter Ego');
                message.guild.emojis.create(url, parsedEmoji.name)
                .then((emoji) => message.reply({
                    embeds: [exampleEmbed]
                }));

            }
        }
            



        }


        catch (error) {
            console.log(error)
        }
    }

};