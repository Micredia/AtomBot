const commando = require('discord.js-commando');

module.exports = class CoinFlipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'Flips a coin.'
        });
    }
    async run(message, args) {
        var roll = Math.floor(Math.random() * 2) + 1;
        if(roll == 1){
            message.reply("you flipped heads");
        
        }else{
            message.reply("you flipped tails.")
        } 
            
   }
}


