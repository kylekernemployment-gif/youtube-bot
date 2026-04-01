const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

// --------------------
// EXPRESS (Render fix)
// --------------------
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Web server running");
});

// --------------------
// DISCORD BOT
// --------------------
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("clientReady", () => {
  console.log(`Bot is online as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
