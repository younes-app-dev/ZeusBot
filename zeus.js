const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});





client.login('NDMyNjM4MzU3NDU4MTI0ODEz.DbzFPA.9v5TavCLN13X908Hm6z5cLPzX6o');
