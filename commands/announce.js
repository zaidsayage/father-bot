exports.run = (client,message,args, ops) => {
    const Discord = require('discord.js')
    if(!args[0])
    {
        message.reply("No content.")
    }
    else if (message.author.id !== ops.ownerID || message.author.id !== ops.adminID) {
        message.channel.send('Invalid Permissions.')
    }
    else {
    const announceEmbed = new Discord.RichEmbed()
    .setColor('#0000FF')
    .setImage('https://i.imgur.com/qci3Nk2g.jpg')
    .setAuthor("Announcement")
    .setDescription(`${args[0]}`)
    .setTimestamp()
    .setFooter(message.author.tag);
    client.channels.get("645509843460947968").send(announceEmbed)
    }
}
