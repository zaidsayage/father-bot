exports.run = (clinet,message,args, ops) => {
    const Discord = require('discord.js')
    const announceChannel = 645509843460947968
    const announceMsg = message.author.content;
    if(!message.content)
    {
        message.reply("No content.")
    }
    const announceEmbed = new Discord.RichEmbed()
    .setColor('#0000FF')
    .setAuthor("ANNOUNCEMENT")
    .setDescription(announceMsg)
    .setTimestamp()
    .setFooter(message.author)
    message.channel.get(announceChannel).send(announceEmbed)

    
}
