const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('Hello, I am Kodiak. Developed by @Ev0!');
 
      client.on ("guildMemberAdd", member=> {

    let welcomeGuild = member.guild; 

    let welcomeChannel = welcomeGuild.channels.find("name", "welcome");

    welcomeChannel.send(`Welcome to Billy's Dev Server, ${member} I hope you have fun!`);

});
client.on ("guildMemberRemove", member=> {

  let welcomeGuild = member.guild; 

  let welcomeChannel = welcomeGuild.channels.find("name", "welcome");

  welcomeChannel.send(`Sorry to see you leave., ${member}`);
 
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
