const Discord = require('discord.js');
const client = new Discord.Client();

if(message.content.startsWith(prefix))

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

if(!message.content.startsWith(prefix)) return

    if (message.content === prefix+'ping') {
        message.channel.send('PONG!');
      }
    if (message.content === prefix+'bing') {
        message.reply('BONG!');
      }
    if (message.content === prefix+'how are you') {
        message.reply('NICE!');
     }
});


client.login(process.env.BOT_TOKEN);

