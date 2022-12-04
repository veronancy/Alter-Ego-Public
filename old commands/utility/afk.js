const Discord = require("discord.js");
const { afk } = require('../../Collection/index')

module.exports = {
    name: "afk",
    description: "Sets yourself as AFK!",
    category: "utility",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            var reason;

            if (args[0]) {
                reason = args.join(" ")
            } else {
                reason = "No reason provided."
            }

            afk.set(message.author.id, [Date.now(), reason]);

            message.reply(`Sucessfully set yourself as AFK with reason: **${reason}** !`)



        }


        catch (error) {
            console.log(error)
        }

    }
}