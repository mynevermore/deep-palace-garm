'use strict';
const Discord = require('discord.js');
const roller = require('./modules/roller');
const helper = require('./modules/help');
const prefix = "!";

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("The bot is online!");
});

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(' ');

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
        //case 'events':
            //break;
        //case 'calc':
            //break;
        //case 'timezone':
            //break;
        //case '8ball':
            //break;
        //case 'workshop':
            //break;
    }
});

bot.login(process.env.BOT_TOKEN);

