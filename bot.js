const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Ready!')  

    //List of servers the bot is in
    console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name)

          // List all channels
    guild.channels.cache.forEach((channel) => {
        console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
    })

    })

    client.user.setActivity("Homeless take a shower", {type: "WATCHING"})


})
//Responses
client.on('message', message => {

    if (message.content === 'anyone on?') 
        message.channel.send('Shut yo bitch ass up. Wait patiently ');

    if (message.content === 'hi') 
        message.channel.send('stfu');

    if (message.content === 'nigga') 
        message.channel.send('stfu homeless, stop saying the n-word, ugly ass');

	if (message.content === 'Hi') 
        message.channel.send('stfu');

});


    //Token is NzM0MTQyNzUwNDY2OTAwMDY4.XxddYg.EvXHFFtOjU28QjK9Up9AAIGTMQg
    client.login("NzM0MTQyNzUwNDY2OTAwMDY4.XxddYg.EvXHFFtOjU28QjK9Up9AAIGTMQg");
