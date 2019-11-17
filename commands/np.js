exports.run = (client, message, args, ops) => {
    const Discord = require('discord.js')
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) {
        message.channel.send(':x: | No music playing.')
    }
    let queue = fetched.queue;
    let nowPlaying = queue[0];
    const nowEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Now Playing: ${nowPlaying.songTitle}`)
    message.channel.send(nowEmbed)
}