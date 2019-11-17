exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.channel.send(':x: | No music playing.');
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`:x: | You are not in the same channel as the bot.`);
    if(fetched.dispatcher.paused) return message.channel.send(':x: | Music already paused.')
    fetched.dispatcher.pause();
    message.channel.send(`:musical_note: | Paused ${fetched.queue[0].songTitle}`);
}