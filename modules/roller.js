const Discord = require('discord.js');

function roll(rolled, author){
    var pattern = /^\d[dD]\d+$/ig;

    if(pattern.test(rolled)){
        var diceNum = rolled.substring(0, rolled.toLowerCase().indexOf('d'));
        var sides = rolled.substring(rolled.toLowerCase().indexOf('d')+1);

        var diceRoll = [];

        for(var i = 0; i < diceNum; i++){
            diceRoll.push(Math.ceil(Math.random() * sides));
        }
        var response = {
            type: "Roll",
            embed: new Discord.MessageEmbed()
            .setColor('#99ddff')
            .setDescription(author + " rolled: " + diceRoll.join(", "))
        };
    }
    else {
        var response = {
            type: "Error",
            embed: new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle('Error')
            .setDescription("The Deep Palace Garm uses Voice of the Dragon\n⮕ You take " + (Math.ceil(Math.random() * 1000000)) + " damage.\nYou are defeated by the Deep Palace Garm.\n\n(Please try again in the format !roll #d## e.g. !roll 1d100)")
        }
    }  

    return response;
}

exports.roll = roll;