const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'online'

});
});
 
client.login('paste ur token here bratan hurensohn');