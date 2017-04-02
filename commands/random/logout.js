const commando = require('discord.js-commando');

class GetBonked extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'random',
            memberName: 'leave',
            description: 'Makes the bot leave and breaks it.'
        });
    }
    async run(message, args) {
        client.logOut((err) => {
                    console.log(err);
});
    }
}

module.exports = GetBonked;