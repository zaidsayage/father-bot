const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
// Heroku bot hosting
http.createServer().listen(port);

const prefix = '$';
const ownerID = '139234964699873281';
const adminID = '427168114770444298';
const versionID = 'v1.1.0'
const active = new Map();

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    if(message.author.bot) {
        return;
    }
    if(!message.content.startsWith(prefix)) {
        return;
    }
    try {
        delete require.cache[require.resolve(`./commands/${cmd}.js`)]
        let ops = {
            ownerID: ownerID, 
            adminID: adminID,
            active: active
        }
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);
    } catch (e) {
        console.log(e.stack)
    }
});
client.on('error', err => {
    console.log(err);
})
client.on('ready', () => {
console.log(`Bot ${versionID} online`)
});
client.login(process.env.TOKEN);