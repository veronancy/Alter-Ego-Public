const Discord = require('discord.js')
const Schema = require('../../schemas/reactionroles')

module.exports = {
    name: "panel",
    aliases: ["reactionroles", "roles", "role"],
    description: "Adds to reaction role!",
    category: "reaction",
    cooldown: "3s",
    slash: false,


    callback: async ({ message, args, client }) => {
        try {
            const { member, mentions } = message


            if (!message.member.permissions.has('MANAGE_MESSAGES')) {
                message.reply("You do not have permission to use this")
                return
            }

                const channel = message.mentions.channels.first() || message.channel;

                Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
                    if(!data) return message.channel.send("Found no data! Use a!add to add a reaction role!")

                    const mapped = Object.keys(data.Roles)
                    .map((value, index) => {
                        const role = message.guild.roles.cache.get(data.Roles[value][0]);
                        return `${data.Roles[value][1].raw} = ${role}`

                    }).join("\n\n");

                    const embed = new Discord.MessageEmbed().setDescription(`React with the emoji listed to gain the listed role!\n${mapped}`).setTitle("Reaction Roles").setColor('#90EE90')

                    channel.send({
                        embeds: [embed]
                    }
                    ).then((msg) => {
                        data.Message = msg.id;
                        data.save();

                        const reactions = Object.values(data.Roles).map((val) => val[1].id ?? val[1].raw)
                        reactions.map((emoji) => msg.react(emoji));

                    })
                })
                
            


            

}


catch (error) {
    console.log(error)
}
    }
	
	};