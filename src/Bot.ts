import {Client, Intents} from "discord.js";
const { token } = require('./config.json');

console.log("Bot is starting...");

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [{
    name: 'bye',
    description: 'Replies with Pong!'
}];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands('948050326857064448', '706760939768250428'),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'bye') {
        await interaction.reply('Pong!');
    }
});

client.login(token);
