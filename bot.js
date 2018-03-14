const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('Hello, I am Kodiak. Developed by @Ev0!');
        
        client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
        
        client.on('message', message => {
    if (message.content === 'commands') {
    	message.reply('My commands are help and commands.');
        
        client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('pickle');
       
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
