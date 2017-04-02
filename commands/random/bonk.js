const commando = require('discord.js-commando');

class GetBonked extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bonk',
            group: 'random',
            memberName: 'bonk',
            description: 'Responds with a nice comment.'
        });
    }
    async run(message, args) {
        message.reply('you just got BONKED.');
    }
}

module.exports = GetBonked;
