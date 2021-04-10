const schedule = require('node-schedule');
const Discord = require('discord.js');
const os = require('os');


function automate(){
  const rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = [0, new schedule.Range(4, 0)];
  rule.hour = 12;
  rule.tz = 'Etc/UTC';
  
  new Discord.Message(client, data, channel)
  {
      _channel = lottery;
      _data = data;
  }
  
  schedule.scheduleJob(rule, function(){
    console.log('Reminder for lottery ', os.EOL, 
    'Ends Sunday at 5pm');
  });
}

exports.automate = automate;
