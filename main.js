const Discord = require('discord.js');
const client = new Client({ intents: [Intents.MESSAGE.GUILDS] });

const prefix = 'Z!';
 
client.on('ready', () => {
    console.log('Zayon is online!');
});
 
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong!');
    } 
  
});
 
client.login('ODk3MjMyOTkyNzAxOTMxNjIw.YWSrVw.OViUORY8kaDBwnYqs2w-_zZnRxM');
