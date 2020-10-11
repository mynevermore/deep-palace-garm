const Discord = require('discord.js');

function help(){
    var help = new Discord.MessageEmbed()
        .setColor("#008080")
        .setTitle("Help & Information")
        .setDescription("Welcome to the Accursed Horde Discord Bot - Deep Palace Garm!\n\nThis is the help and information message which will hopefully help you with navigating all the interesting information in the bot.\nIf you have any suggestions for additional functionality, either use the Suggestion channel or message Hope or Qoyar directly.\n\nPlease find a list of commands below.")
        .addField('Roll', 'Accessed by typing !roll #d##, then the roller will return your roll. For example: !roll 2d10 will return the result of rolling 2d10s', true);
    
    return help;
}

exports.help = help;