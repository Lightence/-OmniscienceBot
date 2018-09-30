const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 



client.login(process.env.NDk1NTU1MzYwNDk3NTk4NDc1.DpFkUA.B0UMLJ-F6XamLnN2_dUAtu0NPKY);
