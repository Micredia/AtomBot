const commando = require('discord.js-commando');

class TimeMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'time',
            group: 'util',
            memberName: 'time',
            description: 'Resumes music'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('');
    }
}

module.exports = TimeMusic;