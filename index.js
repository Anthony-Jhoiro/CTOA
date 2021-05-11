const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require("dotenv");

const PREFIX = "c'est toi";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(PREFIX)) {

    const newName = msg.content.slice(PREFIX.length).trim();
    if (newName.length === 0) {
        return;
    }
    
    

    const ref = msg.reference.messageID;

    msg.channel.messages.fetch(ref)
        .then(message => {
            msg.reply(`${message.author.username} is ${newName}`);

            message.member.setNickname(newName)
        }) 
  }
});

dotenv.config();

client.login(process.env.TOKEN);