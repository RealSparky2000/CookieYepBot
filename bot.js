const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "&"

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

client.on('message', message => {
    if (message.content === 'how-are-you') {
    	message.reply('NICE!');
  	}
});

client.on('message', message => {
    if (message.content === 'cookie') {
    	message.reply('COOOOOOOOOKIES!!!!!!');
  	}
});

client.on('message', message => {
    if (message.content === 'yep') {
    	message.reply('Yep? Who is CookieYep? Hmmm...');
  	}
});

client.on('message', message => {
    if (message.content === 'invite') {
    	message.reply('https://discordapp.com/oauth2/authorize?client_id=440527526746521601&scope=bot&permissions=8');
  	}
});

client.on('message', message => {
    if (message.content === 'yes') {
    	message.reply('No, suck!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
