const schedule = require('node-schedule');
const Discord = require('discord.js');

function automate(){
  const rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = [0, new schedule.Range(0, 4)];
  rule.hour = 12;
  rule.tz = 'Etc/UTC';
  rule.channel = guild;
  
  let guild = client.guilds.find((guild) => guild.id === '716561677327401002');

    if (!guild) {
      // Guild can't be found
      return;
    }

    let role = guild.roles.find((role) => role.name === '716857241965428797');

    if (!role) {
      // Role can't be found
      return;
    }
    else{
      schedule.scheduleJob(rule, function(){
        client.on('message', message => {
          client.channels.cache.get(role).send('Reminder for lottery \n Ends Sunday at 5pm @Mimic');
      })
      });
    }
}

exports.automate = automate;
