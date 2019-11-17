exports.run = async (client, message, args) => {
    if(!message.member.voiceChannel) {
        message.chanel.send(':x: | Please connect to a voice channel.')
    } 
    if(!message.guild.me.voiceChannel) {
        message.channel.send(':x: | Not in a voice channel.')
    }
    else {
      message.member.voiceChannel.leave();
    }
}