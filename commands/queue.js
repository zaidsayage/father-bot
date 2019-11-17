exports.run = async(client, message, args, ops) => {
    const Discord = require('discord.js')
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) {
        message.channel.send('No music playing')
    }
    let queue = fetched.queue;
    let nowPlaying = queue[0];
    let resp = `__Now playing__\n\`${nowPlaying.songTitle}\`\nRequested by: ${nowPlaying.requester}`
    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. ** ${queue[i].songTitle}** Requested by: ${queue[i].requester}\n`;

    }
    const Embed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(`Queue`)
    .setDescription(resp)
    message.channel.send(Embed)
}