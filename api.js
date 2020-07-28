const { Client, MessageEmbed } = require('discord.js');

const client = new Client();
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
