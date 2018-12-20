const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("506776584741453824")
setInterval(function() {
channel.send(`Clan x8wy`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
