const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = '&'
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
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
    if (message.content === prefix+'help') {
        if(args[2]==="embed") {
            message.reply('Displays a test embed.');
        }
        else {
            message.reply('**All comands**: &yes, &no, &cookie, &yep, &bing, &ping, &embed');
        }
     }
    if (message.content === prefix+'embed') {
        var embed = new Discord.RichEmbed()
            .setAuthor('CookieYep', client.user.avatarURL)
            .setTitle('The cookie steals avatars')
            .setDescription('Avatar URL link')
            .setImage(message.author.avatarURL)
            .setColor("#ffcc00")
            message.channel.send({embed});
    }
});
client.login(process.env.BOT_TOKEN);
