const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('Hello, I am Kodiak. Developed by @Ev0!');
        
 client.command('message', message => {
     if(message.content === '!help') {
         message.reply('gucci gang');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
