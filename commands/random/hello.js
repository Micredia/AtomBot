const commando = require('discord.js-commando');

class HelloTest extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            group: 'random',
            memberName: 'hello',
            description: 'Responds with a nice comment.'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('Hello there, ' + message.author.username);
    }
}

module.exports = HelloTest;
