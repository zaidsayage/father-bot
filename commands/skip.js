exports.run = async (client,message,args,ops) => {
    const Discord = require('discord.js')
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.channel.send(`:x: | No music playing.`)
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':x: | You are not in the same channel as the bot.')
    let userCount = message.member.voiceChannel.members.size;
    let required = 0
    if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
    if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`:x: | You already voted to skip. ${fetched.queue[0].voteSkips.length}/${required} votes required.`);
    fetched.queue[0].voteSkips.push(message.member.id);
    ops.active.set(message.guild.id, fetched);
    const skippedSong = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`Skipped: ${fetched.queue[0].songTitle}`)
    if(fetched.queue[0].voteSkips.length >= required) {
        message.channel.send(skippedSong);
        return fetched.dispatcher.emit('end');
    }
}