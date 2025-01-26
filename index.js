const { Client, Events, GatewayIntentBits, Guild } = require('discord.js');
const { createShortUrl } = require('./urldata');
require('dotenv').config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('guildMemberAdd', (member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'general')
    if(!channel) return (
        member.send("Welcome to the server")
    )
    channel.send(`Welcome to the server, ${member}`)
})

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('Create' || 'create')) {
        const url = message.content.split(' ')[1]
        const shortUrl = await createShortUrl(url)
        if (!shortUrl) return message.reply("Couldn't create short url")
        return message.reply({
            content: " Here's your short url: " + "http://localhost:3000/api/url/" + shortUrl.shortId,

        })
    }
    message.reply("Hey! Im 1xNix's Bot")
})



client.login(process.env.DISCORD_BOT_TOKEN);

client.on('interactionCreate', async interaction => {
    interaction.reply('pong!!')

})