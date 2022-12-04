module.exports = {
    name: "clear",
    description: "Clears a amount of messages.",
    category: "mod",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const { member, mentions } = message

            const tag = `<@${member.id}>`

            const { Permissions } = require('discord.js');

            if (message.member.permissions.has('MANAGE_MESSAGES')){
               
           
            if (message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            } else {
                message.reply("I'm sorry.. but I need permission to preform this command for you.");
                return
            }

            if (message.deletable) {
                message.delete();
            }



            if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
                message.reply("Please select the amount you want cleared, example is a!clear 20")
                return
            }

            let deleteAmount;
            if (parseInt(args[0]) > 100) {
                deleteAmount = 100;
            } else {
                deleteAmount = parseInt(args[0]);
            }
          
            message.channel.bulkDelete(deleteAmount, true)
            
                .catch(err => message.reply(`A error has occured: ${err}`));
        } else {
            message.reply("You do not have permission to do this!")
            return
        }
    }

        catch (error) {
            console.log(error)
        }
    }

};