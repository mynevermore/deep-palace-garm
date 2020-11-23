'use strict';
const Discord = require('discord.js');
const roller = require('./modules/roller');
const helper = require('./modules/help');
const { Commands } = require('./modules/commands');
const commands = new Commands();
const prefix = "!";

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("The bot is online!");
});

bot.on('message', async(message) => {
    let args = message.content.substring(prefix.length).split(' ');
    let data = "";

    switch (args[0]) {
        case 'garm-help':
            message.author.send({embed:helper.help()});
            break;
        //case 'lottery':
            //break;
        case 'roll':
            let member = bot.guilds.resolve(message.guild.id).member(message.author);
            let nickname = member ? member.displayName: null;
            var embed = roller.roll(message.content.substring(prefix.length + 4).trim(), nickname);
            
            if(embed.type == "Error"){
                message.author.send({embed: embed.embed});
            }
            else {
                message.channel.send({embed: embed.embed});
            }
            break;
        //case 'meme':
            //data = await random.getMeme();
            //message.channel.send(data)
            //break;
        //case 'quote':
            //data = await random.getQuote();
            //message.channel.send(data)
            //break;
        //case 'fact':
            //data = await random.getFact();
            //message.channel.send(data)
            //break;
        case 'joke':
            data = await random.getJoke();
            message.channel.send(data)
            break;
        case '8ball':
            var question = message.content.substring(prefix.length + args[0].length);
            data = await random.get8Ball(question);
            message.channel.send(data);
            break;
    }
});

bot.login(process.env.BOT_TOKEN);

