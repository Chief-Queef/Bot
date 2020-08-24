const Discord = require("discord.js");
const client = new Discord.Client();



client.on('message', message => {
  if (message.content === "!kick") {

    exports.run = async (client, message, Discord, prefix, args) => {

    
      let target = message.mentions.members.first() || message.guild.members.fetch(args[0]);
    
      let reason = args.slice(1).join(" ");
    
    if (!reason) reason = "No reason given.";
    
    if (!message.member.hasPermission(["BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_CHANNELS"]) || !message.guild.owner)
      return message.channel.send(
        "You don't have permission to use this command."
      );
    
      if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "I don't have enough permissions to ban this member, dumbass"
      );
    
    if (!target) { message.channel.send(`No user has been mentioned or found, please try again.`) }
    
    else if(!target.bannable) { message.channel.send(`I do not have enough permissions or this user's role is higher than mine.`) }
    
    else {let msg = message.channel.send(`${target.tag}, `).then(msg.react('🔨'))}
    
            
    }

  }
  


})

client.once('ready', () => {
    console.log('Go kick them')  
})

//Token is NzM0MTQyNzUwNDY2OTAwMDY4.XxNZtw.fyIrCXc4sBPNAOeoEPt0sNvzrEk
client.login("NzM0MTQyNzUwNDY2OTAwMDY4.XxNZtw.fyIrCXc4sBPNAOeoEPt0sNvzrEk");
