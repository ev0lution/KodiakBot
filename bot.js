const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
        
          if(cmd === "!roll") {
    let result = Math.ceil(Math.random() * 6);
    return message.channel.send(":game_die: The magic dice rolls a " + result + "!");
    
  };

  if(cmd === "!help") return message.channel.send
  ("I'm a fun bot that likes to play games and do useful things, and use !commands to see my commands!");
  //help
  
  if(cmd === "!commands") {
    return message.channel.send("My commands are !help, !commands, !roll. Soon I will be able to mute people, and play music!");


  };
  

});

client.on ("guildMemberAdd", member=> {

    let welcomeGuild = member.guild; 

    let welcomeChannel = welcomeGuild.channels.find("name", "welcome");

    welcomeChannel.send(`Welcome to this server, ${member} I hope you have fun!`);

});
client.on ("guildMemberRemove", member=> {

  let welcomeGuild = member.guild; 

  let welcomeChannel = welcomeGuild.channels.find("name", "welcome");

  welcomeChannel.send(`Sorry to see you leave., ${member}`);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
