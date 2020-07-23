const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Ready!')

    client.user.setActivity("Homeless take a shower", {type: "WATCHING"})

})
client.on('message', message => {

	if (message.content === 'damn') {
        message.channel.send('damn');
    }
});
//Token is NzM0MTQyNzUwNDY2OTAwMDY4.XxddYg.EvXHFFtOjU28QjK9Up9AAIGTMQg
client.login("NzM0MTQyNzUwNDY2OTAwMDY4.XxddYg.EvXHFFtOjU28QjK9Up9AAIGTMQg");
