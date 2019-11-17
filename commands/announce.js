exports.run = (clinet,message,args, ops) => {
    const Discord = require('discord.js')
    const announceChannel = 645509843460947968
    const announceMsg = message.author.content;
    if(message.author.id !== ops.adminID || message.author.id !== ops.ownerID)
    {
        message.reply("Invalid Permissions");
    }
    
}