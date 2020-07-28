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
    
    //Message is sent when online
    let generalChannel = client.channels.cache.get("735199026676236343")
    const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/emojis/736669610002087946.png?v=1')
    generalChannel.send("Sup fags, guess who's back online?", attachment)

})
//Responses
client.on('message', message => {

    if (message.content === '!Aussie') {
        const attachment = new Discord.MessageAttachment('https://media.discordapp.net/attachments/625063966564941861/737032921122209882/Screenshot_2020-07-25_at_11.19.46_PM.png');
        // Send the attachment in the message channel with a content
        message.channel.send(`Aussies = Pedos`, attachment);
      }

    if (message.content === '!dumbass') {
        const attachment = new Discord.MessageAttachment('https://media.discordapp.net/attachments/625063966564941861/736680719580921856/0325121f-5be3-4dd3-9e4a-95b82efae7f7.png?width=1025&height=123');
        // Send the attachment in the message channel with a content
        message.channel.send(`What a dumbass`, attachment);
      }

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

const { Client, MessageEmbed } = require('discord.js');

const prefix = '!';

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    const fetch = require('node-fetch');

    const querystring = require('querystring');

    if (command === 'urban') {
      if (!args.length) {
        return message.channel.send('You need to supply a search term!');
  }

	  const query = querystring.stringify({ term: args.join(' ') });

    const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
      if (!list.length) {
          return message.channel.send(`No results found for **${args.join(' ')}**.`);
          message.channel.send(list[0].definition);
}
}


	// ...
});



//Token is NzM0MTQyNzUwNDY2OTAwMDY4.XxNZtw.Gkq_k4wKV6hbxXEAdOCnTdzdBkI
client.login("NzM0MTQyNzUwNDY2OTAwMDY4.XxNZtw.Gkq_k4wKV6hbxXEAdOCnTdzdBkI");
