const commando = require('discord.js-commando');

class JoinMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'util',
            memberName: 'join',
            description: 'Makes the bot join the voice channel.'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('');
    }
}

module.exports = JoinMusic;
