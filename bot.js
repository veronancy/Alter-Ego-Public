const Discord = require('discord.js-light')
const Intents = Discord.Intents
const botsettings = require('./botsettings.json')
const prefix = "a!"
const path = require('path')
const fs = require('fs')
const mongo = require('./mongo')
const levels = require('./levels')
const AntiSpam = require("discord-anti-spam");

const client = new Discord.Client({
    makeCache: Discord.Options.cacheWithLimits({
        ApplicationCommandManager: 0, // guild.commands
        BaseGuildEmojiManager: Infinity, // guild.emojis
        GuildBanManager: 0, // guild.bans
        GuildInviteManager: 0, // guild.invites
        GuildManager: Infinity, // client.guilds
        GuildMemberManager: 0, // guild.members
        GuildStickerManager: 0, // guild.stickers
        MessageManager: 0, // channel.messages
        // PermissionOverwriteManager: 0, // channel.permissionOverwrites
        PresenceManager: 0, // guild.presences
        // RoleManager: 0, // guild.roles
        StageInstanceManager: 0, // guild.stageInstances
        ThreadManager: 0, // channel.threads
        ThreadMemberManager: 0, // threadchannel.members
        UserManager: 0, // client.users
        VoiceStateManager: 0, // guild.voiceStates

    }),

    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_MEMBERS,
        
        // Intents.FLAGS.MESSAGE_CREATE,



    ],
})
const name = "made by nancy#1987"
const activities_list = [
    `with the Neo World Program! | ${name}`,
    `with the Neo World Program! | ${name}`,
    `with the Neo World Program! | ${name}`,
    `with the Neo World Program! | ${name}`,

    `Big update, please check /changelog ! | ${name}`,

]

client.commands = new Discord.Collection()
client.commandArray = []

const functionFolders = fs.readdirSync(`./functions`)
for (const folder of functionFolders) {
    const functionFiles = fs
        .readdirSync(`./functions/${folder}`)
        .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles)
        require(`./functions/${folder}/${file}`)(client)
}


client.on('guildMemberAdd', async (member) => {
    const config = require('./config')
    const toggle = await config.getEnable(member.guild.id)

    console.log(toggle)

    if (toggle === 1) {
        return
    } else {

        const guildId = member.guild.id

        const channelId = await config.getChannel(member.guild.id) // welcome channel 



        const chann = member.guild.channels.cache.get(channelId)


        if (chann === "default") return


        if (channelId === "default") return



        const [text, title, image, autorole] = await Promise.all([
            config.getText(guildId),
            config.getTitle(guildId),
            config.getImage(guildId),
            config.getAutorole(guildId),
        ]);







        console.log(text)
        console.log(autorole)
        console.log(image)


        const newText = text.replace("USER_HERE", `<@${member.id}>`)



        // guildMember.roles.add(welcomeRole);
        let welcome = new Discord.MessageEmbed()
            .setColor("#90EE90")
            .setTitle(title)
            .setDescription(`${newText}`)
            .setImage(image)
            .setTimestamp()
            .setFooter('Alter Ego');

        if (autorole === "default") {




        } else {
            member.roles.add(autorole)
        }


        member.guild.channels.resolve(channelId).send({
            embeds: [welcome]
        })
    }
})
client.on('guildMemberRemove', async (member) => {
    const config = require('./config')
    const toggle = await config.getEnable(member.guild.id)

    console.log(toggle)

    if (toggle === 1) {
        return
    } else {

        const guildId = member.guild.id

        const channelId = await config.getGoodbyeChannel(member.guild.id) // welcome channel 



        const chann = member.guild.channels.cache.get(channelId)


        if (chann === "default") return


        if (channelId === "default") return



        const [text, title, image] = await Promise.all([
            config.getText2(guildId),
            config.getTitle2(guildId),
            config.getImage2(guildId),
        ]);







        console.log(text)
        console.log(image)


        const newText = text.replace("USER_HERE", `${member.user.tag}`)

        console.log(newText)



        // guildMember.roles.add(welcomeRole);
        let welcome = new Discord.MessageEmbed()
            .setColor("#90EE90")
            .setTitle(title)
            .setDescription(`${newText}`)
            .setImage(image)
            .setTimestamp()
            .setFooter('Alter Ego');




        member.guild.channels.resolve(channelId).send({
            embeds: [welcome]
        })
    }
})


client.on('debug', console.log)
    .on('warn', console.log)

process.on('unhandledRejection', function (reason, p) {
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});




client.handleEvents()
client.handleCommands()
client.login(botsettings.token)