const express = require("express")
const app = express();

app.listen(3000, () => {
  console.log('Bread Bot is running')
})

app.get("/", (req, res) => {
  res.send("Bread Bot Online")
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.config = require("./config.json");


// Bread message every time someone says Bread
client.on("messageCreate", message => {
    if(message.content === "Hi") {
    message.reply("Hello cutie <a:Supsexy:881444328805920769>")
    }
    if(message.content === "hi") {
      message.reply("Hello cutie <a:Supsexy:881444328805920769>")
      }
    if(message.content === "Bread") {
    message.reply("Bread <a:bread_happy:944589925632839750>")
    }
    if(message.content === "Bread 🍞") {
    message.reply("Bread <a:bread_happy:944589925632839750>")
    }
    if(message.content === "bread 🍞") {
    message.reply("Bread <a:bread_happy:944589925632839750>")
    }
    if(message.content === "Bread🍞") {
    message.reply("Bread <a:bread_happy:944589925632839750>")
    }
    if(message.content === "bread🍞") {
    message.reply("Bread <a:bread_happy:944589925632839750>")
    }
    if(message.content === "bread") {
      message.reply("Bread <a:bread_happy:944589925632839750>")
    }
    if(message.content === "🍞") {
      message.reply("<a:bread_happy:944589925632839750>")
    }
    if(message.content === "Spaghetti") {
      message.reply("Bread is better <a:RAGEBREAD:944589925335060481>")
    }
    if(message.content === "spaghetti") {
      message.reply("Bread is better <a:RAGEBREAD:944589925335060481>")
    }
    if(message.content === "Spaghetti 🍝") {
      message.reply("Bread is better <a:RAGEBREAD:944589925335060481>")
    }
    if(message.content === "spaghetti 🍝") {
      message.reply("Bread is better <a:RAGEBREAD:944589925335060481>")
    }
    if(message.content === "🍝") {
      message.reply("Bread is better <a:RAGEBREAD:944589925335060481>")
    }
    if(message.content === "your gay") {
      message.reply("Yeah and what?")
    }
    if(message.content === "Your gay") {
      message.reply("Yeah and what?")
    }
    if(message.content === "spaghetti is horse") {
      message.reply("agreed! <a:bread_happy:944589925632839750> BREAD ON TOP <a:bread_happy:944589925632839750>")
    }
    if(message.content === "spaghetti is bad") {
      message.reply("agreed! <a:bread_happy:944589925632839750> BREAD ON TOP <a:bread_happy:944589925632839750>")
    }
    if(message.content === "Spaghetti is horse") {
      message.reply("agreed! <a:bread_happy:944589925632839750> BREAD ON TOP <a:bread_happy:944589925632839750>")
    }
    if(message.content === "Spaghetti is bad") {
      message.reply("agreed! <a:bread_happy:944589925632839750> BREAD ON TOP <a:bread_happy:944589925632839750>")
    }
    if(message.content === "Bread you're cute") {
      message.reply("Thanks <a:kith:944591230329847838>")
    }
    if(message.content === "bread you're cute") {
      message.reply("Thanks <a:kith:944591230329847838>")
    }
    if(message.content === "Bread your the best") {
      message.reply("I know i am <a:memesdens:944592684515987576>")
    }
    if(message.content === "bread your the best") {
      message.reply("I know i am <a:memesdens:944592684515987576>")
    }
    if(message.content === "Bread bot is the best") {
      message.reply("I know i am <a:memesdens:944592684515987576>")
    }
    if(message.content === "bread bot is the best") {
      message.reply("I know i am <a:memesdens:944592684515987576>")
    }
    if(message.content === "Bread bot you suck") {
      message.reply("No i don't, i run you kid")
    }
    if(message.content === "U suck bread bot") {
      message.reply("No i don't, i run you kid")
    }
    if(message.content === "u suck bread bot") {
      message.reply("No i don't, i run you kid")
    }
    if(message.content === "You suck bread bot") {
      message.reply("No i don't, i run you kid")
    }
    if(message.content === "you suck bread bot") {
      message.reply("No i don't, i run you kid")
    }
    if(message.content === "Who's Tahlia?") {
      message.reply("A verified <a:WhiteVerify:939715172698816514> Pedo, anyone under the age of 18 she will come for you")
    }
    if(message.content === "Who's tahlia?") {
      message.reply("A verified <a:WhiteVerify:939715172698816514> Pedo, anyone under the age of 18 she will come for you")
    }
    if(message.content === "tahlia") {
      message.reply("verified <a:WhiteVerify:939715172698816514> Pedo, anyone under the age of 18 she will come for you")
    }
    if(message.content === "Tahlia") {
      message.reply("verified <a:WhiteVerify:939715172698816514> Pedo, anyone under the age of 18 she will come for you")
    }
    if(message.content === "Who's your owner bread?") {
      message.reply("<@459940044866846730>")
    }
    if(message.content === "who's your owner bread?") {
      message.reply("<@459940044866846730>")
    }
    if(message.content === "Who's your owner bread") {
      message.reply("<@459940044866846730>")
    }
    if(message.content === "who's your owner bread") {
      message.reply("<@459940044866846730>")
    }
})

client.once('ready', () => { 
  console.log('Ready!'); client.user.setActivity('Bread Movies', {type: 'STREAMING', url: 'https://twitch.tv/teamis2u' }) 
});

client.login(client.config.token);