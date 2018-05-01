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
        message.reply('PONG!');
        break;
        case "bing":
        message.reply('BONG!');
        break;
        case "how are you":
        message.reply('Nice!');
        break;
        case "cookie":
        message.reply('COOOOOKIESS!!!!');
        break;
        default:
        break;
    }
    if (args[0]==="help") {
        if(args[1]==="avatar") {
            message.reply('Displays your pfp.');
        }
        else {
            message.reply('**All comands**: &cookie, &bing, &ping, &avatar');
        }
     }
    if (message.content === prefix+'avatar') {
        var embed = new Discord.RichEmbed()
            .setAuthor('CookieYep', client.user.avatarURL)
            .setTitle('The cookie steals avatars')
            .setDescription('[Avatar Link](' + message.author.avatarURL + ')')
            .setImage(message.author.avatarURL)
            .setColor("#ffcc00")
            message.channel.send({embed});
    }
});
client.login(process.env.BOT_TOKEN);
