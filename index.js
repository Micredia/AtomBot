const commando = require('discord.js-commando');
const Discord = require('discord.js');
const client = new commando.Client();

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.login('token')