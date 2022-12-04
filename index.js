const { ShardingManager } = require('discord.js-light')
const botsettings = require('./botsettings.json')
const manager = new ShardingManager('./bot.js', { 
    token: botsettings.token,
    totalShards: "auto",
    respawn: true,
});
const { AutoPoster } = require('topgg-autoposter')

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxNjkwNTYxNDAzODI3MDAyMyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjM1MjAzNDcxfQ.qREfdePDhnRY72ShgVRZ6XnJQKY_bOX1CwpGBLkb81s', manager)

manager.spawn({ amount: manager.totalShards, delay: 50000, timeout: -1 }).catch(e => console.log(e))