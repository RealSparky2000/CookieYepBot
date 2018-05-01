const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = '&'
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return
    switch(args[0]) {
        case "ping":
            message.channel.send('PONG!');
            break;
        default:
            break;
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
    if (message.content === prefix+'help') {
        if(args[2]==="embed") {
            
            
        message.reply('**All comands**: &yes, &no, &cookie, &yep, &bing, &ping, &embed');
     }
    if (message.content === prefix+'embed') {
        var embed = new Discord.RichEmbed()
            .setAuthor('Заголовок с иконкой', client.user.avatarURL)
            .setTitle('Второй заголовок без иконки')
            .setDescription('Текст внутри')
            .setImage(message.author.avatarURL)
            .setColor("#888888")
            message.channel.send({embed});
    }
});
client.login(process.env.BOT_TOKEN);
 
