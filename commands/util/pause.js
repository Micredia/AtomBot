const commando = require('discord.js-commando');

class PauseMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            group: 'util',
            memberName: 'pause',
            description: 'Pauses music'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('');
    }
}

module.exports = PauseMusic;
