exports.run = (client,message,args,ops) => {
    const Discord = require('discord.js')
    const errorMessage = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTitle(`Unable to reload: ${args[0]}`)
    .setTimestamp()
    const reloadEmbed = new Discord.RichEmbed()
    .setColor('#008000')
    .setTitle(`Reloaded: ${args[0]}`)
    .setTimestamp()
    if (message.author.id !== ops.ownerID) {
        message.channel.send('Invalid Permissions.')
    }
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)]
    } catch (e) {
        return message.channel.send(errorMessage)
    }
    message.channel.send(reloadEmbed)


}