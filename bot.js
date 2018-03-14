const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on("message", function(msg) {
    if(msg.content === prefix + "!help"
       msg.channel.send("Hello, I'm Kodiak (Developed by @Ev0), and I like to help you with things!")
    

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('Hello, I am Kodiak. Developed by @Ev0!');
      
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
