exports.run = async(client,message,args) => {
    const urban = require('relevant-urban')
    const Discord = require('discord.js')
    if(!args[0]) return message.channel.send(`:x: | No word entered.`)
    let res = await urban(args.join(' '))
    const dictionaryEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setAuthor(`Word: ${res.word}`, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSs06o_lxOv68TVquRgmrcVtV-QKjlPxxPdsa86n9CbnxyPG2A`)
    .setDescription(`__**Definition**__:\n${res.definition}\n__**Example**__:\n${res.example}`)
    .setFooter('From Urban Dictionary')
    message.channel.send(dictionaryEmbed)
}