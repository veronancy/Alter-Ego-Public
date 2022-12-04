

module.exports = {
    name: "help",
    aliases: ['commands','setup'],
    description: "Pulls up the help menu!",
    category: "economy",
    cooldown: "3s",

    slash: false,
    callback: async ({ message, args, client }) => {
        try {
            const Discord = require('discord.js')


            const embed1 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Welcome to Alter Ego!')
                .setThumbnail("https://media.discordapp.net/attachments/790090311153090623/952739442353930260/Chihiro_Fujisaki_School_Mode_Pixel_Icon_28329.gif")
                .setDescription("Oh, it's a pleasure to meet you! I am Alter Ego, a learning artificial intelligence program.\nI have been repurposed as a Danganronpa themed moderation bot, please use the menu bar on the bottom of this embed to view my commands! I hope I can be of use to you and your server! <3")
                .addFields(
                    { name: 'Need more help?', value: '[Join my Support Server (Has notifications for new updates!)](https://discord.gg/UgvpyUcUkw)', inline: true },
                    { name: 'Bot Invite', value: '[Invite Me!](https://top.gg/bot/816905614038270023)', inline: true },
                    { name: 'Patreon', value: '[Patreon Page!](https://www.patreon.com/cobsidiancrimson?fan_landing=true)', inline: true },

                    { name: 'Creator', value: 'nancy#1987\nPlease do **not** friend request me, join my [support server.](https://discord.gg/UgvpyUcUkw)', inline: false },
                    // { name: 'Icon', value: 'Transparent in icon by [Bapt_Lockus on Reddit!](https://www.reddit.com/user/Bapt_Lockus)', inline: false },
                )

            const mod = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Moderation')
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`These are my Moderation commands!`)
                .addFields(
                    { name: 'a!ban', value: 'Bans a member - a!ban @person <reason> - requires BAN_MEMBERS permission.', inline: false },
                    { name: 'a!kick', value: 'Kicks a member - a!kick @person <reason> - requires KICK_MEMBERS permission.', inline: false },
                    { name: 'a!clear', value: 'Clears messages - a!clear 10 (or any number below 100) - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!warn', value: 'Warns someone - a!warn @person <reason> - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!warnings', value: 'See someones warnings - a!warnings @person', inline: false },
                )
                const util = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Utility')
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`These are my Utility commands!`)
                .addFields(
                    { name: 'a!about', value: 'Tells you about someone - a!about @person', inline: false },
                    { name: 'a!server', value: 'Tells you about the server', inline: false },
                    { name: 'a!afk', value: 'Makes yourself AFK - a!afk <reason>', inline: false },
                    { name: 'a!steal', value: 'Steals a emoji from a different server and adds it to this one - a!steal <emoji> - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!rank', value: 'View your server rank (ONLY WORKS IN SERVERS WITH LEVELS ENABLED)', inline: false },

                )
                const customcmd = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Customization')
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`These are my Customization commands!`)
                .addFields(
                    { name: 'a!welcomeset', value: 'Sets the welcome embed - a!welcomeset title | desc - (Attach a image to your message to set it) - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!autorole', value: 'Sets a role to be given to new members automatically - a!autorole <roleName> - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!goodbyeset', value: 'Sets the goodbye embed - a!goodbyeset title | desc - (Attach a image to your message to set it) - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!starboard', value: 'Sets the starboard - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!starboard-delete', value: 'Delete a starboard - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!welcometoggle', value: 'Toggles on/off the Welcome embed - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!goodbyetoggle', value: 'Toggles on/off the Goodbye embed - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!leveltoggle', value: 'Toggles on/off the leveling system - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!add', value: 'Add a role to the Reaction Roles - a!add @role <emoji> - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!delete', value: 'Deletes all Reaction Roles - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!roles', value: 'Displays the Reaction Roles panel in the current channel - requires MANAGE_MESSAGES permission.', inline: false },
                    { name: 'a!antispamtoggle', value: 'Toggles on/off the Anti-Spam system - requires MANAGE_MESSAGES permission.', inline: false },

                )
            

            const row = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageSelectMenu()
                        .setCustomId('select')
                        .setPlaceholder('Press me to select something!')
                        .addOptions([
                            {
                                label: 'Home Page',
                                description: 'Returns back to the Home page.',
                                value: 'home',
                            },
                            {
                                label: 'Moderation Commands',
                                description: 'Lists the commands under the "moderation" category.',
                                value: 'mod',
                            },
                            {
                                label: 'Utility Commands',
                                description: 'Lists the commands under the "util" category.',
                                value: 'util',
                            },

                
                            
                            {
                                label: 'Customization Commands (MOST IMPORTANT)',
                                description: 'Lists the commands under the "custom" category.',
                                value: 'custom',
                            },

                           
                        ]),
                );

            var m = await message.reply({
                embeds: [embed1],
                components: [row]
            })


            const collector2 = m.createMessageComponentCollector({
                // filter: targetfilter,
                time: 1800000
            })

            collector2.on('collect', async i => {

                if (!i.user.id === message.author.id) {

                    await i.reply({
                        content: "Do ?help yourself.",
                        ephemeral: true
                    })
                }
                if (i.values[0] === "custom") {
                    if (i.user.id === message.author.id) {

                        await i.deferUpdate()
                        await i.editReply({
                            embeds: [customcmd],
                            components: [row]
                        })


                    }

                } else if (i.values[0] === "mod") {

                    if (i.user.id === message.author.id) {

                        await i.deferUpdate()
                        await i.editReply({
                            embeds: [mod],
                            components: [row]
                        })

                    }
                
                } else if (i.values[0] === "home") {

                    if (i.user.id === message.author.id) {

                        await i.deferUpdate()
                        await i.editReply({
                            embeds: [embed1],
                            components: [row]
                        })

                    }
                
                
                } else if (i.values[0] === "util") {

                    if (i.user.id === message.author.id) {

                        await i.deferUpdate()
                        await i.editReply({
                            embeds: [util],
                            components: [row]
                        })






                    }
                }
                })

            // const pages = [
            // 	embed1,
            // 	embed2,
            //     embed22,
            //     custom,
            //     embed3,
            //     despair,
            //     embed4,
            //     embed5,
            //     manipulaion,
            //     cosplay,
            //     settings,
            //     keebo,
            //     maki,
            //     kaede,
            //     chris,
            //     shin,
            //     senpai

            // ];
            // function findEmoji(c, { nameOrId }) {
            //     return c.emojis.cache.get(nameOrId).id
            // }

            // const emoji1 = "⬅️"
            // const emoji2 = "➡️"
            // const emojiList = [emoji1, emoji2]
            // const timeout = 1000000

            // // Call the paginationEmbed method, first two arguments are required
            // // emojiList is the pageturners defaults to ['⏪', '⏩']
            // // timeout is the time till the reaction collectors are active, after this you can't change pages (in ms), defaults to 120000
            // const button1 = new Discord.MessageButton()
            //                 .setCustomId('previousbtn')
            //                 .setEmoji('⬅️')
            //                 .setStyle('PRIMARY')

            // const button2 = new Discord.MessageButton()
            //                 .setCustomId('nextbtn')
            //                 .setEmoji('➡️')
            //                 .setStyle('PRIMARY')

            //                 const buttonList = [
            //                     button1,
            //                     button2
            //                 ]

            //                 const paginationEmbed = require('discord.js-pagination-emoji');
            //                 paginationEmbed(message, pages, emojiList, timeout);
            // There you go, now you have paged embeds
            // There you go, now you have paged embeds

        }


        catch (error) {
            console.log(error)
        }
    }

};