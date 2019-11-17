exports.run = (client,message,args, ops) => {
    const Discord = require('discord.js')
    if(!args[0].join(" "))
    {
        message.reply("No message to announce.")
    }
    else if (message.author.id !== ops.ownerID) {
        message.reply('Invalid Permissions.')
    }
    else {
    const announceEmbed = new Discord.RichEmbed()
    .setColor('#0000FF')
    .setAuthor("Announcement")
    .setDescription(`${args[0]}`)
    .setTimestamp()
    .setFooter(message.author.tag);
    client.channels.get("645509843460947968").send(announceEmbed)
    }
}
