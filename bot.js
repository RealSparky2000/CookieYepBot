const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = '&'
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return
    switch(args[0].toLowerCase()) {
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
        case "8ball":
        var responses = [
        'Agreed!',
        'Of Course!',
        'Nope.',
        'No',
        'Maybe',
        'One day...',
        'Don\'t see that happening!',
        'I have no idea'
        ]
        var fetched = responses[Math.floor(Math.random() * responses.length)];
        const embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setFooter(fetched);
        message.channel.send(embed);
        break;
        case "avatar":
        var embed = new Discord.RichEmbed()
            .setAuthor('CookieYep', client.user.avatarURL)
            .setTitle('The cookie steals avatars')
            .setDescription('[Avatar Link](' + message.author.avatarURL + ')')
            .setImage(message.author.avatarURL)
            .setColor("#ffcc00")
            message.channel.send({embed});
        break;
        default:
        break;
    }
    if (args[0].toLowerCase==="help") {
        if(args[1]==="avatar") {
            message.channel.send('Displays your pfp.');
        }
        else {
            message.channel.send('**All comands**: &cookie, &bing, &ping, &avatar, 8ball');
        }
     }
    
});
client.login(process.env.BOT_TOKEN);
