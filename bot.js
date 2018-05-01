const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
    bot.user.setGame('cookies'); 
});
var prefix = '&'
client.on('message', message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (!message.content.startsWith(prefix)) return
            switch (args[0].toLowerCase()) {
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
                    var embed8 = new Discord.RichEmbed()
                        .setColor(0xffffff)
                        .setFooter(fetched)
                    message.channel.send({embed8});
                    break;
                case "avatar":
                    var aembed = new Discord.RichEmbed()
                        .setAuthor('CookieYep', client.user.avatarURL)
                        .setTitle('The cookie steals avatars')
                        .setDescription('[Avatar Link](' + message.author.avatarURL + ')')
                        .setImage(message.author.avatarURL)
                        .setColor("#ffcc00")
                    message.channel.send({aembed});
                    break;
                case "help":
                    switch (args[1]) {
                        case "avatar":
                            message.channel.send('Displays your pfp.');
                            break;
                        default:
                            message.channel.send('**All comands**: &cookie, &bing, &ping, &avatar, &8ball, &info.');
                            break;
                    }
                    break;
            default:
                break;
    }

});
client.login(process.env.BOT_TOKEN);
