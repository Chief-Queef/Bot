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

    let generalChannel = client.channels.cache.get("625063966564941861")
    const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/emojis/736669610002087946.png?v=1')
    generalChannel.send("Sup fags, guess who's back online?", attachment)

})
//Responses
client.on('message', message => {

    if (message.content === '!wot') {
        const attachment = new Discord.MessageAttachment('https://media.discordapp.net/attachments/625063966564941861/736673151898878052/2c09ad8a-748a-4bd0-98f0-045dfd5e9d8b.png?width=1025&height=82');
        // Send the attachment in the message channel with a content
        message.channel.send(`????`, attachment);
      }

    if (message.content === '!homeless') {
        // Create the attachment using MessageAttachment
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/emojis/732129824734183484.png?v=1');
        // Send the attachment in the message channel with a content
        message.channel.send(`homeless gay af`, attachment);
      }

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
