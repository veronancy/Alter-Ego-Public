const mongo = require('../../mongo')
module.exports = {
    name: 'ready',
    once: true,
    async execute(client){

        console.log(`Ready! ${client.user.tag} is logged in and online.`)
        await mongo()
        setInterval(async () => {
        client.user.setPresence({
            status: 'dnd',
            activity: {
               name: "I'm back! Read my about me please!!",
                type: 'PLAYING'
             }
          });
        }, 15000)

    },
}