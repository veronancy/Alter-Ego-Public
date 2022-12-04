
module.exports = {
    name: "changelog",
    description: "Sends the changelog for the current update!",
    category: "economy",
    cooldown: "3s",

    slash: false,
    callback: async ({ message, args, client }) => {
          try {
            const Discord = require('discord.js')

        
    
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor()
        .setTitle('Changelog')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("These are the changes of the latest update.")
        .addFields(
            { name: 'Version', value: '2.0.0 - last updated 3/13/2022', inline: false },
            { name: 'Devlog', value: 'MAJOR revamp, all commands re-coded.\nNew Commands: a!steal - Steal Emojis\na!avatar - Steal a avatar\na!antispamtoggle - Toggle on/off the Anti-Spam System\nNew Feature - Anti-Spam\nRevamped Feature - Welcome/Goodbye Embed\nWelcome/Goodbye embeds can now be set up like this: a!welcomeset title | desc\nYou can also attach a image for it to be applied. To do it with goodbye embeds just change it from a!welcomeset to a!goodbyeset\nYou can also put USER_HERE as a placeholder in the embeds description field.\n*Starboards no longer work, please do a!starboard to make a new one.*', inline: false },
        )
        .setTimestamp()
        .setFooter('Alter Ego');
        await message.reply({
            embeds: [exampleEmbed]
        })




}


catch (error) {
    console.log(error)
}
    }
	};