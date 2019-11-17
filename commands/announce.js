exports.run = (client,message,args, ops) => {
    const Discord = require('discord.js')
    if(!args[0])
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
    .setDescription(`${args.join(" ")}`)
    .setTimestamp()
    .setFooter(message.author.tag);
    client.channels.get("427172543557009429").send(announceEmbed)
    }
}
