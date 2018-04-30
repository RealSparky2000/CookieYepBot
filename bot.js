const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = '&'
client.on('message', message => {
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
    if (message.content === prefix+'yep') {
        message.reply('Yep? Who is CookieYep? Hm...');
     }
    if (message.content === prefix+'cookie') {
        message.reply('COOOOOKIESS!!!!');
     }
    if (message.content === prefix+'yes') {
        message.reply('No, suck!');
     }
    if (message.content === prefix+'no') {
        message.reply('Yes..? 8(');
     }
});   
client.login(process.env.BOT_TOKEN);
 
