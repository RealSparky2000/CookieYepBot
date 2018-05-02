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
        'Disagree.',
        'No',
        'Maybe',
        'Really?',
        'Cannot predict now.',
        'Dont decided on this!'
        ]
        var fetched = responses[Math.floor(Math.random() * responses.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0x00FFFF)
            .setFooter(fetched)
        message.channel.send({embed});
        break;
        case "avatar":
        var embed = new Discord.RichEmbed()
            .setAuthor('CookieYep', client.user.avatarURL)
            .setTitle('The cookie steals avatars')
            .setDescription('[Avatar Link](' + message.author.avatarURL + ')')
            .setImage(message.author.avatarURL)
            .setColor("0x00FFFF")
            message.channel.send({embed});
        break;
        case "infp":
        let UserInfo = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL()) //Heading With Username & Their Avatar 
            .setTitle('UserInfo')
            .setURL('www.google.com') //Any Vaild Link
            .setColor('#0x00FFFF') //You Can Use HexColour Ex:- #000000
            .setImage(message.author.avatarURL()) //Add Any Image URl || Image
            .setThumbnail(message.author.avatarURL()) //Add Any Image URl || ThumbNail
            .addField('Avatar', message.author.avatar, true) //The ID of the user's avatar //Inline True or false
            .addField('AvatarURL', message.author.avatarURL({
                format: 'png'
            }), true) //{options} options are Size?: 128 | 256 | 512 | 1024 | 2048, Format?: "webp" | "png" | "jpg" | "gif" //.defaultAvatarURL() A link to the user's default avatar //.displayAvatarURL() A link to the user's avatar if they have one. Otherwise a link to their default avatar will be returned
            .addField('AvatarURL', message.author.avatarURL({
                size: '2048'
            }), true)
            .addField('Bot', message.author.bot, true) //Returns True If Message Author = Bot || False If Message Author not Bot.
            .addField('Created At', message.author.createdAt, false) //The time the user was created || .createdTimestamp - The timestamp the user was created at
            .addField('Discrim', message.author.discriminator, true) //A discriminator/tag based on username for the user Ex:- 0001
            .addField('DMChannel', message.author.dmChannel) //The DM between the client's user and this user || If Nothing Returns "Null"
            .addField('ID', message.author.id) //The ID of the User/author
            .addField('Last Message', message.author.lastMessage) //The Message object of the last message sent by the user, if one was sent
            .addField('Last Message ID', message.author.lastMessageID) //The ID of the last message sent by the user, if one was sent
            .addField('Presence', message.author.presence) //The presence of this user
            .addField('Presence Status', message.author.presence.status) //The presence status of this user
            .addField('Presence Game', message.author.presence.activity.name) //The presence Game of this user
            .addField('Tag', message.author.tag) //The Discord "tag" for this user || Ex:- Sai Chinna#6718
            .addField('Username', message.author.username) //The username of the user || Ex:- Sai Chinna
            .addField('Nick Name', message.guild.member(target).displayName) //Nick Name In That (message sent) server || Define target as message Author Ex:- let target = message.author; || Add This Line in Top
            .setFooter('Requested By', message.author.tag) //Change To Anything As You Wish
            .setTimestamp() //The timestamp of this embed

        message.channel.send(UserInfo);
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
            break;
        default:
        break;
    }
});
client.login(process.env.BOT_TOKEN);
