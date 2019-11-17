exports.run = async (client, message, args, ops) => {
    const Discord = require('discord.js')
  const ytdl = require('ytdl-core')
    if(!message.member.voiceChannel) {
        message.chanel.send(':x: | Please connect to a voice channel')
    } 
    if(!args[0]) {
        message.channel.send(':x: | Please input a url.')
    }
    let validate = await ytdl.validateURL(args[0]);
    if(!validate) {
        let commandFile = require(`./search.js`); 
        return commandFile.run(client,message,args,ops);       
    }

let info = await ytdl.getInfo(args[0]);
let data = ops.active.get(message.guild.id) || {};
if(!data.connection) data.connection = await message.member.voiceChannel.join();    
if(!data.queue) data.queue = [];
data.guildID = message.guild.id;
data.queue.push({
    songTitle: info.title,
    requester: message.author.tag,
    url: args[0],
    announceChannel: message.channel.id

});
const queueEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Added To Queue: ${info.title}`)
.setFooter(`Requested By: ${message.author.tag}`)
.setTimestamp()
if(!data.dispatcher) play(client, ops, data);
else {
    message.channel.send(queueEmbed)
    }
ops.active.set(message.guild.id, data);

async function play(client,ops,data) {
    const nowEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Now Playing: ${data.queue[0].songTitle}`)
    .setFooter(`Requested by: ${data.queue[0].requester}`)
    client.channels.get(data.queue[0].announceChannel).send(nowEmbed)
    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;
    data.dispatcher.once('end', function(){
        end(client, ops , data);
    });
}
function end(client, ops, dispatcher) {
    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();
    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        play(client, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);
        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if (vc) vc.leave();
    }
}
}