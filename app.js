const Discord = require('discord.js');
const parsbot = new Discord.Client();
const request = require('request');
const prefix = '$';


parsbot.login('NDA5NDI5MzkzNDU1NDQ4MDY0.DVja-w.bgfkuSYmcMe-DOjg_JUcYntnJDU');

parsbot.on('ready', () => {

    console.log('Pars Bot started.')

});

parsbot.on ('message' , message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;

    if (msg === prefix + 'PING') {

        message.channel.send('Pong!');
    }

    else if (msg === prefix + 'HI') {

        message.channel.send('Hi ' + sender);
    }

    else if (msg === prefix + 'HELLO') {

        message.channel.send('Hello ' + sender);
    }

    else if (msg === prefix + 'MERHABA') {

        message.channel.send('Merhaba ' + sender);
    }

    else if (msg === prefix + 'SELAM') {

        message.channel.send('Selam ' + sender);
    }

    else if (msg.startsWith(prefix + 'PRICE')) {
 
        let coinname = msg.replace(prefix + 'PRICE ','');
            request('https://api.coinmarketcap.com/v1/ticker/' + coinname,
                function(error,res,body)
                {
                var obj = JSON.parse(body);
                if(obj[0] === undefined)
                {   
                    console.log("Invalid Coin ID");
                    message.channel.send('Invalid Coin Name');
                }
                else
                {
                    console.log(obj[0]);
                    let value = coinname + " : Current Price " + obj[0].price_usd + " | 24hr Percentage Change " + obj[0].percent_change_24h;
                    message.channel.send(value);
                }
            });
    }
});