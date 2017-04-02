const commando = require('discord.js-commando');

class PlayMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'util',
            memberName: 'play',
            description: 'Plays'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('');
    }
}

module.exports = PlayMusic;
