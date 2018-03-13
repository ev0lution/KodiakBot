const Discord = require("discord.js");
const client = new Discord.Client();

const botconfig = require ("./botconfig.json");



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === ".mute") {
    //hello }); 
    return message.channel.send("Player has been muted!");
  var bNoParam = new Boolean();
  //stll in devlopment
  var bZero = new Boolean(0);
  var bNull = new Boolean(null);
  var bEmptyString = new Boolean('');
  var bfalse = new Boolean(false);
  };
 
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

});
client.login(process.env.BOT_TOKEN);
