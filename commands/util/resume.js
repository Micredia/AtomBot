const commando = require('discord.js-commando');

class ResumeMusic extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'resume',
            group: 'util',
            memberName: 'resume',
            description: 'Resumes music'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('');
    }
}

module.exports = ResumeMusic;
