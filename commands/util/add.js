const commando = require('discord.js-commando');

class AddMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'add',
            group: 'util',
            memberName: 'add',
            description: 'adds something to queue'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('');
    }
}

module.exports = AddMusic;
