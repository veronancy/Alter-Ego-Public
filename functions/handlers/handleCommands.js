const fs = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const botsettings = require('../../botsettings.json')
const token = botsettings.token

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync(`./commands`)
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./commands/${folder}`)
                .filter((file) => file.endsWith(".js"))
        

        for (const file of commandFiles) {
            const { commands, commandArray } = client
            const command = require(`../../commands/${folder}/${file}`);
            commands.set(command.data.name, command)
            if (Array.isArray(commandArray)) {
                commandArray.push(command.data.toJSON());
            } else {return}
            // console.log(`Command: ${command.data.name} has passed through the handler.`)
        }
    }

    const clientId = '1017159321743802442';
    // REPLACE CLIENT ID WITH THE ONE FROM YOUR BOT

    const rest = new REST({ version: "9"}).setToken(token)

    try {
        console.log("Started refreshing application (/) commands.")

        await rest.put(Routes.applicationCommands(clientId), {
            body: client.commandArray, 
        })

        console.log("Successfully reloaded application (/) commands.")
    } catch (error) {
        console.error(error)
    }


    }
}