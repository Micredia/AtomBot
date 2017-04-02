const commando = require('discord.js-commando');

class QueueMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'queue',
            group: 'util',
            memberName: 'queue',
            description: 'queues music'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('');
    }
}

module.exports = QueueMusic;
