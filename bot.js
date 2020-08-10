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
//https://cdn.discordapp.com/attachments/735199026676236343/742225787482275850/Im_sorry_we_couldnt_skype_tonight.mp4
client.on('message', message => {

    if (message.content === 'Hey-') {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/735199026676236343/742225787482275850/Im_sorry_we_couldnt_skype_tonight.mp4');
        // Send the attachment in the message channel with a content
        message.channel.send(`Oh hey`, attachment);
      }


    if (message.content === 'hey-') {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/735199026676236343/742225787482275850/Im_sorry_we_couldnt_skype_tonight.mp4');
        // Send the attachment in the message channel with a content
        message.channel.send(`Oh hey`, attachment);
      }


    if (message.content === 'Hey') {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/735199026676236343/742225787482275850/Im_sorry_we_couldnt_skype_tonight.mp4');
        // Send the attachment in the message channel with a content
        message.channel.send(`Oh hey`, attachment);
      }


    if (message.content === 'Hey -') {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/735199026676236343/742225787482275850/Im_sorry_we_couldnt_skype_tonight.mp4');
        // Send the attachment in the message channel with a content
        message.channel.send(`Oh hey`, attachment);
      }


    if (message.content === 'hey') {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/735199026676236343/742225787482275850/Im_sorry_we_couldnt_skype_tonight.mp4');
        // Send the attachment in the message channel with a content
        message.channel.send(`Oh hey`, attachment);
      }


    if (message.content === 'hey -') {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/735199026676236343/742225787482275850/Im_sorry_we_couldnt_skype_tonight.mp4');
        // Send the attachment in the message channel with a content
        message.channel.send(`Oh hey`, attachment);
      }

    if (message.content === 'Anyone on') 
        message.channel.send('Shut yo bitch ass up. Wait patiently ');


    if (message.content === 'Anyone on') 
        message.channel.send('Shut yo bitch ass up. Wait patiently ');

    if (message.content === 'anyone on') 
        message.channel.send('Shut yo bitch ass up. Wait patiently ');

    if (message.content === 'Anyone on?') 
        message.channel.send('Shut yo bitch ass up. Wait patiently ');

    if (message.content === "🔥")
        message.channel.send('Did someone say fire? https://soundcloud.com/home-less-204896280/this-one-is-for-nya');

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

// https://soundcloud.com/home-less-204896280/this-one-is-for-nya

//Meme command
const got = require('got');

client.once('ready', () => {
    console.log('Memes are ready!')  
})

//https://www.reddit.com/r/memes/random/.json

client.on('message', message => {
    if (message.content === "!meme") {
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
        })
    }

})

//Mute command
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
  if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

      let mutedRole = message.guild.roles.cache.get('MUTE_ROLE_ID');
      let verifiedRole = message.guild.roles.cache.get('ROLE ID (IF YOU ALREADY HAVE A ROLE DEAFULT FOR PEOPLE WHO JOINS YOUR SERVER!)');
      if(mutedRole) {
          member.roles.add(mutedRole);
          member.roles.remove(verifiedRole);
          message.channel.send("User was Successfully muted.");
      }
      module.exports.config = {
        name: "mute",
        description: "",
        usage: "!mute",
        accessableby: "Members",
        aliases: []
      }
}




//Token is NzM0MTQyNzUwNDY2OTAwMDY4.XxNZtw.fyIrCXc4sBPNAOeoEPt0sNvzrEk
client.login("NzM0MTQyNzUwNDY2OTAwMDY4.XxNZtw.fyIrCXc4sBPNAOeoEPt0sNvzrEk");
