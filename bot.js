const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on ("guildMemberAdd", member=> {

    let welcomeGuild = member.guild; 

    let welcomeChannel = welcomeGuild.channels.find("name", "welcome");

    welcomeChannel.send(Welcome to Billy's Dev Server, ${member} I hope you have fun!);

});
client.on ("guildMemberRemove", member=> {

  let welcomeGuild = member.guild; 

  let welcomeChannel = welcomeGuild.channels.find("name", "welcome");

  welcomeChannel.send(Sorry to see you leave., ${member});
});


});
client.login('NDEyMDM1ODAwNzU1MzM5Mjg2.DWJXxA.8DzKXelHDmr3XyneplzyO5jXYYM');
