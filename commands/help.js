exports.run = (client,message,args) => {
    const Discord = require('discord.js')
    const Help = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setAuthor(message.author.tag)
    .setDescription(`?announce [message]`)
    .setFooter('Help commands');
    message.channel.send(Help)
}