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
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setFooter(fetched)
        message.channel.send({embed});
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
        case "help":
        switch(args[1]) {
            case "avatar":
            message.channel.send('Displays your pfp.');
            break;
            default:
            message.channel.send('**All comands**: &cookie, &bing, &ping, &avatar, 8ball');
            break;
        }
        default:
        break;
    }
    if (args[0].toLowerCase=="help") {
        if(args[1]==="avatar") {
            message.channel.send('Displays your pfp.');
        }
        else {
            message.channel.send('**All comands**: &cookie, &bing, &ping, &avatar, 8ball');
        }
     }
   
    const Discord = require('discord.js');

//Define moment
const moment = require("moment");

exports.run = async (client, message, args) => {
    var user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);
	
	//Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot:", `${user.bot}`, true)
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
    }
};
});
client.login(process.env.BOT_TOKEN);
